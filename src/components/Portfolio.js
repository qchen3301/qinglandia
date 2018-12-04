import React, { Component } from 'react'
import styled from 'styled-components'

const PortfolioDiv = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin: 40px;
    & :hover {
    transform: translateY(5px);
    box-shadow: 0 2px 3px rgba(0,0,0,0.15);
  }
`
const WrapperDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 1em;
  text-align: center;
  overflow: hidden;
  padding: 0 0 32px;
  margin: 48px auto 0;
  width: 300px;
  font-family: 'Times New Roman', Times, serif;
  box-shadow: 0 0 20px rgba(0,0,0,.05), 0 0px 40px rgba(0,0,0,0.08);
  border-radius: 5px;
  background: red;
`
export default class Portfolio extends Component {
  render() {
    return (
      <PortfolioDiv>
      <WrapperDiv>
          <h4>Slots Game</h4>
          <p>A slots game throwback to the late 90s era of website design</p>
      </WrapperDiv>
       <WrapperDiv>
          <h4>College!</h4>
          <p>A (sigh) to-do list app to help my little sister keep track of her application process to various colleges</p>
          </WrapperDiv>
         <WrapperDiv>
            <h4>The Taroge</h4>
            <p>The capstone project! A React-On-Rails app making external API calls on the back-end</p>
            </WrapperDiv>
         <WrapperDiv>
            <h4>Qinglandia</h4>
            <p>This website! Click on this card to go to the Github page</p>
          </WrapperDiv>
      </PortfolioDiv>
    )
  }
}
