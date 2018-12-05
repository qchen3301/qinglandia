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
  border: 1px solid #ccc;
  box-shadow: 2px 2px 6px 0px rgba(0,0,0,0.3);
`
const CardImg = styled.img`
  max-width: 100%;
`
const CardTxt = styled.div`
  padding: 0 20px 20px;
`
const CardBtn = styled.button`
  padding: 0 20px 20px;
  background: gray;
  border: 0;
  color: white;
  padding: 10px;
  width: 100%;
`
export default class Portfolio extends Component {
  render() {
    return (
      <StyledMain>
        <StyledCard>
          <CardImg src="https://www.placecage.com/200/300" alt="our lord and savior" />
          <CardTxt>
            <h3>DOGE</h3>
            <p>....</p>
            <CardBtn>Twenty Years On Your Homeworld's Track</CardBtn>
          </CardTxt>
        </StyledCard>
        <StyledCard>
          <CardImg src="https://www.placecage.com/200/300" alt="our lord and savior" />
          <CardTxt>
            <h3>DOGE</h3>
            <p>....</p>
            <CardBtn>Twenty Years On Your Homeworld's Track</CardBtn>
          </CardTxt>
        </StyledCard>
        <StyledCard>
          <CardImg src="https://www.placecage.com/200/300" alt="our lord and savior" />
          <CardTxt>
            <h3>DOGE</h3>
            <p>....</p>
            <CardBtn>Twenty Years On Your Homeworld's Track</CardBtn>
          </CardTxt>
        </StyledCard>        
      </StyledMain>
    )
  }
}
