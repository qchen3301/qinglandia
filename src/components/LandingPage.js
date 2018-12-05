import React, { Component } from 'react'
import Portfolio from './Portfolio'
import { Parallax, ParallaxLayer } from 'react-spring/dist/addons'
import {Spring, config} from 'react-spring'
import styled from 'styled-components'

//background color is consistent across both parallax screens
//this div will serve as the "wrapper" in the return function
const BackgroundDiv = styled.div`
  background: linear-gradient(to right, #39463B 55%, #282828 100%);
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
    margin-top: 5%;
    margin-left: 50%;
    text-transform: uppercase;
    font-family: 'Inconsolata', monospace;
    color: rgba(51,255,51,1);
    font-size: 2em;
`
// a flexbox container to hold buttons
const StyledButtons = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 15px;
  align-items: stretch;
`
const StyledButton = styled.button`
  border: 3px;
  border-radius: 1px;
  font-size: 1em;
	background-color:rgba(0,0,0,0);
	border:1px solid #18ab29;
  color: rgba(51,255,51,0.5);
  font-family: 'Inconsolata', monospace;
	padding:11px 11px;
  text-shadow:4px 4px 5px #2f6627;
  cursor: pointer;
`
// I don't really need to explain this do I (wow)
const DogeContainer = styled.div`
  /* display: flex; */
  justify-content: left;
`

export default class LandingPage extends Component {
  render() {
    return (
      <BackgroundDiv>
      <Parallax pages={2} scrolling={true} vertical ref={ref=> this.parallax = ref}>
        {/*Intro Flavor Text */}
        <ParallaxLayer offset={0} speed={0.9} factor={2}>
        <DogeContainer>
          <Spring config={config.default} from={{opacity:0}} to={{opacity:1}} reset={true} delay={9900}>
            {props=> <div style={props}>
              <img src="https://i.imgur.com/xCFLcsv.gif" width="100" height="100" alt="see the doge"/>
            </div>}
          </Spring>
        </DogeContainer>
        <TextDiv onClick={()=> this.parallax.scrollTo(1)}>  
            <Spring config={config.default} from={{opacity:0}} to={{opacity:1}} reset={true} delay={2000}>
              {props=> <div style={props}>Hi. I'm Qing. I'm a jr web developer.</div> }
            </Spring>
            <br/><br/>
            <Spring config={config.default} from={{opacity:0}} to={{opacity:1}} reset={true} delay={4000}>
              {props=> <div style={props}> I've recently finished a three month long <br/>coding bootcamp at General Assembly Atlanta.</div> }
            </Spring>
            <br/><br/>
            <Spring config={config.default} from={{opacity:0}} to={{opacity:1}} reset={true} delay={6000}>
              {props=> <div style={props}>Here are some of the projects I've built.<br/></div> }
            </Spring>
            <br/><br/>
            <Spring config={config.default} from={{opacity:0}} to={{opacity:1}} reset={true} delay={7500}>
              {props=> <div style={props}>Each app was built and deployed <br/>in agile development cycles <br/>using Git as version control</div> }
            </Spring>
            <br/><br/>
            <Spring config={config.default} from={{opacity:0}} to={{opacity:1}} reset={true} delay={9800}>
              {props=> <div style={props}>Click here to see my portfolio</div> }
            </Spring>
          </TextDiv> 
        </ParallaxLayer>
        {/* Projects */}
        <ParallaxLayer offset={1} speed={0.5} factor={2}>
          {/* Up Button On One Row */}
          <StyledButtons>
            <StyledButton onClick={()=> this.parallax.scrollTo(0)}>^</StyledButton>
          </StyledButtons>
          {/* Link Buttons On Row Below */}
          <br/><br/>
          <StyledButtons>
            <StyledButton onClick={()=> window.location.replace("https://github.com/qchen3301/")}>GIT-hub</StyledButton>
            <StyledButton onClick={()=> window.location.replace("https://www.linkedin.com/in/qing-chen-a7774b60/")}>link[e]d in</StyledButton>
            <StyledButton onClick={()=> window.location.href = "mailto:q.chen.3301@gmail.com"}>electronic mail</StyledButton>
          </StyledButtons>
          {/* Portfolio.js Component Below */}
          <br/><br/><br/><br/>
          <Portfolio/>
        </ParallaxLayer>
      </Parallax>
      </BackgroundDiv>
    )
  }
}