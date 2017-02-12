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
import s from './Home.css';
import logoUrl from './hartack_logo.svg';

const title = 'React Starter Kit';
function Home({ news }, context) {
  context.setTitle(title);
  return (
    <div className={s.root}>
      <div className={s.container}>
        <img src={logoUrl} alt="logo" width="320" height="320" />
        <div className={s.info}>
          harTack is a community supported HAR file analyser
        </div>
        <div className={s.content}>
          <form
            className={s.uploader}
            encType="multipart/form-data"
            action="/api/submitHar"
            method="POST"
          >
            <input type="file" name="har" className={s.uploadFile} />
            <button type="submit">Upload</button>
            <div className={s.pasteurl}>
              <input type="text" placeholder="Paste URL for HAR" />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

Home.propTypes = {
  news: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
    contentSnippet: PropTypes.string,
  })).isRequired,
};
Home.contextTypes = { setTitle: PropTypes.func.isRequired };

export default withStyles(s)(Home);
