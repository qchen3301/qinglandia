import React, { Component } from 'react'
import styled from 'styled-components'

const PortfolioBody = styled.div`
    display: flex;
    align-items: space-between;
    flex-direction: row;
    justify-content: center;
    font-family: 'Comic Sans MS';
    /* height: 45vh; */
    width: 55vw;
    text-decoration: none;
`
const CardDiv =styled.div`
  background: red;
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  transition: 0.3s;
  /* width: 40%; */
  text-align: center;

`

export default class Portfolio extends Component {
  render() {
    return (
      <PortfolioBody>
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
      </PortfolioBody>
    )
  }
}
