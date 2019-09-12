import React, { Component } from 'react';
import InlineSVG from 'svg-inline-react';
import styled from 'styled-components'
import { Controller, Scene } from 'react-scrollmagic';
import blobs from 'blobs';
import { Tile } from './Tile'

const getRandomInt = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
}

const getRandomArbitrary = (min, max) => {
  return  Math.random() * (max - min) + min;
}

const Tiles = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  padding-top: 50px;
  font-family: acumin-pro, sans-serif;

  a {
    text-decoration: none; 
    color: black;
  }

  .description {
    font-size: 15px;
    margin: 15px;
  }

  i {
    position: absolute;
    z-index: 1;
  }

  p {
    position: relative;
    z-index: 9;
  }
`

const tiles = [
  { title: "Brightday", skills: "C++, Firebase, REST", time: "Summer 2018" },
  { title: "Shell", skills: "C", time: "Fall 2018" },
  { title: "Malloc", skills: "C", time: "Fall 2018" },
  { title: "Seamcarve", skills: "Java", time: "Spring 2018" },
  { title: "Heap", skills: "Java", time: "Spring 2018" },
  { title: "Decision Tree", skills: "Java", time: "Spring 2018" },
  { title: "Walkerbot", skills: "Swift", time: " 2018" },
  { title: "Database", skills: "C", time: "Fall 2018" }
]

export class Coding extends Component {
  render() {
    return (
      <div style={{display: "flex", justifyContent: "flex-start" }}>
        <Tiles>
          {tiles.map((tile, idx) => <Tile id={idx} title={tile.title} skills={tile.skills} time={tile.time}/>)}
         
          <div style={{width: "440px"}}></div>
          <div style={{width: "440px"}}></div>
        </Tiles>
      </div>
    )
  }
}