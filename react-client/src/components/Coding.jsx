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
  { title: "Homeroom", skills: "React, Storybook", time: "Summer 2019", href: "https://www.homeroom.com/", description: "Built and implemented components for the Homeroom website and updated the overall design."},
  { title: "Scene Recognition", skills: "Python", time: "Spring 2019", href: "https://cs.brown.edu/courses/csci1430/proj3/", description: "Used tiny image features and nearest neighbor to build histograms of visual words for training and testing images, and trained a 1-vs-all SVM"},
  { title: "Sentiment Chat", skills: "MongoDB, React, Express", time: "Spring 2019", href: "https://fast-beyond-89173.herokuapp.com/", description: "A sentiment sensitive chatroom using mongoDB and an express server"},
  { title: "Brightday", skills: "C++, Firebase, REST", time: "Summer 2018", href: "https://www.brightday.com/", description: "Tested and improved facial tracking software to detect the posture of the user. Built and maintained a user database using Firebase and the REST API."},
  { title: "Shell", skills: "C", time: "Fall 2018", href: "http://cs.brown.edu/courses/csci0330/docs/proj/shell2.pdf", description: "Implementation of a UNIX shell in C, with input/output file redirection, foreground/background processes and signal forwarding." },
  { title: "Malloc", skills: "C", time: "Fall 2018", href: "http://cs.brown.edu/courses/csci0330/docs/proj/malloc.pdf", description: "Implementation of a dynamic memory and storage allocator in C using a first-fit doubly-linked explicit-free-list." },
  { title: "Seamcarve", skills: "Java", time: "Spring 2018", href: "http://cs.brown.edu/courses/cs016/static/files/assignments/projects/seamcarve.pd", description: "Dynamically resize images by removing low-importance seams to reduce the image size while still keeping important features intact." },
  { title: "Heap", skills: "Java", time: "Spring 2018", href: "http://cs.brown.edu/courses/cs016/static/files/assignments/projects/heap.pdf", description: "Implementation of a heap with an underlying data structure of a binary tree." },
  { title: "Decision Tree", skills: "Java", time: "Spring 2018", href: "http://cs.brown.edu/courses/cs016/static/files/assignments/projects/decisiontree.pdf", description: "Recursive implementation the ID3 algorithm to generate a decision tree from a dataset." },
  { title: "Walkerbot", skills: "Swift", time: " 2018", href: "https://invis.io/VEP659APQ8X", description: "App design for a motorized telepresence robot that helps seniors maintain their independence through mobility assistance and emergency services." },
  { title: "Database", skills: "C", time: "Fall 2018", href: "http://cs.brown.edu/courses/csci0330/docs/proj/database.pdf", description: "Server to manage a database of key value pairs over a network. Many clients can search for items in the database, add new entries, and remove existing entries." }
]

export class Coding extends Component {
  render() {
    return (
      <div style={{display: "flex", justifyContent: "flex-start" }}>
        <Tiles>
          {tiles.map((tile, idx) => <Tile id={idx} title={tile.title} skills={tile.skills} time={tile.time} href={tile.href} description={tile.description}/>)}
         
          <div style={{width: "440px"}}></div>
          <div style={{width: "440px"}}></div>
        </Tiles>
      </div>
    )
  }
}