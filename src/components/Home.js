import React, {Component} from 'react'
import styled from 'styled-components'


/**
 * Home page.
 */
export default class Home extends Component {
  /** @return {object} React component. */
  render() {
    return (
      <HomeWrapper>
        <h2>Welcome home</h2>
      </HomeWrapper>
    )
  }
}

const HomeWrapper = styled.div``
