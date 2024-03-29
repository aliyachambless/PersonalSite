import React, { Component } from 'react';
import { Player } from 'video-react';
import "video-react/dist/video-react.css";
import { Container, Header, Line, Hbox, Section, TextBlock, PopOutQ, Title, StyledImage, ImageContainer } from './DetailsComponents';


export class Fashion extends React.Component {
  render() {
    return (
      <Container>
        <Header>exchange@brown: CS1320 Final Project</Header>
        <Section>OVERVIEW</Section>
        <Hbox>
          <Title>Background</Title>
          <TextBlock>
            This project was completed as part of Brown University's UI/UX course. I chose to redesign the Stack Overflow website from the perspective of a new user. The current Stack Overflow website is cluttered and confusing, as it is not easy for new users to get help on their coding questions. New users of Stack Overflow likely have little coding experience (or they would have used the site before), and therefore are more likely to be looking for answers to their own questions, not answering someone else’s questions. I chose four screens from the Homepage to an Individual Question Page that detail a possible path to finding an answer for a new user, while hiding unnecessary information about related products like Stack Overflow Teams.
          </TextBlock>
        </Hbox>
        <Line/>
        <Section>RESEARCH</Section>
        <Hbox>
          <Title>Usability Critiques</Title>
          <TextBlock>
            In order to understand the usability of the site, I analysed the original interface using the criteria from usability.gov: intuitive design, ease of learning, efficiency of use, and memorability. 
            <PopOutQ>Intuitive Design: Does the current Stack Overflow site make it easy to understand of the architecture and navigation of the site?</PopOutQ>
            Redundancies in Nav Bar, multiple links to reach the same niche pages
            <br/><br/>
            Filter + sort redundancies make filtering confusing, and searching tags is not considered search
            <br/><br/>
            Related Tags hidden under blog 

            <PopOutQ>Ease of Learning: How fast can a user who has never seen the user interface before accomplish basic tasks?</PopOutQ> 
            No immediate link to stack overflow questions until a body paragraph at the bottom of the page (not in Nav Bar)
            <br/><br/>
            Filtering by unanswered still brings up questions with answers, unclear terminology
            <br/><br/>
            Confusing terminology like PUBLIC cluttering the side nav bar

            <PopOutQ>Efficiency of Use: How fast can an experienced user accomplish tasks?</PopOutQ>
            A lot of scrolling is needed to get to answer to a question, hard to find
            <br/><br/>
            Advanced search is not intuitive: no “accepted” filter you must type isaccepted:yes
            <br/><br/>
            Answer / approved status is not visible at the top of question page

            <PopOutQ>Memorability: After visiting the site, can a user can remember enough to use it effectively in future visits?</PopOutQ>
            My watched tags are not shown, you don’t know what you are filtering by
            <br/><br/>
            Advanced search terms are hard to remember, not all displayed
            <br/><br/>
            Site is hard to navigate: Stack Overflow is used to represent the company as a whole (including teams) and the questions page. Stack Overflow is literally on the nav bar twice
          </TextBlock>
        </Hbox>
        <Line/>
        <Section>DESIGN ITERATION</Section>
        <Hbox>
          <Title>Paper Prototypes</Title>
          <TextBlock>
          Keeping in mind the usability issues I found in the previous step, I sketched out four main pages and their connections.
          </TextBlock>
        </Hbox>
        <ImageContainer>
          <StyledImage
            src={require('../images/stack/stackOverflow-01.png')}
            // loader={/*any valid react element */}
          />
        </ImageContainer>
        <Hbox>
          <Title>Usability Explanation</Title>
          <TextBlock>
            My new design addresses some of the usability issues of the site.
            <PopOutQ>Intuitive Design: Does the current Stack Overflow site make it easy to understand of the architecture and navigation of the site?</PopOutQ>
            Simplified Nav Bar that changes for developers and teams - not all in one
            <br/><br/>
            Combined existing filters, sorting, and tags into a single system working together
            <br/><br/>
            De-emphasize blog div and replace with more important info like tags


            <PopOutQ>Ease of Learning: How fast can a user who has never seen the user interface before accomplish basic tasks?</PopOutQ> 
            Add a “ask a question” button to the nav bar
            <br/><br/>
            Add a questions button to the top of the home page
            <br/><br/>
            Sort by no answers and no accepted answer
            <br/><br/>
            Simplify the side bar and get rid of PUBLIC


            <PopOutQ>Efficiency of Use: How fast can an experienced user accomplish tasks?</PopOutQ>
            Add a ‘jump to answer’ button on the question page
            <br/><br/>
            Add filter buttons to search for accepted answers, etc
            <br/><br/>
            Add indication that there is an accepted answer to the top of question page

            <PopOutQ>Memorability: After visiting the site, can a user can remember enough to use it effectively in future visits?</PopOutQ>
            Display what watched tags you are filtering by
            <br/><br/>
            Display advanced search terms as filters
            <br/><br/>
            Change overall terminology to Stack Overflow Developer vs Stack Overflow Teams
          </TextBlock>
        </Hbox>
        <Hbox>
          <Title>Visual Redesign</Title>
          <TextBlock>
          The filter/sort of the search page was very different compared to Questions page and gave you less power, so I added the same functionality to the search page following the design choice of the Question page. There was also no quick view / expanded view of a certain question, so I added functionality to see more question information before leaving the page. The stack overflow page was also very crowded and overwhelming, making it hard to find important information. I added a lot of white space and deleted redundant and unimportant text. I added the least important info to the right column, because that is where people look at least.
          </TextBlock>
        </Hbox>
        <ImageContainer>
          <StyledImage
            src={require('../images/stack/stackOverflow.png')}
            // loader={/*any valid react element */}
          />
        </ImageContainer>
        <Hbox>
          <Title>Responsive Redesign</Title>
          <TextBlock>
            After making the visual design of the search page, I thought about how the page would react to different screen sizes.
          </TextBlock>
        </Hbox>
        <ImageContainer>
          <StyledImage
            src={require('../images/stack/stackOverflow-02.png')}
            // loader={/*any valid react element */}
          />
        </ImageContainer>
        <Player
          playsInline
          // poster="/assets/poster.png"
          src={require('../images/stack/stack_responsive.mp4')}
        />
        <Line style={{marginTop: "60px"}}/>
        <Section>TAKEAWAYS AND NEXT STEPS</Section>
        <Hbox>
          <Title>Potential Changes</Title>
          <TextBlock>
          I would like to spend more time testing out different color palettes, especially with the green. I would also like to try applying this design style to other pages in other states.
          </TextBlock>
        </Hbox>
        <Hbox>
          <Title>Reflection</Title>
          <TextBlock>
          This exercise gave me the chance to focus on how many different elements respond to different screen sizes, and has influenced my recent designs as I consider the most effient ways to display information.
          </TextBlock>
        </Hbox>
      </Container>
    )
  }
}
