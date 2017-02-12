import { Router } from 'express';
import multipart from 'connect-multiparty';

const router = new Router();
const multipartMiddleware = multipart();

router.post('/submitHar', multipartMiddleware, async (req, res) => {
  const { har } = req.files;
  console.log('file', har.originalFilename, har.path, har.size);
  res.redirect('/');
});

export default router;
