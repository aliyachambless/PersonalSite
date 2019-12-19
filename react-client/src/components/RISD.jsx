import React, { Component } from 'react';
import styled from 'styled-components'
import InlineSVG from 'svg-inline-react';
import Img from 'react-image'
import { Container, Header, Line, Hbox, Section, TextBlock, PopOutQ, Title, StyledImage, ImageContainer, PDF, PDFContainer, GooeyButton, ButtonContainer } from './DetailsComponents';
import { Document, Page } from 'react-pdf/dist/entry.webpack';


export class RISD extends React.Component {
  state = {
    numPages: null,
    pageNumber: 1,
  }
 
  onDocumentLoadSuccess = ({ numPages }) => {
    this.setState({ numPages });
  }

  changePage = (pageChange) => {
    const newPage = this.state.pageNumber + pageChange;
    if(newPage > 0 && newPage <= 7) {
      console.log(pageChange)
      this.setState({pageNumber: newPage});
    }
  }
  render() {
    const { pageNumber, numPages } = this.state;
    return (
      <Container>
        <Header>RISD Graphic Design: Winter 2019</Header>
        <Section>OVERVIEW</Section>
        <Hbox>
          <Title>Background</Title>
          <TextBlock>
            This project was completed as part of Rhode Island School of Design's Intro to Graphic Design course. I designed a record cover (front and back of the sleeve) for Steve Lacy's Demo, with an accompagnying booklet.
          </TextBlock>
        </Hbox>
        <Line/>
        <Section>RESEARCH</Section>
        <Hbox>
          <Title>Mood Board</Title>
          <TextBlock>
            I first created a mood board for your record cover to express the feeling of the album. I wanted to capture a casual and alternative feeling conveyed through the motif of his unique tattos, and well as using red colors inspired by his popular song Dark Red.
          </TextBlock>
        </Hbox>
        <ImageContainer>
          <StyledImage
            src={require('../images/design/steve_lacy_board_1.jpg')}
            // loader={/*any valid react element */}
          />
        </ImageContainer>
        <ImageContainer>
          <StyledImage
            src={require('../images/design/steve_lacy_board_4.png')}
            // loader={/*any valid react element */}
          />
        </ImageContainer>
        <ImageContainer>
          <StyledImage
            src={require('../images/design/steve_lacy_board_2.jpg')}
            // loader={/*any valid react element */}
          />
        </ImageContainer>
        <ImageContainer>
          <StyledImage
            src={require('../images/design/steve_lacy_board_3.jpg')}
            // loader={/*any valid react element */}
          />
        </ImageContainer>
        <Line/>
        <Section>DESIGN ITERATION</Section>
        <Hbox>
          <Title>Booklet</Title>
          <TextBlock>
          I made a booklet that goes with the album, with a list of the songs in the album, a short biography of the artist, an interview with the artist about the album, and the lyrics to one of the songs styled to emphasize their meaning.
          </TextBlock>
        </Hbox>
        <ImageContainer>
          <StyledImage
            src={require('../images/design/booklet_mockup.png')}
            // loader={/*any valid react element */}
          />
        </ImageContainer>
        <PDFContainer>
          <PDF
            file={require('../images/design/steve_lacy_booklet.pdf')}
            onLoadSuccess={this.onDocumentLoadSuccess}
          >
            <Page pageNumber={pageNumber} />
          </PDF>
          <ButtonContainer>
            <GooeyButton onClick={() => this.changePage(-1)}>
              <i class="fa fa-arrow-left" aria-hidden="true"></i>
            </GooeyButton>
            <GooeyButton onClick={() => this.changePage(1)}>
              <i class="fa fa-arrow-right" aria-hidden="true"></i>
            </GooeyButton>
          </ButtonContainer>
        </PDFContainer>
        <Hbox>
          <Title>Record Cover</Title>
          <TextBlock>
          This is my final record cover design, which incorporates Steve Lacy's tattoos into a mural on the front, and incorporates the song of the album into his tattooed upper body on the back.
          </TextBlock>
        </Hbox>
        <ImageContainer>
          <StyledImage
            src={require('../images/design/vinyl_cover_front.png')}
            // loader={/*any valid react element */}
          />
        </ImageContainer>
        <ImageContainer>
          <StyledImage
            src={require('../images/design/vinyl_cover_back.png')}
            // loader={/*any valid react element */}
          />
        </ImageContainer>
        <Section>TAKEAWAYS AND NEXT STEPS</Section>
        <Hbox>
          <Title>Design System</Title>
          <TextBlock>
          My identity for the record could be applied to other things like a tote bag, website, etc. These designs could be a basis for an entire system based on dark red colors, casual sketched tattoos, and hand-drawn lettering.
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
