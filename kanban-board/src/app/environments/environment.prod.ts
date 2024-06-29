import { LOG_LEVEL } from '../utils/log/log.service';

export const environment = {
  production: true,
  logLevel: LOG_LEVEL.info,
  version: '0.0.0',
  tasksServiceUrl: 'http://localhost:8080',
  tasksServiceVersion: 'v1',
  startupUrl: '/dashboard',
  language: 'en',
} as const;
