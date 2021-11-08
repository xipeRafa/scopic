import React from 'react';
import logoImg from '../../assets/logo.png';
import { LoginComp } from './LoginComp';
import { RegisterComp } from './RegisterComp';

export const NavComp = () => {

  return (
    <nav className="container navbar sticky-top navbar-light " >
      <div className="container-fluid">
        <div className="navbar-brand">
          <img src={logoImg} alt="logo" height="75" />
        </div>
        <div className="d-flex">
          <div className="col">
              <>
                <div className="btn btn-outline-secondary mx-2 disabled">
                user
                </div>
                <div className="btn btn-outline-secondary mx-2">
                  Logout
                </div>
              </>
              <>
                <LoginComp />
                <RegisterComp />
              </>
          </div>
        </div>
      </div>
    </nav>
  );
};
