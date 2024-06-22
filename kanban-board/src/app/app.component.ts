import { CommonModule } from '@angular/common';
import { Component, DestroyRef, inject, signal } from '@angular/core';
import { takeUntilDestroyed, toObservable } from '@angular/core/rxjs-interop';
import { NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { SwUpdate } from '@angular/service-worker';
import { TranslocoService } from '@jsverse/transloco';
import { OverlayscrollbarsModule } from 'overlayscrollbars-ngx';
import { timer } from 'rxjs';
import { LocalStorageKeys } from './enums/local-storage';
import { environment } from './environments/environment';
import { AppStoreService } from './services/app-store.service';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, OverlayscrollbarsModule],
  templateUrl: './app.component.html',
})
export class AppComponent {
  #swUpdate = inject(SwUpdate);
  #translocoService = inject(TranslocoService);
  #router = inject(Router);
  #destroyRef = inject(DestroyRef);
  #authService = inject(AuthService);
  #appStoreService = inject(AppStoreService);

  isSignedIn = signal(this.#authService.isSignedIn());

  constructor() {
    this.#registerServiceWorkerUpgrade();
    this.#registerRouterEvents();
    this.#detectLocalLanguage();
    this.#registerStoreUser();
    this.#loadCurrentUser();
  }

  #registerStoreUser() {
    toObservable(this.#appStoreService.me)
      .pipe(takeUntilDestroyed(this.#destroyRef))
      .subscribe((user) => {
        this.isSignedIn.set(!!user);
      });
  }

  #loadCurrentUser() {
    if (this.#authService.isSignedIn()) {
      this.#authService.me().subscribe((res) => {
        if (res.success) {
          const user = res.data;
          this.#appStoreService.me.set(user);
        }
      });
    }
  }

  #registerRouterEvents() {
    this.#router.events.pipe(takeUntilDestroyed(this.#destroyRef)).subscribe((navigationEvent) => {
      if (navigationEvent instanceof NavigationEnd) {
        const { urlAfterRedirects } = navigationEvent;

        if (!urlAfterRedirects.includes('/sign-in')) {
          localStorage.setItem(LocalStorageKeys.lastUrl, urlAfterRedirects);
        }
      }
    });
  }

  #registerServiceWorkerUpgrade() {
    if (this.#swUpdate.isEnabled) {
      timer(0, 60000)
        .pipe(takeUntilDestroyed(this.#destroyRef))
        .subscribe(() => {
          this.#swUpdate.checkForUpdate().then((res) => {
            if (res) {
              if (confirm('A new version is available, do you want to load it?')) {
                window.location.reload();
              }
            }
          });
        });
    }
  }

  #detectLocalLanguage() {
    const language = localStorage.getItem('language') ?? environment.language;

    this.#translocoService.setActiveLang(language);
    this.#translocoService.setFallbackLangForMissingTranslation({ fallbackLang: 'en' });
  }
}
