import '@testing-library/jest-dom/extend-expect'
import { render, screen } from '@testing-library/react'
import PhraseCardIconBar from '../../components/molecules/PhraseCardIconBar'

describe('PhraseCardIconBar Components test', () => {
  it('Should render 1 comment and 0 heart ', async () => {
    render(<PhraseCardIconBar commentCount={1} />)

    expect(screen.getByTitle('comment_count')).toHaveTextContent('1')
    expect(screen.getByTitle('heart_count')).toHaveTextContent('0')
  })
})
