import React from 'react'
import styled from 'styled-components'
import {Link, Route, Routes} from 'react-router-dom'
import Team from './Team'


/**
 * Teams page.
 * @return {object} React component.
 */
export default function Teams() {
  return (
    <Routes>
      <Route path="/" element={<TeamsListing/>}/>
      <Route path=':team_name' element={<Team/>}/>
    </Routes>
  )
}


/**
 * @return {object} React component.
 */
function TeamsListing() {
  return (
    <>
      <h2>Teams</h2>
      <TeamsNav>
        <nav>
          {TEAMS.map((t, i) => {
            return (
              <Link key={i} to={`${location.pathname}/${t.title}`}>
                {t.title}
              </Link>
            )
          })}
        </nav>
      </TeamsNav>
    </>)
}


const TEAMS = [
  {id: 0, title: 'Phoenix Suns', sport: 'Basketball', emoji: '🏀'},
  {id: 1, title: 'Juventus', sport: 'Soccer', emoji: '⚽️'},
  {id: 2, title: 'Kolkata Knight Riders', sport: 'Cricket', emoji: '🏏'},
]


const TeamsNav = styled.div`
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
