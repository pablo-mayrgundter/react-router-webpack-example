import React from 'react'
import {Outlet, Routes, Route} from 'react-router-dom'
import styled from 'styled-components'
import Header from './components/Header'
import Home from './components/Home'
import Teams from './components/Teams'


const App = () =>
  <Routes>
    <Route path="/" element={<AppContainer/>}>
      <Route index element={<Home/>}/>
      <Route path="teams/*" element={<Teams/>}/>
    </Route>
  </Routes>


const AppContainer = () =>
  <AppInner>
    <Header/>
    <Outlet/>
  </AppInner>


const AppInner = styled.div`
  display: flex;
  width: 100%;
  min-height: 100vh;
  font-size: 20px;
  padding: 20px 40px;
  background: linear-gradient(20deg, rgb(219, 112, 147), #daa357);
`

export default App
