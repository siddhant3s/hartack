import { Router } from 'express';
import multipart from 'connect-multiparty';
import { Recipie, User, UserProfile } from '../data/models';
import fetch from '../core/fetch';

const { copySync, ensureDirSync } = require('fs-extra');

const router = new Router();
const multipartMiddleware = multipart();

router.post('/submitHar', multipartMiddleware, async (req, res) => {
  const { har } = req.files;
  ensureDirSync('./harfiles');
  copySync(har.path, `./harfiles/${har.originalFilename}`);
  res.redirect('/');
});

router.post('/recipie', async (req, res) => {
  const { body, user } = req;

  if (!user) {
    res.status(403).send('No User');
    return;
  }
  let definition = '';
  try {
    const gist = await fetch(body.recipieUrl);
    definition = await gist.text();
  } catch (e) {
    res.status(500).send('Could not fetch the URL');
    return;
  }
  await Recipie.create({
    name: body.recpieName,
    language: body.recipieLang,
    description: body.recipieDescription,
    url: body.recipieUrl,
    definition,
    UserId: user.id,
  });
  res.redirect('/browse');
});

router.get('/recipies', async (req, res) => {
  const recipies = await Recipie.findAll({
    attributes: { exclude: ['definition'] },
    include: [{ model: User, include: [{ model: UserProfile, as: 'profile' }] }],
  });
  res.json(recipies);
});
export default router;
