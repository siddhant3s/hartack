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

const title = 'React Starter Kit';
import logoUrl from './hartack_logo.svg';

function Home({ news }, context) {
  context.setTitle(title);
  return (
    <div className={s.root}>
      <div className={s.container}>
        <h5 className={s.title}></h5>
          <img src={logoUrl} width="320" height="320"></img>
          <div className={s.info}>
          harTack is a community supported HAR file analyser
          </div>
          
            <div className={s.content}>                
               <form className={s.uploader} encType="multipart/form-data" >
                   <input type="file" name="file" className={s.uploadFile}/>
                   <button>Upload</button>
               </form>                
            </div>
        <div className={s.pasteurl}><input type="text" placeholder="Paste URL for HAR"></input></div>
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
