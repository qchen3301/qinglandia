import React, { Component } from 'react'
import styled from 'styled-components'

const PortfolioDiv = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-evenly;
  background: blue;
`
const CardDiv = styled.div`
  flex: 0 1 25%;
`
export default class Portfolio extends Component {
  render() {
    return (
      <PortfolioDiv>
        <CardDiv>
          <h4>Slots Game</h4>
          <p>A slots game throwback to the late 90s era of website design</p>
        </CardDiv>
        <CardDiv>
          <h4>College!</h4>
          <p>A (sigh) to-do list app to help my little sister keep track of her application process to various colleges</p>
        </CardDiv>
        <CardDiv>
            <h4>The Taroge</h4>
            <p>The capstone project! A React-On-Rails app making external API calls on the back-end</p>
        </CardDiv>
        <CardDiv>
            <h4>Qinglandia</h4>
            <p>This website! Click on this card to go to the Github page</p>
        </CardDiv>
      </PortfolioDiv>
    )
  }
}
