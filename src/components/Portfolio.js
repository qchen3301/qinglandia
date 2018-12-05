import React, { Component } from 'react'
import styled from 'styled-components'


//PortfolioDiv acts as the flexbox container
//it contains the styling to align the "cards" in the center
//and space them evenly
const PortfolioDiv = styled.div`
  display: flex;
  flex-wrap: flex;
  justify-content: center;
  margin-top: 5em;
  background: blue;
`
//CardDiv styles the dimensions of the individual "card"
const CardDiv = styled.div`
  width: calc(30% - 2rem);
  margin: 1rem;
  background: red;
  @media (min-width: 40em) {
    margin-bottom: 1em;
    display: flex;
    flex: 0 1 calc(50% - 0.5em);
    width: calc(33.33% - 2rem);
  }
  @media (min-width: 60rem) {
    margin-bottom: 2em;
    display: flex;
    flex: 0 1 calc(33% - 0.5em);
    width: calc(50% - 2rem);
  }
`

//CardContent styles the content of each individual "card"
const CardContent = styled.div`
  text-align: center;
  align-items: center;
  min-height: 280px;
`
export default class Portfolio extends Component {
  render() {
    return (
      <PortfolioDiv>
        <CardDiv>
          <CardContent>
          <h4>Slots Game</h4>
          <p>A slots game throwback to the late 90s era of website design</p>
          </CardContent>
        </CardDiv>
        <CardDiv>
          <CardContent>
          <h4>College!</h4>
          <p>A (sigh) to-do list app to help my little sister keep track of her application process to various colleges</p>
          </CardContent>
        </CardDiv>
        <CardDiv>
          <CardContent>
            <h4>The Taroge</h4>
            <p>The capstone project! A React-On-Rails app making external API calls on the back-end</p>
          </CardContent>
        </CardDiv>
        <CardDiv>
          <CardContent>
            <h4>Qinglandia</h4>
            <p>This website! Click on this card to go to the Github page</p>
          </CardContent>
        </CardDiv>
        
      </PortfolioDiv>
    )
  }
}
