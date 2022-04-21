import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import Header from '../components/organisms/Header'

it('Should render hello text', () => {
  render(<Header />)
  expect(screen.getByText('FriendsPhrase')).toBeInTheDocument()
})
