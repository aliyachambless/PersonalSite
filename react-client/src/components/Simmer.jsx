import React, { Component } from 'react';
import styled from 'styled-components'
import InlineSVG from 'svg-inline-react';

const Container = styled.div`
  padding-left: 20%;
  padding-right: 20%;
  padding-top: 100px;
  font-family: acumin-pro, sans-serif !important;
  transition: all 0.4s ease-in-out;
  display: flex;
  flex-direction: column;
  align-content: flex-start;
`

const Header = styled.div`
  font-size: 40px;
  font-weight: 600;
  font-family: Muli, sans-serif;
  margin-bottom: 60px;
`

const Section = styled.div`
  font-size: 14px;
  font-family: Muli, sans-serif;
  font-weight: 600;
  letter-spacing: 0.2em;
  opacity: 0.7;
  margin-bottom: 40px;
`

const Hbox = styled.div`
  display: flex;
  margin-bottom: 60px;
`

const Title = styled.div`
  flex: 2;
  font-size: 22px;
  font-family: Muli, sans-serif;
  font-weight: 600;
`
const TextBlock = styled.div`
  flex: 5;
  font-size: 16px;
  opacity: 0.7;
`

const Line = styled.div`
  background: black;
  height: 2px;
  width: 100%;
  margin-bottom: 40px;
  z-index: 9;
`

const CenterBlob = styled(InlineSVG)`
    position: absolute;
    left: -37px;
    top: -14px;
    width: 80px;
    z-index: -1;
`
const QuestionText = styled.span`
  font-size: 24px;
`

const ThiccQ = styled.div`
  margin-top: 30px;
  position: relative;
`

const PopOutQ = props => (
  <ThiccQ>
    <CenterBlob src={require("../images/blob-shape.svg")} />
    <QuestionText>{props.children}</QuestionText>
  </ThiccQ>
);

export class Simmer extends React.Component {
  render() {
    return (
      <Container>
        <Header>Iterative Design and User Testing</Header>
        <Section>OVERVIEW</Section>
        <Hbox>
          <Title>Background</Title>
          <TextBlock>
            The era of fully autonomous cars is coming soon. Industry leader, Elon Musk, estimates that fully autonomous vehicles may start appearing on the road with conventional cars as soon as 2025. As companies continue to invest resources into creating self-driving cars, they will eventually become part of people's daily life. As the industry starts to shift towards the trend of vehicle automation, new questions arise regarding the implications on other car-related segments, one of those being the rideshare companies such as Uber and Lyft.
            <PopOutQ>How will the user experience of ridesharing change with arrival of self-driving technology?</PopOutQ>
          </TextBlock>
        </Hbox>
        <Line/>
        <Section>RESEARCH</Section>
        <Section>DESIGN ITERATION</Section>
        <Section>TAKEAWAYS AND NEXT STEPS</Section>
      </Container>
    )
  }
}
