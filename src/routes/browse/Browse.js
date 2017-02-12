/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React, { PropTypes } from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Browse.css';
import RecipieList from '../../components/RecipieList';

const title = 'Browse Recipes';

const RECIPIES = [
{name: 'XSS', owner: 'Rajesh', language: 'Python', description:'Used for performing XSS'},
{name: 'Cross Site Scripting', owner: 'Chakshu', language: 'C++', description:'Used for cross site scripting'},
{name: 'Something else', owner: 'Sanyam', language: '.NET', description:'Used for something'},
{name: 'SQL Injection', owner: 'Sid', language: 'Java', description:'Used for checking sql injections'}];
function Browse(props, context) {
  context.setTitle(title);
  return (
    <div className={s.root}>
      <div className={s.container}>
        <h1>{title}</h1>
        <RecipieList recipies={RECIPIES} />
      </div>
    </div>
  );
}

Browse.contextTypes = { setTitle: PropTypes.func.isRequired };

export default withStyles(s)(Browse);
