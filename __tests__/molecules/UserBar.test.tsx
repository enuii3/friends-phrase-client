import '@testing-library/jest-dom/extend-expect'
import { render, screen } from '@testing-library/react'
import UserBar from '../../components/molecules/UserBar'
import { User } from '../../types/types'

describe('Button Component Test', () => {
  const dummyProps: User = {
    username: 'test username',
    icon: '/versel.svg',
    updatedAt: '2022-01-11 11:11',
  }
  it('Should render test user', async () => {
    render(<UserBar {...dummyProps} />)

    expect(screen.getByText(dummyProps.username)).toBeInTheDocument()
    expect(screen.getByAltText('icon')).toBeInTheDocument()
    expect(screen.getByText('2022/1/11 11:11')).toBeInTheDocument()
  })
})
