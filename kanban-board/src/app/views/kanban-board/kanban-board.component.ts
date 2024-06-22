import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-kanban-board',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './kanban-board.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class KanbanBoardComponent {}
