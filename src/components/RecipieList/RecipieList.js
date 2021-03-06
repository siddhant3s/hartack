/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React, { PropTypes } from 'react';
import cx from 'classnames';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './RecipieList.css';
import Link from '../Link';

function RecipieList({ recipies }) {
  console.log(recipies);
  const rows = recipies.map(recipie => (
    <tr key={recipie.name}>
      <td>{recipie.name}</td>
      <td>{recipie.User.profile.displayName}</td>
      <td>{recipie.description}</td>
      <td>{recipie.language}</td>
      <td><a href={recipie.url}>View</a></td>
    </tr>
  ));
  return (
    <table id="recipies">
      <thead>
        <tr>
          <th>Recipie Name</th>
          <th>Owner</th>
          <th>Description</th>
          <th>Language</th>
          <th>View</th>
        </tr>
      </thead>
      <tbody>{rows}</tbody>
    </table>
  );
}

RecipieList.propTypes = {
  // recipes: PropTypes.array,
};

export default withStyles(s)(RecipieList);
