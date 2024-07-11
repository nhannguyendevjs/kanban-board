import { Component, Inject, inject } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import * as KanbanBoardModels from '../../../models/kanban-board.model';

const MaterialModules = [MatIconModule, MatButtonModule, MatDialogModule, MatFormFieldModule, MatInputModule, MatSelectModule];

@Component({
  selector: 'app-update-task',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, ...MaterialModules],
  templateUrl: './update-task.component.html',
  host: {
    class: 'block p-4',
  },
})
export class UpdateTaskComponent {
  #dialogRef = inject(MatDialogRef<UpdateTaskComponent>);

  dialogData: KanbanBoardModels.Task;

  title = '';
  description = '';

  constructor(@Inject(MAT_DIALOG_DATA) public data: KanbanBoardModels.Task) {
    this.dialogData = data;
  }

  updateTask() {
    this.#dialogRef.close({ data: {} });
  }
}
