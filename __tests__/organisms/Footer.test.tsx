import '@testing-library/jest-dom/extend-expect'
import { render, screen } from '@testing-library/react'
import Footer from '../../components/organisms/Footer'

describe('Footer Component  test', () => {
  it('Should render Footer', async () => {
    render(<Footer />)

    expect(screen.getByText('© 2022 FriendsPhrase')).toBeInTheDocument()
  })
})
