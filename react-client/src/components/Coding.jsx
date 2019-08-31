import React, { Component } from 'react';
import InlineSVG from 'svg-inline-react';
import styled from 'styled-components'
import { Controller, Scene } from 'react-scrollmagic';
import blobs from 'blobs';

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
  padding-top: 100px;
  font-family: acumin-pro, sans-serif;

  a {
    text-decoration: none; 
    color: black;
  }

  .title {
    font-family: mr-eaves-xl-modern, sans-serif;
    font-weight: 700;
  }

  .description {
    font-size: 15px;
    margin: 15px;
  }

  .subtitle {
      font-size: 15px;
  }

  .codingbox:hover {
    background: rgba(255, 255, 255, 1);
    -webkit-transition: all 0.3s ease-in-out;
    -moz-transition: all 0.3s ease-in-out;
    -o-transition: all 0.3s ease-in-out;
    transition: all 0.3s ease-in-out; 
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

const Tile = styled.a`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-shrink: 0;
  flex-grow: 0;
  width: 400px;
  height: 500px;
  // background: #FEE238;
  background-image: url(https://www.cyberciti.biz/media/new/faq/2016/01/Hello-World-Bash-Shell-Script-Program.jpg);
  border-radius: 8px;
  margin: 20px;
  -webkit-transition: all 0.3s ease-in-out;
  -moz-transition: all 0.3s ease-in-out;
  -o-transition: all 0.3s ease-in-out;
  transition: all 0.3s ease-in-out; 
`

const getBlob = (maker) => {
  const options = {
    size: 500,
    complexity: getRandomArbitrary(0.2,0.6),
    contrast: getRandomArbitrary(0.2,0.6),
    seed: 46,
    color: '#FFF'
  }
  return maker(options);
}

export class Coding extends Component {
  render() {
    return (
      <div style={{display: "flex", justifyContent: "flex-start" }}>
        <Tiles>
          <Tile href="https://www.brightday.com/" target="_blank" id="dashcode" class="codingbox">
              <InlineSVG src={getBlob(blobs)} />
              <p class="title">BRIGHTDAY</p>
              <p class="subtitle">Skills: C++, Firebase, REST</p>
              {/* <p class="subtitle">Summer 2018 | Skills: C++, Firebase, REST</p>
              <div class="descriptionwrapper"><p class="description">Tested and improved facial tracking software to detect the posture of the user. Built and maintained a user database using Firebase and the REST API.</p></div> */}
          </Tile>
          <Tile href="http://cs.brown.edu/courses/csci0330/docs/proj/shell2.pdf" target="_blank" id="shell" class="codingbox">
              <InlineSVG src={getBlob(blobs)} />
              <p class="title">SHELL</p>
              <p class="subtitle">Fall 2018 | Skills: C</p>
              <div class="descriptionwrapper"><p class="description">Implementation of a UNIX shell in C, with input/output file redirection, foreground/background processes and signal forwarding.</p></div>
          </Tile>
          <Tile href="http://cs.brown.edu/courses/csci0330/docs/proj/malloc.pdf" target="_blank" id="malloc" class="codingbox">
              <InlineSVG src={getBlob(blobs)} />
              <p class="title">MALLOC</p>
              <p class="subtitle">Fall 2018 | Skills: C</p>
              <div class="descriptionwrapper"><p class="description">Implementation of a dynamic memory and storage allocator in C using a first-fit doubly-linked explicit-free-list.</p></div>
          </Tile>
          <Tile href="http://cs.brown.edu/courses/cs016/static/files/assignments/projects/seamcarve.pdf" target="_blank" id="seamcarve" class="codingbox">
              <InlineSVG src={getBlob(blobs)} />
              <p class="title">SEAMCARVE</p>
              <p class="subtitle">Spring 2018 | Skills: Java</p>
              <div class="descriptionwrapper"><p class="description">Dynamically resize images by removing low-importance seams to reduce the image size while still keeping important features intact.</p></div>
          </Tile>
          <Tile href="http://cs.brown.edu/courses/cs016/static/files/assignments/projects/heap.pdf" target="_blank" id="lets" class="codingbox">
              <InlineSVG src={getBlob(blobs)} />
              <p class="title">HEAP</p>
              <p class="subtitle">Spring 2018 | Skills: Java</p>
              <div class="descriptionwrapper"><p class="description">Implementation of a heap with an underlying data structure of a binary tree</p></div>
          </Tile>
          <Tile href="http://cs.brown.edu/courses/cs016/static/files/assignments/projects/decisiontree.pdf" target="_blank" id="chatter" class="codingbox">
              <InlineSVG src={getBlob(blobs)} />
              <p class="title">DECISION TREE</p>
              <p class="subtitle">Spring 2018 | Skills: Java</p>
              <div class="descriptionwrapper"><p class="description">Recursive implementation the ID3 algorithm to generate a decision tree from a dataset.</p></div>
          </Tile>
          <Tile href="https://invis.io/VEP659APQ8X" target="_blank" id="cab" class="codingbox">
              <InlineSVG src={getBlob(blobs)} />
              <p class="title">WALKERBOT</p>
              <p class="subtitle">2018 | Skills: Swift</p>
              <div class="descriptionwrapper"><p class="description">App design for a motorized telepresence robot that helps seniors maintain their independence through mobility assistance and emergency services. </p></div>
          </Tile>
          <Tile href="http://cs.brown.edu/courses/csci0330/docs/proj/database.pdf" target="_blank" id="brhousing" class="codingbox">
              <InlineSVG src={getBlob(blobs)} />
              <p class="title">DATABASE</p>
              <p class="subtitle">Fall 2018 | Skills: C</p>
              <div class="descriptionwrapper"><p class="description">Server to manage a database of key value pairs over a network. Many clients can search for items in the database, add new entries, and remove existing entries.</p></div>
          </Tile>
        </Tiles>
      </div>
    )
  }
}