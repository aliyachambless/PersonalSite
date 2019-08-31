import React, { Component } from 'react';
import { HashLink as Link, NavHashLink as NavLink } from 'react-router-hash-link';
import styled from 'styled-components'
import resume from '../images/aliya_chambless_resume.pdf';
import Popup from 'reactjs-popup';

const Header = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-around;
    align-items: center;
    height: 65px;
    position: fixed;
    z-index: 5;
    // background: #ffffff;

  img {
    width: 30px;
    height: 30px;
  }

  .home-image {
    flex: 1;
  }

  .header-style {
    // font-family: mr-eaves-xl-modern, sans-serif;
    // font-weight: 700;
    font-family: acumin-pro, sans-serif;
    // font-size: 20px;
    line-height: normal;
    text-decoration: none;
    letter-spacing: 0.1em;
    color: #000000;
    margin-left: 50px;
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
    font-weight: 200px;
    line-height: normal;
    letter-spacing: 0.1em;
  
    a:-webkit-any-link {
        color: #000000;
        text-decoration: none;
    }
  }
  
  .menu-item {
    font-family: acumin-pro, sans-serif;
    padding: 4px;
  }
  
  .menu-item:hover, .active .menu-item {
    border-bottom: 1px solid #222222;
  }

  .menu-item.popup:hover {
    border-bottom: none;
  }

  .menu-item.list {
    border-bottom: 1px solid transparent;
    width: 62px;
  }

  .menu-item.list:hover {
    border-bottom: 1px solid #222222;
  }
`

const scrollToTop = () => {
    const c = document.documentElement.scrollTop || document.body.scrollTop;
    if (c > 0) {
      window.requestAnimationFrame(scrollToTop);
      window.scrollTo(0, c - c / 9);
    }
  };

const Card = () => (
    <div className="content">
        <NavLink to="/coding"><div className="menu-item list" activeClassName="menu-item-active">Coding</div></NavLink>
        <NavLink to="/design"><div className="menu-item list" activeClassName="menu-item-active">Design</div></NavLink>
        <NavLink to="/art"><div className="menu-item list" activeClassName="menu-item-active">Art</div></NavLink>
    </div>
);

const arrowStyle = {
    background: "#FEE238",
    boxShadow: "#FFF 2px 2px"
};

const contentStyle = {
    padding: "20px",
    width: "100px",
    marginTop: "10px",
    borderRadius: "15% 30% 60% 40%",
    background: "#FEE238",
    border: "2px solid white",
    boxShadow: "none"
};

export class NavBar extends Component {
  render() {
    return (
        <Header>
        <div className="home-image"><Link to="/" onClick={() => scrollToTop()} className="header-style">Aliya Chambless</Link></div>
        <div className="menu-bar">
          <NavLink smooth to="/#about"><div className="menu-item" activeClassName="menu-item-active">About</div></NavLink>
          <NavLink to={resume} target = "_blank"><div className="menu-item" activeClassName="menu-item-active">Resume</div></NavLink>
        <Popup
            trigger={<NavLink smooth to="/#projects"><div className="menu-item popup" activeClassName="menu-item-active">Projects</div></NavLink>}
            position="bottom center"
            on="hover"
            arrowStyle={arrowStyle}
            contentStyle={contentStyle}
        >
            <Card/>
        </Popup>
        </div>
      </Header>
    )
  }
}