import React, { Component } from 'react';
import styled from 'styled-components'
import InlineSVG from 'svg-inline-react';
import Img from 'react-image'
import { Container, Header, Line, Hbox, Section, TextBlock, PopOutQ, Title, StyledImage, ImageContainer} from './DetailsComponents';
import { Document, Page } from 'react-pdf/dist/entry.webpack';


export class Posters extends React.Component {
  state = {
    numPages: null,
    pageNumber: 1,
  }
 
  onDocumentLoadSuccess = ({ numPages }) => {
    this.setState({ numPages });
  }
  render() {
    const { pageNumber, numPages } = this.state;
    return (
      <Container>
        <Header>Screening posters for Brown University Film Forum</Header>
        <Section>OVERVIEW</Section>
        <Hbox>
          <Title>Background</Title>
          <TextBlock>
            I design screening posters for BUFF's weekly movie nights. This design project has been ongoing for three semesters, and is a unique opportunity to see my design in a specific format evolve.
          </TextBlock>
        </Hbox>
        <Line/>
        <Section>RESEARCH</Section>
        <Hbox>
          <Title>The Royal Tenenbaums</Title>
          <TextBlock>
            In this poster, I tried to capture the ornate feeling of the movie with a graphic style that would catch people's attention.
          </TextBlock>
        </Hbox>
        <ImageContainer>
          <StyledImage
            src={require('../images/design/royal-01.png')}
            // loader={/*any valid react element */}
          />
        </ImageContainer>
        <Hbox>
          <Title>A New Leaf</Title>
          <TextBlock>
            In this poster, I began experimenting with large swaths of color and graphic fonts to more effectively grab the attention of students walking by.
          </TextBlock>
        </Hbox>
        <ImageContainer>
          <StyledImage
            src={require('../images/design/aNewLeaf.png')}
            // loader={/*any valid react element */}
          />
        </ImageContainer>
        <Hbox>
          <Title>They Live</Title>
          <TextBlock>
            This poster was an experiment in using the largest possible block of the most attention-grabbing color: red. I wanted this poster to stand out among the overcrowded poster walls at Brown.
          </TextBlock>
        </Hbox>
        <ImageContainer>
          <StyledImage
            src={require('../images/design/theylive.png')}
            // loader={/*any valid react element */}
          />
        </ImageContainer>
        <Hbox>
          <Title>Death Proof</Title>
          <TextBlock>
            I experimented with using a different attention-grabbing color, yellow, and using a lot of black and negative space to make the form pop.
          </TextBlock>
        </Hbox>
        <ImageContainer>
          <StyledImage
            src={require('../images/design/deathproof.png')}
            // loader={/*any valid react element */}
          />
        </ImageContainer>
        <Hbox>
          <Title>Duck Soup</Title>
          <TextBlock>
            I combined my previous experimentation with blocks of yellow and red for this poster, this time trying to use a block of red to more specifically highlight the stars of the movie.
          </TextBlock>
        </Hbox>
        <ImageContainer>
          <StyledImage
            src={require('../images/design/ducksoup-03.png')}
            // loader={/*any valid react element */}
          />
        </ImageContainer>
        <Line/>
        <Section>TAKEAWAYS AND NEXT STEPS</Section>
        <Hbox>
          <Title>Poster Evolution</Title>
          <TextBlock>
            Looking back at my posters for the last three semesters, it is interesting to observe how they have changed. I made use of large areas of bright colors such as red and yellow, and greatly simplified my shapes to attract more attention.
          </TextBlock>
        </Hbox>
        {/* <Hbox>
          <Title>Potential Changes</Title>
          <TextBlock>
          We propose a few minor interface changes based off some feedback given by the users. One user reported that it could be convenient to have a “Favorite” feature for dishes so that they could reference their top dishes on the go. We propose that we could add a bookmark button within each dish page to allow a user to favorite a dish, and a button on the top left corner of the app for a quick reference to a list of favorite dishes.  
          </TextBlock>
        </Hbox>
        <Hbox>
          <Title>Reflection</Title>
          <TextBlock>
          We believe that the user testing experience was extremely successful. We started our app design with a concept that we believed was intuitive and easy to use. However, by testing with users, both live and online, we realized that there was plenty of room for improvement and was able to iterate to develop an app with a more pleasant user experience that maximizes user’s ability to browse and clickability. We learnt to be open to the ideas of others and to think critically about everyone’s comments. We also learnt to that we need to critically evaluate how we ask our questions to users in order to draw out constructive criticisms from them. 
          </TextBlock>
        </Hbox> */}
      </Container>
    )
  }
}
