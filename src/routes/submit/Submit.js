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
import s from './Submit.css';

const title = 'Submit Recipe';

const languages = ["Javascript", "C++", "Python", "Java"];
function Submit(props, context) {
  context.setTitle(title);
  const rows = languages.map(l => (
    <option value={l}>{l}</option>
  ));
  return (
    <div className={s.root}>
      <div className={s.container}>
        <h2>Submit your recipe here and contribute to the community !! </h2>
        <form>
          <div className={s.name}>
            <label>Recipe Name</label><br/>
            <input type="text" placeholder="Enter recipe name"></input>
          </div>
          <div className={s.name}>
            <label>Recipe Description</label><br/>
            <input type="text" placeholder="Enter recipe description"></input>
          </div>
          <div className={s.name}>
            <label>Recipe URL</label><br/>
            <input type="text" placeholder="Enter recipe URL"></input>
          </div>
          <div>
            <label>Language</label><br/>
            <select>
              {rows}
            </select>
          </div>
        <button>Submit</button>
        </form>


      </div>
    </div>
  );
}

Submit.contextTypes = { setTitle: PropTypes.func.isRequired };

export default withStyles(s)(Submit);
