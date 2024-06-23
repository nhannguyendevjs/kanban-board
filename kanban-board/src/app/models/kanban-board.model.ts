import * as UserTypes from '../types/users.type';

export class Task {
  _id: string;
  title: string;
  description: string;
  status: string;
  assignee: UserTypes.User;
  index: number;

  constructor(_id: string, title: string, description: string, status: string, assignee: UserTypes.User, index: number) {
    this._id = _id;
    this.title = title;
    this.description = description;
    this.status = status;
    this.assignee = assignee;
    this.index = index;
  }
}

export class Column {
  name: string;
  tasks: Task[];

  constructor(name: string, tasks: Task[]) {
    this.name = name;
    this.tasks = tasks;
  }

  addTask(task: Task) {
    this.tasks.unshift(task);
    return this.tasks;
  }

  removeTask(taskId: string) {
    this.tasks = this.tasks.filter((task) => task._id !== taskId);
    return this.tasks;
  }
}

export class KanbanBoard {
  title: string;
  columns: Column[];

  constructor(title: string, columns: Column[]) {
    this.title = title;
    this.columns = columns;
  }
}
