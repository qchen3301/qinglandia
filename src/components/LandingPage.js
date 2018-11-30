import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import styled from 'styled-components'
import Portfolio from './Portfolio'

const Banner = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    font-family: 'Comic Sans MS';
    font-size: 5vh;
    background-color: red;
    height: 100vh;
    text-decoration: none;
` 
const Body = styled.div`

`

export default class LandingPage extends Component {

    scrollDown
  render() {
    return (
    <div>
      <div>
          <a href="#Body">
          <Banner> 
                QINGLANDIA
          </Banner>
          </a>
        </div>
          <Body id="Body">
              <h3>Hi. I'm Qing. I'm a junior developer. Recently I graduated from a three month 
                  immersive web development course at General Assembly. Here's a sample of 
                  some of the apps I've built in class. Each project was built in a week long agile sprint
                  with version control.  
              </h3>
          </Body>
          <div>
              <Portfolio/>
          </div>
      </div>
    )
  }
}
