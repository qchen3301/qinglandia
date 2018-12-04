import React, { Component } from 'react'
import Portfolio from './Portfolio'
import { Parallax, ParallaxLayer } from 'react-spring/dist/addons'
import {Spring, config} from 'react-spring'
import styled from 'styled-components'

const BackgroundDiv = styled.div`
  background: linear-gradient(to right, SlateBlue 0%, DeepSkyBlue 100%);
  height: 100vh;
  width: 100vw;
`
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
const CenterProjectCardsDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 40vh;
  margin-left: 50%;
  margin-right: 50%;
`

export default class LandingPage extends Component {
  render() {
    return (
      <BackgroundDiv>
        Welcome to Qinglandia
      <Parallax className="container" pages={2} scrolling={true} vertical ref={ref=> this.parallax = ref}>
      {/* Splash Page/Hero Banner */}
        <ParallaxLayer offset={0} speed={0.9}>
        <TextDiv onClick={()=> this.parallax.scrollTo(1)}>  
            <Spring config={config.default} from={{opacity:0}} to={{opacity:1}} reset={true}>
              {props=> <div style={props}>Hi. I'm Qing. I'm a jr web developer.</div> }
            </Spring>
            <br/><br/>
            <Spring config={config.default} from={{opacity:0}} to={{opacity:1}} reset={true} delay={3000}>
              {props=> <div style={props}> I've recently finished a three month long <br/>coding bootcamp at General Assembly Atlanta.</div> }
            </Spring>
            <br/><br/>
            <Spring config={config.default} from={{opacity:0}} to={{opacity:1}} reset={true} delay={6000}>
              {props=> <div style={props}>Here are some of the projects I've built.<br/></div> }
            </Spring>
            <br/><br/>
            <Spring config={config.default} from={{opacity:0}} to={{opacity:1}} reset={true} delay={9400}>
              {props=> <div style={props}>Each app was built and deployed <br/>in agile development cycles <br/>using Git as version control</div> }
            </Spring>
            <br/><br/>
            <Spring config={config.default} from={{opacity:0}} to={{opacity:1}} reset={true} delay={12000}>
              {props=> <div style={props}>Click or scroll down to see my portfolio</div> }
            </Spring>
          </TextDiv> 
        </ParallaxLayer>
        {/* Projects */}
        <ParallaxLayer offset={1} speed={0.5}>
          <button onClick={()=> this.parallax.scrollTo(0)}>Click Me To Go Up</button>
          These are the projects<br/>
          <CenterProjectCardsDiv><Portfolio/></CenterProjectCardsDiv>
        </ParallaxLayer>
      </Parallax>
      </BackgroundDiv>
    )
  }
}
