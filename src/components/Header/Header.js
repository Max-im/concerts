import React, { Component } from 'react';
import './Header.css';

class Header extends Component {
  render() {
    return (
      <header className="header">
        <div className="container header__container flex ">
          <h2 className="header__events">События</h2>
          <a className="header__add">добавить</a>
        </div>
      </header>
    );
  }
}

export default Header;
