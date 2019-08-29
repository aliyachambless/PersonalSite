import React, { Component } from 'react';
import { Link, NavLink } from 'react-router-dom';
import styled from 'styled-components'

const Header = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-around;
    align-items: center;
    height: 65px;
    // background: #ffffff;

  img {
    width: 30px;
    height: 30px;
  }

  .home-image {
      flex: 1;
  }
  
  .menu-bar {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    width: 350px;
    padding-right: 50px;
    height: 25px;
    font-family: acumin-pro, sans-serif;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    letter-spacing: 0.1em;
  
  
    color: #000000;
  }
  
  .menu-item {
    font-family: acumin-pro, sans-serif;
    padding: 4px;
  }
  
  .menu-item:hover, .active .menu-item {
      border-bottom: 1px solid #222222;
  }
`

export class NavBar extends Component {
  render() {
    return (
        <Header>
        <div className="home-image"><Link to="/" className="header-style"><img src="https://www.sccpre.cat/mypng/full/3-33821_emoticon-logo-png-smiley-face-emoji.png"/></Link></div>
        <div className="menu-bar">
          <NavLink to="/about" style={{ textDecoration: 'none', color: 'black' }}><div className="menu-item" activeClassName="menu-item-active">About</div></NavLink>
          <NavLink to="/resume" style={{ textDecoration: 'none', color: 'black' }}><div className="menu-item" activeClassName="menu-item-active">Resume</div></NavLink>
          <NavLink to="/projects" style={{ textDecoration: 'none', color: 'black' }}><div className="menu-item" activeClassName="menu-item-active">Projects</div></NavLink>
        </div>
      </Header>
    )
  }
}