import React from 'react'
import '@testing-library/jest-dom'
import {render, screen} from '@testing-library/react'
import Home from './Home'


test('renders', async () => {
  render(<Home/>)
  const dialogText = await screen.findByText('Welcome home')
  expect(dialogText).toBeVisible()
})

