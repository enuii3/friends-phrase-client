import '@testing-library/jest-dom/extend-expect'
import { render, screen } from '@testing-library/react'
import { Phrase } from '../../types/types'
import PhraseCard from '../../components/organisms/PhraseCard'
import { v4 as uuidv4 } from 'uuid'

describe('Phrase Component given props', () => {
  let phraseWithOutComment: Phrase
  let phraseWithComment: Phrase

  beforeEach(() => {
    phraseWithOutComment = {
      id: uuidv4(),
      text: 'test text without comment',
      textLanguage: 'en',
      translatedWord: 'コメントなしのテスト テキスト',
      translatedWordLanguage: 'jp',
      user: {
        id: uuidv4(),
        username: 'testuser1',
        icon: 'https://friends-phrase-backet.s3.amazonaws.com/static/icons/default.png',
      },
      comments: [],
      createdAt: '2022-01-11 11:11',
      updatedAt: '2022-01-11 11:11',
    }

    phraseWithComment = {
      id: uuidv4(),
      text: 'test text with comment',
      textLanguage: 'jp',
      translatedWord: 'コメント有りのテスト テキスト',
      translatedWordLanguage: 'en',
      user: {
        id: uuidv4(),
        username: 'testuser2',
        icon: 'https://friends-phrase-backet.s3.amazonaws.com/static/icons/default.png',
      },
      comments: [uuidv4()],
      createdAt: '2022-11-11 11:11',
      updatedAt: '2022-11-11 11:11',
    }
  })

  it('Should render phrase without comment pre-fetched by getStaticProps', async () => {
    render(<PhraseCard phrase={phraseWithOutComment} />)

    expect(screen.getByText(phraseWithOutComment.text)).toBeInTheDocument()
    expect(
      screen.getByText(phraseWithOutComment.translatedWord)
    ).toBeInTheDocument()
    expect(
      screen.getByText(phraseWithOutComment.user.username)
    ).toBeInTheDocument()
    expect(screen.getByText('2022/1/11 11:11'))
    expect(screen.getAllByAltText('en')).toHaveLength(1)
    expect(screen.getAllByAltText('jp')).toHaveLength(1)
    expect(screen.getByTitle('comment_count')).toHaveTextContent('0')
    expect(screen.getByTitle('heart_count')).toHaveTextContent('0')
  })
  it('Should render phrase with comment pre-fetched by getStaticProps', async () => {
    render(<PhraseCard phrase={phraseWithComment} />)

    expect(screen.getByText(phraseWithComment.text)).toBeInTheDocument()
    expect(
      screen.getByText(phraseWithComment.translatedWord)
    ).toBeInTheDocument()
    expect(
      screen.getByText(phraseWithComment.user.username)
    ).toBeInTheDocument()
    expect(screen.getByText('2022/11/11 11:11'))
    expect(screen.getAllByAltText('en')).toHaveLength(1)
    expect(screen.getAllByAltText('jp')).toHaveLength(1)
    expect(screen.getByTitle('comment_count')).toHaveTextContent('1')
    expect(screen.getByTitle('heart_count')).toHaveTextContent('0')
  })
})
