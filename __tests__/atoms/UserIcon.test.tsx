import '@testing-library/jest-dom/extend-expect'
import { render, screen } from '@testing-library/react'
import UserIcon from '../../components/atoms/UserIcon'

describe('UserIcon Components Test', () => {
  it('Should render User icon', async () => {
    const defaultPng = '/vercel.svg'
    const iconSize = 40
    render(<UserIcon icon={defaultPng} iconSize={iconSize} />)

    expect(screen.getByAltText('icon')).toBeInTheDocument()
  })
})
