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
    animation: ${morph} 1 linear infinite, ${spin} 1s ease-in-out;
    
`
const morph = keyframes`
        0% {border-radius: 5px;}
    50% {border-radius: 50%;}
    100% {border-radius: 5px;}
`

const spin = keyframes`
        from {transform: rotate(0deg);}
    to {transform: rotate(360deg);}
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
