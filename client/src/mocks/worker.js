import { setupWorker } from 'msw';
import { userHandler } from './userHandler';

export const worker = setupWorker(...userHandler);
