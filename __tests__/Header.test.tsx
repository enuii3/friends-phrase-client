import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import MainPage from '../pages/index'
import Header from '../components/Header'

it('Should render hello text', () => {
  render(<Header />)
  expect(screen.getByText('FriendsPhrase')).toBeInTheDocument()
})
