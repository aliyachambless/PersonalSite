import React, { Component } from 'react';
import styled from 'styled-components'
import InlineSVG from 'svg-inline-react';
import Img from 'react-image'
import { Container, Header, Line, Hbox, Section, TextBlock, PopOutQ, Title, StyledImage } from './DetailsComponents';


export class Simmer extends React.Component {
  render() {
    return (
      <Container>
        <Header>Iterative Design and User Testing</Header>
        <Section>OVERVIEW</Section>
        <Hbox>
          <Title>Background</Title>
          <TextBlock>
            This project was completed as part of Brown University's UI/UX course. We chose to design an interface for “Simmer”, a startup created by two recently graduated students, which creates a collection of reviews of dishes. It differentiates itself from Yelp or OpenTable through its specific focus on dishes rather than whole restaurant experiences. Simmer is an interesting user interaction experiment, as it requires some sort of incentive creation for people to be willing to user the app. There are also ways of thinking about functionalities that don’t currently exist (i.e. selecting combinations of menu items that you think complement each other well, favoriting dishes, or incorporating a newsfeed) that would be worth designing the UI for. We decided to design a mobile interface for Simmer for on-the-go ordering and browsing for food options. 
          </TextBlock>
        </Hbox>
        <Line/>
        <Section>RESEARCH</Section>
        <Hbox>
          <Title>User Needs</Title>
          <TextBlock>
            In order to understand the users for which we are designing, we started thinking about the needs of the specific groups of people the app is impacting.
            <PopOutQ>What is a group of people that will be directly impacted by this interface? </PopOutQ>
            The users deciding what food to order and the users leaving reviews of dishes will be the main groups of people that will be directly impacted by our interface. They are interacting with each other through the app/website and their choices are affected by the experiences and choices made by previous reviewers.
            <PopOutQ>How are these groups affected by your interface? What are some questions that your interface should address to ethically handle these effects?</PopOutQ> 
            Bad reviews can quickly sink a company, and this can disproportionately affect smaller businesses, for whom one bad review can drastically pull down their average review score.
            <br/><br/>
            Uneven numbers of reviews for specific dishes in restaurant could bias users towards more reviewed dishes. 
            <br/><br/>
            If Simmer prioritizes popular restaurants such as chains, it could overpower smaller businesses who will in turn lose more customers.
          </TextBlock>
        </Hbox>
        <Hbox>
          <Title>Main Functionality</Title>
          <TextBlock>
            Based off of our analysis of the target groups and our understanding of the purpose of Simmer, we decided on the most important elements for the functionality of the app:
            <br/><br/>
            Write a review for a specific dish
            <br/>
            Read other people’s opinions on dishes
            <br/>
            Browse through different dish options at restaurants or find a single dish option from different restaurants
            <br/><br/><br/>
            Pages needed to fufill these needs:
            <br/><br/>
            Search for dish (filters, etc)
            <br/>
            Restaurant page (list of dishes for a restaurant) 
            <br/>
            Dish details (reviews)
            <br/>
            Write a dish review

          </TextBlock>
        </Hbox>
        <Line/>
        <Section>DESIGN ITERATION</Section>
        <Hbox>
          <Title>Lo fi Sketches</Title>
          <TextBlock>
            We started ideating by creating quick sketches of potential layouts of the app. We created 4 initial sketches, all of which try and incorporate the main functionality of the app and intuitive layout. 
            <br/><br/>
            This sketch has a map feature that allows people to browse an area and find the best dish that is closest to them. Like another sketch, it leaves room for the user to add a photo to their review, but doesn’t allow you to add multiple photos. It features a menu bar at the bottom of the screen for people to easily navigate between their likes, reviews, and profile. 
          </TextBlock>
        </Hbox>
        <StyledImage
          src={require('../images/simmer/simmer_lofi.png')}
          // loader={/*any valid react element */}
        />
        <Hbox>
          <Title>Design Choices</Title>
          <TextBlock>
          In creating our hi fi prototype, we had to consider which elements to place emphasis on and how to layout the elements on each screen such that the user could use the app intuitively to read and leave reviews as easily as possible.
          <br/><br/>
          When iterating through our original lo fi sketches, we realised that the tasks most important to the functionality of this app was the ability to look up dishes without the context of a restaurant, comparing different dishes within a restaurant, and creating a quick way for people to rate dishes, with an option of going further and leaving a review. Since the functionality of the app depends on the user’s willingness to leave a rating and/or review, we incorporated the design which makes it seem the easiest to leave a review, which was the design that had a whole page dedicated to leaving a review. We decided to have a clean home page, with options for discovering new dishes below, so if a user simply wants to search a specific dish they would be able to do so easily. The dishes all have drop shadows, to imply that it is clickable, and are formatted like stacked cards that expand when clicked upon.
          </TextBlock>
        </Hbox>
        <Hbox>
          <Title>Hi fi Prototype v1</Title>
          <TextBlock>
            After looking through our lo fi sketches and ideas for layout, we created one high fidelity prototype. We now took color, contrast, font size and style, and content into consideration, and tried to create a clean looking interface that allows users to focus on the dish and it’s reviews.
          </TextBlock>
        </Hbox>
        <StyledImage
          src={require('../images/simmer/simmer_hifi_v1.png')}
          // loader={/*any valid react element */}
        />
        <Hbox>
          <Title>Feedback</Title>
          <TextBlock>
          Clickable items are too small, got rid of small dropdown items
          <br/><br/>
          Original blue color choice does not stimulate hunger, so we switched to orange
          <br/><br/>
          Original grey font choice was too light, so we made it darker
          <br/><br/>
          Added a back button to nested screens
          <br/><br/>
          Create previous reviews and likes pages in the profile view
          <br/><br/>
          Created a full profile page instead of a dropdown that was confusing and could cause users to click the screen underneath it
          <br/><br/>
          Removed hamburger icon which suggested it was made for desktop

          </TextBlock>
        </Hbox>
        <Hbox>
          <Title>Hi fi Prototype v2</Title>
          <TextBlock>
            After looking through our lo fi sketches and ideas for layout, we created one high fidelity prototype. We now took color, contrast, font size and style, and content into consideration, and tried to create a clean looking interface that allows users to focus on the dish and it’s reviews.
          </TextBlock>
        </Hbox>
        <StyledImage
          src={require('../images/simmer/simmer_hifi_v2_1.png')}
          // loader={/*any valid react element */}
        />
        <StyledImage
          src={require('../images/simmer/simmer_hifi_v2_2.png')}
          // loader={/*any valid react element */}
        />
        <Section>TAKEAWAYS AND NEXT STEPS</Section>
        <Hbox>
          <Title>Quantitative Analysis</Title>
          <TextBlock>
          Users were generally comfortable using their interface. They all had positive things to say about its appearance and layout, saying that it is simple and attractive and they could carry out tasks efficiently. This is also reflected by the metrics, where all users had a 100% completion rate on the tasks, and only one user made an error. This error was instantly noticed and corrected by the user. The time on task is also as expected. Task 1 took a longer time as users were describing their evaluation process for their dishes and as they browsed through the reviews for the dishes.
          </TextBlock>
        </Hbox>
        <Hbox>
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
        </Hbox>
      </Container>
    )
  }
}
