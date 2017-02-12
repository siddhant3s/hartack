import { Router } from 'express';
import multipart from 'connect-multiparty';

const { copySync, ensureDirSync } = require('fs-extra');

const router = new Router();
const multipartMiddleware = multipart();

router.post('/submitHar', multipartMiddleware, async (req, res) => {
  const { har } = req.files;
  ensureDirSync('./harfiles');
  copySync(har.path, `./harfiles/${har.originalFilename}`);
  res.redirect('/');
});

export default router;
