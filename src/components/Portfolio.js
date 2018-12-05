import React, { Component } from 'react'
import styled from 'styled-components'

const StyledMain = styled.main`
  display: flex;
  flex-wrap: wrap;
  align-items: stretch;
  justify-content: center;
`
const StyledCard = styled.article`
  flex: 0 0 200px;
  margin: 10px;
  border: 1px solid rgb(51,255,51);
  box-shadow: 2px 2px 6px 0px rgba(51,255,51, 0.3);
`
const CardTxt = styled.div`
  padding: 0 20px 20px;
  font-family: 'Inconsolata', monospace;
  text-align: center;
  color: rgb(51,255,0);
`
export default class Portfolio extends Component {
  render() {
    return (
      <StyledMain>
        <StyledCard>
          <CardTxt>
            <a href="https://agitated-galileo-e23f2b.netlify.com">
            <h3>Slots</h3>
            <p>A slots game throwback to the late 90s era of website design</p>
            </a>
          </CardTxt>
        </StyledCard>
        <StyledCard>
          
          <CardTxt>
            <a href="https://floating-scrubland-20446.herokuapp.com/login">
            <h3>College</h3>
            <p>A (sigh) to-do list app to help my little sister keep track of her application process to various colleges</p>
            </a>
          </CardTxt>
        </StyledCard>
        <StyledCard>
          
          <CardTxt>
            <a href="https://doge-taroge.herokuapp.com/">
            <h3>The Taroge</h3>
            <p>The capstone project! A React-On-Rails app making external API calls on the back-end</p>
            </a>
          </CardTxt>
        </StyledCard>        

        <StyledCard>
          <CardTxt>
            <a href="https://elastic-davinci-ef0498.netlify.com/#">
            <h3>The Sun Always Shines In C Y B E R S P A S E</h3>
            <p>My first attempt at a Web 2.0 website (saucy language ahead)</p>
            </a>
          </CardTxt>
        </StyledCard>  

      </StyledMain>
    )
  }
}
