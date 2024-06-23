import { CdkDragDrop, DragDropModule, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { NgForOf, NgIf } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { RouterLink } from '@angular/router';
import { fadeIn } from '../../animations/fade.animation';
import * as KanbanBoardModels from '../../models/kanban-board.model';

const MaterialModules = [MatIconModule, DragDropModule, MatTooltipModule, MatCardModule];

@Component({
  selector: 'app-kanban-board',
  standalone: true,
  imports: [NgIf, RouterLink, NgForOf, ...MaterialModules],
  templateUrl: './kanban-board.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    class: 'h-full p-4 flex flex-col gap-6',
  },
  animations: [fadeIn],
})
export class KanbanBoardComponent {
  // ----------------------------------------------------------------
  // Junk code written by Nhan Nguyen
  // ----------------------------------------------------------------
  board = new KanbanBoardModels.KanbanBoard('Task list', [
    new KanbanBoardModels.Column('To do', [
      new KanbanBoardModels.Task(
        't1',
        'Task 1',
        'This is a description for task 1',
        'todo',
        {
          _id: 'u1',
          name: 'Nhan Nguyen',
          email: 'hoainhaannguyen@gmail.com',
          phone: '+84 346 528 526',
          address: 'Ho Chi Minh City, Vietnam',
          role: 'admin',
          avatar: 'https://avatars.githubusercontent.com/u/4723119?v=4',
        },
        0
      ),
      new KanbanBoardModels.Task(
        't2',
        'Task 2',
        'This is a description for task 2',
        'todo',
        {
          _id: 'u1',
          name: 'Nhan Nguyen',
          email: 'hoainhaannguyen@gmail.com',
          phone: '+84 346 528 526',
          address: 'Ho Chi Minh City, Vietnam',
          role: 'admin',
          avatar: 'https://avatars.githubusercontent.com/u/4723119?v=4',
        },
        0
      ),
      new KanbanBoardModels.Task(
        't3',
        'Task 3',
        'This is a description for task 3',
        'todo',
        {
          _id: 'u1',
          name: 'Nhan Nguyen',
          email: 'hoainhaannguyen@gmail.com',
          phone: '+84 346 528 526',
          address: 'Ho Chi Minh City, Vietnam',
          role: 'admin',
          avatar: 'https://avatars.githubusercontent.com/u/4723119?v=4',
        },
        0
      ),
      new KanbanBoardModels.Task(
        't4',
        'Task 4',
        'This is a description for task 4',
        'todo',
        {
          _id: 'u1',
          name: 'Nhan Nguyen',
          email: 'hoainhaannguyen@gmail.com',
          phone: '+84 346 528 526',
          address: 'Ho Chi Minh City, Vietnam',
          role: 'admin',
          avatar: 'https://avatars.githubusercontent.com/u/4723119?v=4',
        },
        0
      ),
      new KanbanBoardModels.Task(
        't5',
        'Task 5',
        'This is a description for task 5',
        'todo',
        {
          _id: 'u1',
          name: 'Nhan Nguyen',
          email: 'hoainhaannguyen@gmail.com',
          phone: '+84 346 528 526',
          address: 'Ho Chi Minh City, Vietnam',
          role: 'admin',
          avatar: 'https://avatars.githubusercontent.com/u/4723119?v=4',
        },
        0
      ),
      new KanbanBoardModels.Task(
        't6',
        'Task 6',
        'This is a description for task 6',
        'todo',
        {
          _id: 'u1',
          name: 'Nhan Nguyen',
          email: 'hoainhaannguyen@gmail.com',
          phone: '+84 346 528 526',
          address: 'Ho Chi Minh City, Vietnam',
          role: 'admin',
          avatar: 'https://avatars.githubusercontent.com/u/4723119?v=4',
        },
        0
      ),
      new KanbanBoardModels.Task(
        't7',
        'Task 7',
        'This is a description for task 7',
        'todo',
        {
          _id: 'u1',
          name: 'Nhan Nguyen',
          email: 'hoainhaannguyen@gmail.com',
          phone: '+84 346 528 526',
          address: 'Ho Chi Minh City, Vietnam',
          role: 'admin',
          avatar: 'https://avatars.githubusercontent.com/u/4723119?v=4',
        },
        0
      ),
      new KanbanBoardModels.Task(
        't8',
        'Task 8',
        'This is a description for task 8',
        'todo',
        {
          _id: 'u1',
          name: 'Nhan Nguyen',
          email: 'hoainhaannguyen@gmail.com',
          phone: '+84 346 528 526',
          address: 'Ho Chi Minh City, Vietnam',
          role: 'admin',
          avatar: 'https://avatars.githubusercontent.com/u/4723119?v=4',
        },
        0
      ),
      new KanbanBoardModels.Task(
        't9',
        'Task 9',
        'This is a description for task 9',
        'todo',
        {
          _id: 'u1',
          name: 'Nhan Nguyen',
          email: 'hoainhaannguyen@gmail.com',
          phone: '+84 346 528 526',
          address: 'Ho Chi Minh City, Vietnam',
          role: 'admin',
          avatar: 'https://avatars.githubusercontent.com/u/4723119?v=4',
        },
        0
      ),
      new KanbanBoardModels.Task(
        't10',
        'Task 10',
        'This is a description for task 10',
        'todo',
        {
          _id: 'u1',
          name: 'Nhan Nguyen',
          email: 'hoainhaannguyen@gmail.com',
          phone: '+84 346 528 526',
          address: 'Ho Chi Minh City, Vietnam',
          role: 'admin',
          avatar: 'https://avatars.githubusercontent.com/u/4723119?v=4',
        },
        0
      ),
    ]),
    new KanbanBoardModels.Column('In progress', []),
    new KanbanBoardModels.Column('Done', []),
  ]);
  // ----------------------------------------------------------------
  // End of Junk code written by Nhan Nguyen
  // ----------------------------------------------------------------

  drop(event: CdkDragDrop<any>) {
    if (event.previousContainer.id === event.container.id) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    }
    if (event.previousContainer.id !== event.container.id) {
      transferArrayItem(event.previousContainer.data, event.container.data, event.previousIndex, event.currentIndex);
    }
  }
}
