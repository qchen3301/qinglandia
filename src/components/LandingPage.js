import React, { Component } from 'react'
import Portfolio from './Portfolio'
import AboutMe from './AboutMe'
import Contact from './Contact'
import { Parallax, ParallaxLayer } from 'react-spring/dist/addons'
import styled from 'styled-components'


// LandingPageForeground and LandingPageBackground work together to create a dynamically generated background
const LandingPageForeground = styled.div`
  background-color: #20232f;
  clip-path: polygon(100% 0, 100% 50%, 100% 100%, 0% 100%, 100% 77%, 0% 0%);
  height: 100vh;
`
const LandingPageBackground = styled.div`
  background: rgb(201,222,150);
`
export default class LandingPage extends Component {
  render() {
    return (
      <Parallax className="container" pages={3} scrolling={true} vertical ref={ref=> this.parallax = ref}>
      {/* Splash Page/Hero Banner */}
        <ParallaxLayer offset={0} speed={0.3}>
          <LandingPageBackground onClick={()=> this.parallax.scrollTo(1)}>
          <AboutMe/>
          <LandingPageForeground></LandingPageForeground>
          </LandingPageBackground>
        </ParallaxLayer>
        {/* Projects */}
        <ParallaxLayer offset={1} speed={0.3}>
          <button onClick={()=> this.parallax.scrollTo(0)}>Click Me To Go Up</button>
          <button onClick={()=> this.parallax.scrollTo(2)}>click Me To Go To Contacts</button>
          These are the projects<br/>
          <Portfolio/>
        </ParallaxLayer>
        {/* Contact */}
        <ParallaxLayer offset={2} speed={0.5}>
          <button onClick={()=> this.parallax.scrollTo(0)}>Back To About Me</button>
          <button onClick={()=> this.parallax.scrollTo(2)}>Back To Projects</button>
          <Contact/>
        </ParallaxLayer>
      </Parallax>
    )
  }
}
