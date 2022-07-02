import React, {Component} from 'react'
import styled from 'styled-components'
import {Link} from 'react-router-dom'


/**
 * Page header.
 */
export default class Header extends Component {
  /** @return {object} React component. */
  render() {
    return (
      <HeaderWrapper>
        <HeaderNav>
          <nav>
            <Link to="/">Home</Link>
            <Link to="/teams">Teams</Link>
          </nav>
        </HeaderNav>
      </HeaderWrapper>
    )
  }
}

const HeaderWrapper = styled.div`
  display: flex;
`

const HeaderNav = styled.div`
  display: flex;

  nav {
    display: flex;
    a {
      display: block;
      margin-right: 20px;
      color: black;
      text-decoration: none;
    }
  }
`
