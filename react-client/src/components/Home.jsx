import React, { Component } from 'react';
import { Blobs } from './Blobs'
import { Coding } from './Coding'
import InlineSVG from 'svg-inline-react';
import styled from 'styled-components'
import { Controller, Scene } from 'react-scrollmagic';
import { HashLink as Link, NavHashLink as NavLink } from 'react-router-hash-link';

const CenterBlob = styled(InlineSVG)`
    position: absolute;
    margin-left: auto;
    margin-right: auto;
    left: 0;
    right: 0;
    margin-top: 30px;
    width: 1000px;
`

const ProjectsBlob = styled(InlineSVG)`
  svg {
    width: 30%;
    position: relative;
    z-index: 10;
    height: 100%;
  }
`

const ProjectsLink = styled(Link)`
`

const AboutBlob = styled(InlineSVG)`
    svg {
        position: absolute;
        left: 0;
        margin-top: -20%;
        width: 100%;
        z-index: 0;
    }
`

const AboutText = styled.div`
    font-family: mr-eaves-xl-modern, sans-serif;
    font-weight: 700;
    font-size: 35px;
    padding: 10% 20% 50px 20%;
    text-align: left;
    line-height: 1.5;
    position: relative;
    z-index: 9;
`

const IconList = styled.div`
    display: flex;
    position: relative;
    z-index: 9;
    padding: 0% 20%;
    a {
        padding-right: 30px;
        text-decoration: none !important;
        color: black !important;
    }
`

const ProjectBlob = styled(InlineSVG)`
    svg {
        margin-top: -20%;
        width: 100%;
        position: absolute;
        left: 0;
        z-index: 0;
    }
`

const MiddleDiv = styled.div`
    position: absolute;
    margin-left: auto;
    margin-right: auto;
    left: 0;
    right: 0;
    margin-top: 50px;
    width: 1000px;
`

const Text = styled.div`
    position: absolute;
    font-family: mr-eaves-xl-modern, sans-serif;
    font-weight: 700;
    left: 120px;
    top: 30px;
`

const Hello = styled.div`
    font-size: 200px;
`

const Name = styled.div`
    font-size: 100px;
    margin: 30px;
    margin-left: 150px;
`
const Line = styled.div`
    background: black;
    height: 5px;
    width: 250px;
    margin: 50px;
    margin-left: 160px;
`

const Job = styled.div`
    font-size: 50px;
    padding-left: 300px;
`

const SectionWipesStyled = styled.div`
  overflow: hidden;
  .panel {
    height: 120vh;
    width: 100vw;
    text-align: center;
  }
  
  .panel span {
    position: relative;
    display: block;
    overflow: visible;
    top: 50%;
    font-size: 80px;
  }
  
  .panel.about {
    height: 100vh;
    background-color: #FEE238;
  }
  
  .panel.projects {
    height: 100vh;
    background-color: #FFF;
  }
`;

const scrollToTop = () => {
  const c = document.documentElement.scrollTop || document.body.scrollTop;
  if (c > 0) {
    window.requestAnimationFrame(scrollToTop);
    window.scrollTo(0, c - c / 9);
  }
};

const SectionWipes = () => (
    <SectionWipesStyled>
      <Controller globalSceneOptions={{ triggerHook: 'onLeave' }}> 
        <Scene pin>
            <div className="panel">    
                <MiddleDiv>
                    <CenterBlob src={require("../images/blob-shape.svg")} />
                    <Text>
                        <Hello>Hello,</Hello>
                        <Name>I'm Aliya.</Name>
                        <Line/>
                        <Job>Frontend + Design</Job>
                    </Text>
                </MiddleDiv>
            </div>
        </Scene>
        <Scene pin>
          <div className="panel about" id="about">
            <AboutBlob src={require("../images/panel.svg")}/>
            <AboutText>
                Hi, I՚m Aliya, a junior studying Computer Science and Visual Art at Brown University. 
                I am interested in Human-centered design and UI/UX.
                In my free time, I like to laser-cut acrylic earrings and sunglasses.
            </AboutText>
            <IconList>
                <a href="https://github.com/aliyachambless"> <i class="fab fa-github fa-2x"/></a>
                <a href="https://www.linkedin.com/in/aliyachambless/"> <i class="fab fa-linkedin fa-2x"/></a>
                <a href="mailto:aliya_chambless@brown.edu"> <i class="fa fa-envelope fa-2x"/></a>
                <a href="https://www.instagram.com/aliyachambless/"> <i class="fab fa-instagram fa-2x"/></a>
            </IconList>
          </div>
        </Scene>
        <Scene 
        pin>
          <div className="panel projects" id="projects">
              <ProjectBlob src={require("../images/whitepanel.svg")}/>
              <ProjectsLink onClick={() => scrollToTop()} to="/coding">
                <ProjectsBlob src={require("../images/project-blob.svg")}/>
              </ProjectsLink>
              <ProjectsLink onClick={() => scrollToTop()} to="/art">
                <ProjectsBlob src={require("../images/project-blob2.svg")}/>
              </ProjectsLink>
              <ProjectsLink onClick={() => scrollToTop()} to="/design">
                <ProjectsBlob src={require("../images/project-blob3.svg")}/>
              </ProjectsLink>
          </div>
        </Scene>
          {/* <Scene
          duration={100}
          offset={0}
          pin
        >
            <Tween
              from={{
                opacity: 0
              }}
            >
            </Tween>
        </Scene> */}
      </Controller>
    </SectionWipesStyled>
  );

export class Home extends Component {
  render() {
    return (
      <div>
        <Blobs /> 
        <SectionWipes/>
      </div>
    )
  }
}