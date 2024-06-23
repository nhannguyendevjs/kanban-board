import * as UserTypes from '../types/users.type';

export type Task = {
  _id: string;
  title: string;
  description: string;
  status: string;
  assignee: UserTypes.User;
};

export type Column = {
  title: string;
  tasks: Task[];
  addTask: (task: Task) => Task[];
  removeTask: (taskId: string) => Task[];
};

export type KanbanBoard = {
  title: string;
  columns: Column[];
};
