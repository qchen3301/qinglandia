import React, { Component } from 'react'
import Portfolio from './Portfolio'
import AboutMe from './AboutMe'
import Contact from './Contact'
import './style.css'
import { Parallax, ParallaxLayer } from 'react-spring/dist/addons'
import styled from 'styled-components'

const LandingPageBackground = styled.span`
  background-color: #20232f;
  clip-path: polygon(20vw 0, 70% 0, calc(70% - 20vw) 100%, 0 100%);
`

export default class LandingPage extends Component {
  render() {
    return (
      <Parallax className="container" pages={4} scrolling={true} vertical ref={ref=> this.parallax = ref}>
      {/* Splash Page/Hero Banner */}
        <ParallaxLayer offset={0} speed={0.5}>
          <LandingPageBackground onClick={()=> this.parallax.scrollTo(1)}>
            Hi this is Qinglandia's landing page
          </LandingPageBackground>
        </ParallaxLayer>
        {/* About Me */}
        <ParallaxLayer offset={1} speed={0.5}>
          <button onClick={()=> this.parallax.scrollTo(0)}>Click Me To Go Up</button>
          <button onClick={()=> this.parallax.scrollTo(2)}>Click Me To Go Down</button>
          <AboutMe/>
        </ParallaxLayer>
        {/* Projects */}
        <ParallaxLayer offset={2} speed={0.5}>
          <button onClick={()=> this.parallax.scrollTo(1)}>Click Me To Go Up</button>
          <button onClick={()=> this.parallax.scrollTo(3)}>click Me To Go To Contacts</button>
          These are the projects<br/>
          <Portfolio/>
        </ParallaxLayer>

        {/* Contact */}
        <ParallaxLayer offset={3} speed={0.5}>
          <button onClick={()=> this.parallax.scrollTo(1)}>Back To About Me</button>
          <button onClick={()=> this.parallax.scrollTo(2)}>Back To Projects</button>
          <Contact/>
        </ParallaxLayer>
      </Parallax>
    )
  }
}
