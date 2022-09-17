import '@testing-library/jest-dom/extend-expect'
import { render, screen } from '@testing-library/react'
import CommentCard from '../../components/molecules/CommentCard'
import { Comment } from '../../types/types'

describe('CommentCard Components test', () => {
  it('Should render CommentCard', async () => {
    const comment: Comment = {
      id: 'testcomment',
      text: 'test text',
      textLanguage: 'jp',
      user: {
        id: 'testuserid',
        username: 'testuser',
        icon: '/default.png',
      },
      createdAt: '2022-01-11 11:00',
      updatedAt: '2022-01-11 11:11',
      phrase: 'test',
    }
    render(<CommentCard comment={comment} />)

    expect(screen.getByText(comment.user.username)).toBeInTheDocument()
    expect(screen.getByText(comment.text)).toBeInTheDocument()
    expect(screen.getByText('2022/1/11 11:11')).toBeInTheDocument()
    expect(screen.getByAltText(comment.textLanguage)).toBeInTheDocument()
    expect(screen.getByAltText('icon')).toBeInTheDocument()
  })
})
