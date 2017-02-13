import React from 'react';
import Run from './Run';
import fetch from '../../core/fetch';

export default {

  path: '/run/:filename',

  async action({ params }) {
    const { filename } = params;
    const fileResp = await fetch(`/api/file/${filename}`);
    const harText = await fileResp.text();
    const resp = await fetch('/api/recipies');
    const recipies = await resp.json();
    return <Run harText={harText} harName={filename} recipies={recipies} />;
  },

};
