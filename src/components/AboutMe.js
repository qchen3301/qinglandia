import React, { Component } from 'react'
import styled from 'styled-components'
import Typing from 'react-typing-animation'

const LandingPageFlavorText = styled.div`
  display:flex;
  align-items: center;
  justify-content: center;
  text-align: right;
  position: absolute;
  color: white;
  height: 110vh;
  text-transform:uppercase;
  width: 55vw;
`

export default class AboutMe extends Component {
  render() {
    return (
      <LandingPageFlavorText>
            <Typing speed={75}>
              Hi. My name is Qing. <br/> 
              I'm a jr web developer<br/> <br/>
              Recently I completed a three month<br/> 
              intensive coding bootcamp<br/>
              at General Assembly Atlanta.<br/>
              Here are some of the projects<br/> 
              I built for that course. <br/>
              Each app was built and deployed<br/> 
              in agile development cycles,<br/> 
              using Git as version control. <br/>
              Click on them below to learn more
            </Typing>
      </LandingPageFlavorText>
    )
  }
}
