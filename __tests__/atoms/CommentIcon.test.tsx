import '@testing-library/jest-dom/extend-expect'
import { render, screen } from '@testing-library/react'
import CommentIcon from '../../components/atoms/CommentIcon'

describe('CommentIcon Component Test', () => {
  it('Should render Comemnt counts', async () => {
    render(<CommentIcon commentCount={1} />)

    expect(screen.getByTitle('comment_count')).toHaveTextContent(1)
  })
})
