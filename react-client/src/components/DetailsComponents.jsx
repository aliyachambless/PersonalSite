import React, { Component } from 'react';
import styled from 'styled-components'
import InlineSVG from 'svg-inline-react';
import Img from 'react-image'

export const Container = styled.div`
  padding-left: 20%;
  padding-right: 20%;
  padding-top: 100px;
  font-family: acumin-pro, sans-serif !important;
  transition: all 0.4s ease-in-out;
  display: flex;
  flex-direction: column;
  align-content: flex-start;
`

export const Header = styled.div`
  font-size: 40px;
  font-weight: 600;
  font-family: Muli, sans-serif;
  margin-bottom: 60px;
`

export const Section = styled.div`
  font-size: 14px;
  font-family: Muli, sans-serif;
  font-weight: 600;
  letter-spacing: 0.2em;
  opacity: 0.7;
  margin-bottom: 40px;
`

export const Hbox = styled.div`
  display: flex;
  margin-bottom: 60px;
`

export const ImageContainer = styled.div`
  display: flex;
`

export const Title = styled.div`
  flex: 2;
  font-size: 22px;
  font-family: Muli, sans-serif;
  font-weight: 600;
`
export const TextBlock = styled.div`
  flex: 5;
  font-size: 16px;
  color: #595959;
`

export const Line = styled.div`
  background: black;
  height: 1px;
  width: 100%;
  margin-bottom: 40px;
  z-index: 9;
`

export const CenterBlob = styled(InlineSVG)`
    position: absolute;
    left: -40px;
    top: -18px;
    width: 80px;
    z-index: -1; 
    transform-origin: 50% 40%;
    transform: rotate(${props => props.rot}deg);
`
export const QuestionText = styled.span`
  font-size: 24px;
  font-family: Muli, sans-serif;
`

export const ThiccQ = styled.div`
  margin-top: 40px;
  margin-bottom: 20px;
  position: relative;
  color: black;
`

export const StyledImage = styled(Img)`
    max-width: 100%;
    align-self: center;
    margin-bottom: 40px;
`

export const PopOutQ = props => (
  <ThiccQ>
    <CenterBlob rot={Math.random()*360} src={require("../images/blob-shape.svg")} />
    <QuestionText>{props.children}</QuestionText>
  </ThiccQ>
);
