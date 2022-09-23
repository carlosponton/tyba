import * as express from 'express';
import controller from './controller';

export default express
  .Router()
  .get('/nearvy', controller.nearvy)
  .get('/history', controller.historyNearvy);
