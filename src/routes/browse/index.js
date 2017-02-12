/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React from 'react';
import Browse from './Browse';
import fetch from '../../core/fetch';

export default {

  path: '/browse',

  async action() {
    const resp = await fetch('/api/recipies');
    const recipies = await resp.json();
    return <Browse recipies={recipies} />;
  },

};
