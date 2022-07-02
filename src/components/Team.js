import React from 'react'
import styled from 'styled-components'
import {useLocation} from 'react-router-dom'


/**
 * Team page.
 * @return {object} React component.
 */
export default function Team() {
  const location = useLocation()
  const parts = location.pathname.replaceAll('%20', ' ').split('/')
  const team = TEAMS.find((t) => t.title === parts[parts.length - 1])
  if (team === undefined) {
    return (<>Unknown team</>)
  }
  return (
    <TeamWrapper>
      <h3>{team.title}</h3>
      <p>{team.sport}</p>
      <p>{team.emoji}</p>
    </TeamWrapper>
  )
}


const TEAMS = [
  {id: 0, title: 'Phoenix Suns', sport: 'Basketball', emoji: '🏀'},
  {id: 1, title: 'Juventus', sport: 'Soccer', emoji: '⚽️'},
  {id: 2, title: 'Kolkata Knight Riders', sport: 'Cricket', emoji: '🏏'},
]


const TeamWrapper = styled.div`
  h3 {
    font-size: 200%;
    margin: 20px 0;
  }
  p {
    font-size: 100%;
    margin: 10px 0;
  }
`
