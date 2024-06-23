import { NgForOf } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink, RouterModule } from '@angular/router';

@Component({
  selector: 'app-nav-list',
  standalone: true,
  imports: [RouterModule, RouterLink, NgForOf],
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
