import React, { Component } from 'react'
import styled, { keyframes } from 'styled-components'

const PortfolioBody = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    font-family: 'Comic Sans MS';
    font-size: 5vh;
    background-color: blue;
    height: 45vh;
    text-decoration: none;
    
`

export default class Portfolio extends Component {
  render() {
    return (
      <PortfolioBody>
        Slots Game <br/>
        College! <br/>
        The Taroge <br/>
        Qinglandia
      </PortfolioBody>
    )
  }
}
