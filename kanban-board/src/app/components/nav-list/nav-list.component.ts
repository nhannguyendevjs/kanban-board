import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { OverlayscrollbarsModule } from 'overlayscrollbars-ngx';

@Component({
  selector: 'app-nav-list',
  standalone: true,
  imports: [CommonModule, RouterModule, OverlayscrollbarsModule],
  templateUrl: './nav-list.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavListComponent {
  readonly navItems = [
    {
      label: 'Dashboard',
      path: '/dashboard',
      selected: true,
    },
    {
      label: 'Kanban Board',
      path: '/kanban-board',
      selected: false,
    },
    {
      label: 'Settings',
      path: '/settings',
      selected: false,
    },
  ];
}
