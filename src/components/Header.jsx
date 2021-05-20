import React from 'react';
import {Link} from 'react-router-dom';
import { useSelector } from 'react-redux';

import logo from '../assets/img/logo.png';
import Button from './Button';

function Header(){
  const {totalCount} = useSelector(( { favorites }) => favorites);

    return(
      <div className="header">
        <div className="container d-flex flex-row">
            <Link className="header_logo" to="/react-books">
              <div className="d-flex flex-row">
                <img width="60" height="60" src={logo} alt="logo"/>
                <div className="logo_text">
                  <h1>Онлайн библиотека</h1>
                </div>
              </div>
            </Link>
          <div className="header_favorites">
            <Link to="/react-books/favorites">
              <Button className="btn btn-outline-primary">
                <span>Избранное</span>
                <span className="right_border"></span>
                <span>{totalCount}</span>
              </Button>
              </Link>
          </div>
        </div>
      </div>
    );
}

export default Header;