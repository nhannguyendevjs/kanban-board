import { LOG_LEVEL } from '../app/utils/log/log.service';

export const environment = {
  production: false,
  logLevel: LOG_LEVEL.debug,
  version: '0.0.0',
  tasksServiceUrl: 'http://localhost:8080',
  tasksServiceVersion: 'v1',
  startupUrl: '/dashboard',
  language: 'en',
} as const;
