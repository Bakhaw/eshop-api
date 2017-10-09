import express from 'express';
import config from '../config';

import initializeDb from '../db';
import middleware from '../middleware';

import shop from '../controller/shop';

let router = express();

initializeDb(db => {
  router.use(middleware({ config, db }));

  router.use('/', shop({ config, db }));
});

export default router;
