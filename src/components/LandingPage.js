import React, { Component } from 'react'
import Portfolio from './Portfolio'
import AboutMe from './AboutMe'
import Contact from './Contact'
import { Parallax, ParallaxLayer } from 'react-spring/dist/addons'
import { Spring } from 'react-spring'
import styled from 'styled-components'
import { keyframes } from 'styled-components';

// LandingPageForeground and LandingPageBackground work together to create a dynamically generated background
const LandingPageForeground = styled.div`
  background-color: #20232f;
  clip-path: polygon(100% 0, 100% 50%, 100% 100%, 0% 100%, 100% 77%, 0% 0%);
  height: 100vh;`
const LandingPageBackground = styled.div`
  background-color: green;`

const TypeWriter = styled.h1`
  overflow: hidden; /* Ensures the content is not revealed until the animation */
  border-right: .15em solid orange; /* The typwriter cursor */
  white-space: nowrap; /* Keeps the content on a single line */
  margin: 0 auto; /* Gives that scrolling effect as the typing happens */
  letter-spacing: .15em; /* Adjust as needed */
  animation: typing 3.5s steps(40, end), blink-caret .75s step-end infinite;
`
keyframes typing {
  
}

export default class LandingPage extends Component {
  render() {
    return (
      <Parallax className="container" pages={4} scrolling={true} vertical ref={ref=> this.parallax = ref}>
      {/* Splash Page/Hero Banner */}
        <ParallaxLayer offset={0} speed={0.5}>
          <LandingPageBackground onClick={()=> this.parallax.scrollTo(1)}>
          <LandingPageForeground>
          </LandingPageForeground>
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
