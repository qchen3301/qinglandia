import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import styled from 'styled-components'

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
              WELCOME TO QINGLANDIA
          </Banner>
          </a>
        </div>
          Hello from Landing Page
          <Body id="Body">
              <h1>H E N T A I</h1>
              <h3>Hi. I'm Qing. I'm a junior developer. Recently I graduated from a three month 
                  immersive web development course at General Assembly. Here's a sample of 
                  some of the apps I've built in class. Each project was built in a week long agile sprint
                  with version control.  
              </h3>

              Doge Slots<br/>
              College!<br/>
              The Doge Taroge<br/>
          </Body>
          <div id="test">
              Test test test test
          </div>
      </div>
    )
  }
}
