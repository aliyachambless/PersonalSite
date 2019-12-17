import PropTypes from 'prop-types';
import React from 'react';
import Img from 'react-image'
import styled from 'styled-components'
import { HashLink as Link, NavHashLink as NavLink } from 'react-router-hash-link';

const Container = styled.div`
    padding: 100px;
    font-family: acumin-pro, sans-serif !important;
    transition: all 0.4s ease-in-out;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
`

const Project = styled(NavLink)`
    position: relative;
    color: black;
    :hover {
        Img {
            transform: scale(.99);
            opacity: 0.1;
        }
        div {
            top: 50%;
            left: 50%;
            opacity: 1;
        }
    }
`

const Line = styled.div`
  background: black;
  height: 2px;
  width: 200px;
  margin: 30px;
  z-index: 9;
`

const StyledImage = styled(Img)`
    width: 35vw;
    height: 30vw;
    object-fit: cover;
    margin: 15px;
    transition: all 0.2s ease-in-out 0s;
`

const ContentDetails = styled.div`
    position: absolute;
    text-align: center;
    padding-left: 1em;
    padding-right: 1em;
    width: 35vw;
    top: 45%;
    left: 50%;
    opacity: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    -webkit-transform: translate(-50%, -50%);
    -moz-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
    -webkit-transition: all 0.3s ease-in-out 0s;
    -moz-transition: all 0.3s ease-in-out 0s;
    transition: all 0.3s ease-in-out 0s;

    font-family: acumin-pro, sans-serif;
    font-size: 16px;

    h3 {
        font-family: Muli, sans-serif;
        font-weight: 700;
        font-size: 30px;
    }

    p {
        text-wrap: wrap;
        padding-left: 20%;
        padding-right: 20%;
    }
`

const TitleImage = props => 
  <StyledImage
    src={require('../images/design/' + props.imagePath)}
    // loader={/*any valid react element */}
  />

export class DesignPortfolio extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            
        };
    }

    render () {
        return (
            <Container>
                <Project to="/risd">
                    <TitleImage imagePath={"risd_cover.png"}/>
                    <ContentDetails>
                        <h3>Graphic Design @RISD</h3>
                        <Line/>
                        <p>Projects from my Graphic Design course at the Rhode Island school of design.</p>
                    </ContentDetails>
                </Project>
                <Project to="/stackOverflow">
                    <TitleImage imagePath={"stack_cover.png"}/>
                    <ContentDetails>
                        <h3>Stack Overflow Redesign</h3>
                        <Line/>
                        <p>This is a short description</p>
                    </ContentDetails>
                </Project>
                <Project to="/simmer">
                    <TitleImage imagePath={"simmer_cover.png"}/>
                    <ContentDetails>
                        <h3>Iterative Design and User Testing</h3>
                        <Line/>
                        <p>Redesign for Simmer Startup with user testing (CS1300)</p>
                    </ContentDetails>
                </Project>
                <Project to="/posters">
                    <TitleImage imagePath={"poster_cover.png"}/>
                    <ContentDetails>
                        <h3>Film Posters</h3>
                        <Line/>
                        <p>Collection of screening posters for Brown University Film Forum</p>
                    </ContentDetails>
                </Project>
                {/* <Project>
                    <TitleImage imagePath={"theylive.png"}/>
                    <ContentDetails>
                        <h3>Exchange@Brown</h3>
                        <Line/>
                        <p>Clothing buying and selling website design and implementation for CS1320</p>
                    </ContentDetails>
                </Project> */}
            </Container>
        );
    }
}

DesignPortfolio.propTypes = {
};

DesignPortfolio.defaultProps = {
};