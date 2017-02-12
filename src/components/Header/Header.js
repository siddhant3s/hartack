/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import {
  Navbar,
  Nav,
  NavItem,
  NavDropdown,
  MenuItem,
} from 'react-bootstrap';
import Link from '../Link';
import s from './Header.css';
import Navigation from '../Navigation';
function Header() {
  return (
    <Navbar className="navbar">
      <Navbar.Header>
        <Navbar.Brand>
          <Link className={s.brand} to="/">harTack</Link>
        </Navbar.Brand>
      </Navbar.Header>
      <Nav>
        <NavItem eventKey={1} href="/browse">Browse Recepies</NavItem>
        <NavItem eventKey={2} href="#">Submit Recipie</NavItem>
        <NavDropdown eventKey={3} title="More" id="basic-nav-dropdown">
          <MenuItem eventKey={3.1}>What is HarT</MenuItem>
          <MenuItem eventKey={3.2}>Another action</MenuItem>
          <MenuItem eventKey={3.3}>Something else here</MenuItem>
          <MenuItem divider />
          <MenuItem eventKey={3.3}>Separated link</MenuItem>
        </NavDropdown>
      </Nav>
        <Nav pullRight={true}>
        <NavItem eventKey={1} href="/browse">About</NavItem>
        <NavItem eventKey={2} href="#">Contact Us</NavItem>
        <NavItem eventKey={2} href="#">Login</NavItem>
      </Nav>
    </Navbar>
  );
}

export default withStyles(s)(Header);
