import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import { Phrase } from '../types/types'
import { v4 as uuidv4 } from 'uuid'
import PhraseCardList from '../components/organisms/PhraseCardList'

describe('PhraseCardList Test Cases', () => {
  const dummyPhrases: Phrase[] = [
    {
      id: uuidv4(),
      text: 'test text1',
      textLanguage: 'en',
      translatedWord: 'テスト テキスト1',
      translatedWordLanguage: 'jp',
      username: 'test user1',
      createdAt: '2021-01-12 15:15',
      updatedAt: '2021-01-12 15:15',
    },
    {
      id: uuidv4(),
      text: 'テスト テキスト2',
      textLanguage: 'jp',
      translatedWord: 'test text2',
      translatedWordLanguage: 'en',
      username: 'test user2',
      createdAt: '2021-02-12 15:15:40',
      updatedAt: '2021-02-12 15:15:40',
    },
  ]
  it('Should render the list of phrases pre-fetched by getStaticProps', async () => {
    render(<PhraseCardList phrases={dummyPhrases} />)

    expect(screen.getByText('test text1')).toBeInTheDocument()
    expect(screen.getByText('テスト テキスト1')).toBeInTheDocument()
    expect(screen.getByText('test text2')).toBeInTheDocument()
    expect(screen.getByText('テスト テキスト2')).toBeInTheDocument()
    expect(screen.getAllByAltText('en')).toHaveLength(2)
    expect(screen.getAllByAltText('jp')).toHaveLength(2)
    expect(screen.getByText('test user1')).toBeInTheDocument()
    expect(screen.getByText('test user2')).toBeInTheDocument()
    expect(screen.getByText('2021/2/12 15:15')).toBeInTheDocument()
    expect(screen.getByText('2021/1/12 15:15')).toBeInTheDocument()
  })
})
