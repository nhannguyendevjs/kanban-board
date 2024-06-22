import { environment } from './environments/environment';

export const GlobalSettings = {
  production: environment.production,
  version: environment.version,
  tasksServiceUrl: 'http://localhost:8080',
  tasksServiceVersion: environment.tasksServiceVersion,
  startupUrl: environment.startupUrl,
  language: environment.language,
} as const;
