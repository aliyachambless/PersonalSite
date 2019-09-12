import React, { Component } from 'react';
import InlineSVG from 'svg-inline-react';
import styled from 'styled-components'
import { Controller, Scene } from 'react-scrollmagic';
import blobs from 'blobs';

//grab the core
var KUTE = require("kute.js");
// Add SVG Plugin
require("kute.js/kute-svg");
// Add CSS Plugin
require("kute.js/kute-css");
// Add Attributes Plugin
require("kute.js/kute-attr");
// Add Text Plugin
require("kute.js/kute-text");

const getRandomInt = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
}

const getRandomArbitrary = (min, max) => {
  return  Math.random() * (max - min) + min;
}

const Title = styled.div`
  position: relative;
  z-index: 9;
  font-family: mr-eaves-xl-modern, sans-serif;
  font-weight: 700;
  font-size: 20px;
`

const Skills = styled.div`
  position: relative;
  z-index: 9;
  
  font-family: mr-eaves-xl-modern, sans-serif;
`

const Container = styled.a`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  flex-grow: 0;
  width: 400px;
  height: 400px;
  background: transparent;
  margin: 20px;
  -webkit-transition: all 0.3s ease-in-out;
  -moz-transition: all 0.3s ease-in-out;
  -o-transition: all 0.3s ease-in-out;
  transition: all 0.3s ease-in-out; 
  :hover {
    -webkit-transition: all 0.3s ease-in-out;
    -moz-transition: all 0.3s ease-in-out;
    -o-transition: all 0.3s ease-in-out;
    transition: all 0.3s ease-in-out; 
  }
`

const Line = styled.div`
  background: black;
  height: 2px;
  width: 200px;
  margin: 30px;
  z-index: 9;
`

const Description = styled.div`
  font-family: acumin-pro, sans-serif;
  position: relative;
  z-index: 9;
  font-size: 14px;
  margin: 30px 50px;
  opacity: ${props => props.open ? "100" : "0"}
  height: ${props => props.open ? "auto" : "0px"}
  transition: all 0.5s ease-in-out; 
`

export class Tile extends Component {
  state = {
    open: false,
    shape: this.getBlob(blobs)
  }

  getBlob() {
    const options = {
      size: 400,
      complexity: getRandomArbitrary(0.2,0.6),
      contrast: getRandomArbitrary(0.2,0.6),
      seed: 46,
      color: '#FFF'
    }
    const blobraw = blobs(options);
    const start = blobraw.substring(
      0,
      blobraw.lastIndexOf("<g")
    );
    // + ' id="blob-' + this.props.id + '"'
    const end = blobraw.substring(
      blobraw.lastIndexOf("</path>") + 5
    );

    const blobpath = blobraw.substring(
      blobraw.lastIndexOf('d="') + 3, 
      blobraw.lastIndexOf('/>') - 2
    );
      console.log(start)
    const blob = start + ' <path transform="translate(-35, -50) scale(1.2)" stroke="none" stroke-width="0" fill="#FEE238" id="blob-' + this.props.id + '" d="' + blobpath + '" /> <path stroke="none" stroke-width="0" fill="#FFF" id="saved-' + this.props.id + '" style="visibility:hidden" d="' + blobpath + '" /> </g> </svg> '

    return blob;
  }

  open = () => {
    this.setState({open: true});
  }

  close = () => {
    this.setState({open: false});
  }

  hover = () => {
    this.open()
    KUTE.to('#blob-'+this.props.id, { path: 'M0,0h400v485H0V0z' }, 
      {
          duration: 350,
          morphIndex: 1000
      }).start();
  }

  leave() {
    this.close() 
    KUTE.to('#blob-'+this.props.id, { path: '#saved-'+this.props.id }, 
      {
          duration: 500,
          morphIndex: 1000
      }).start();
  }

  // componentDidMount() {
  //   KUTE.to('#blob-'+this.props.id, 
  //     {
  //       transform="scale(x, y)"
  //       scale: 1.2
  //     },
  //     {
  //         duration: 500,
  //         morphIndex: 1000
  //     }).start();
  // }

  render() {
    return (
      <Container href="https://www.brightday.com/" target="_blank" id="dashcode" class="codingbox" onMouseEnter={this.hover} onMouseLeave={this.leave.bind(this)}>
          <InlineSVG src={this.state.shape} id={"svg-"+this.props.id}/>
          <Title>{this.props.title}</Title>
          <Line />
          <Skills>Skills: {this.props.skills} {this.state.open && " | " + this.props.time}</Skills>
          <Description open={this.state.open}>Tested and improved facial tracking software to detect the posture of the user. Built and maintained a user database using Firebase and the REST API</Description>
      </Container>
    )
  }
}