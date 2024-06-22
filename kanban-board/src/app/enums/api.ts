import { environment } from '../environments/environment';

const TASKS_SERVICE_URL = environment.tasksServiceUrl + '/api/' + environment.tasksServiceVersion;

export const APIs = {
  auth: {
    signIn: TASKS_SERVICE_URL + '/auth/sign-in',
    me: TASKS_SERVICE_URL + '/auth/me',
  },
  tasks: {
    search: TASKS_SERVICE_URL + '/tasks/search',
  },
};
