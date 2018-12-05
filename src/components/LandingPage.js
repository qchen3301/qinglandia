import React, { Component } from 'react'
import Portfolio from './Portfolio'
import { Parallax, ParallaxLayer } from 'react-spring/dist/addons'
import {Spring, config} from 'react-spring'
import styled from 'styled-components'

//background color is consistent across both parallax screens
//this div will serve as the "wrapper" in the return function
const BackgroundDiv = styled.div`
  background: linear-gradient(to right, SlateBlue 0%, DeepSkyBlue 100%);
  height: 100vh;
  width: 100vw;
`
//TextDiv styled-component styling for flavor text 
const TextDiv = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    text-align: center;
    margin-right: auto;
    margin-top: 10%;
    margin-left: 50%;
    text-transform: uppercase;
`
//this styled-component is to align the contents of Portfolio.js 
const CenterProjectCardsDiv = styled.div` 
  padding-top: 15%;
`
const StyledButton = styled.button`
  display: flex;
  justify-content: center;
  margin-right: auto;
  margin-top: 5rem;
  margin-left: auto;
  border: 2px solid palegreen;
  border-radius: 3px;
`

export default class LandingPage extends Component {
  render() {
    return (
      <BackgroundDiv>
      <Parallax pages={2} scrolling={false}vertical ref={ref=> this.parallax = ref}>
        <ParallaxLayer offset={0} speed={0.9}>
        <TextDiv onClick={()=> this.parallax.scrollTo(1)}>  
            <Spring config={config.default} from={{opacity:0}} to={{opacity:1}} reset={true}>
              {props=> <div style={props}>Hi. I'm Qing. I'm a jr web developer.</div> }
            </Spring>
            <br/><br/>
            <Spring config={config.default} from={{opacity:0}} to={{opacity:1}} reset={true} delay={2000}>
              {props=> <div style={props}> I've recently finished a three month long <br/>coding bootcamp at General Assembly Atlanta.</div> }
            </Spring>
            <br/><br/>
            <Spring config={config.default} from={{opacity:0}} to={{opacity:1}} reset={true} delay={5000}>
              {props=> <div style={props}>Here are some of the projects I've built.<br/></div> }
            </Spring>
            <br/><br/>
            <Spring config={config.default} from={{opacity:0}} to={{opacity:1}} reset={true} delay={7500}>
              {props=> <div style={props}>Each app was built and deployed <br/>in agile development cycles <br/>using Git as version control</div> }
            </Spring>
            <br/><br/>
            <Spring config={config.default} from={{opacity:0}} to={{opacity:1}} reset={true} delay={9800}>
              {props=> <div style={props}>Click or scroll down to see my portfolio</div> }
            </Spring>
          </TextDiv> 
        </ParallaxLayer>
        {/* Projects */}
        <ParallaxLayer offset={1} speed={0.5}>
          <br/><br/><br/><br/>
          <StyledButton onClick={()=> this.parallax.scrollTo(0)}>Click Me To Go Up</StyledButton>
          <CenterProjectCardsDiv><Portfolio/></CenterProjectCardsDiv>
        </ParallaxLayer>
      </Parallax>
      </BackgroundDiv>
    )
  }
}
