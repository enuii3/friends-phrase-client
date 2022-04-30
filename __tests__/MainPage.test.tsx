import { render, screen, cleanup } from '@testing-library/react'
import '@testing-library/jest-dom'
// import { v4 as uuidv4 } from 'uuid'
import { Phrase } from '../types/types'
// import PhraseCardList from '../components/organisms/PhraseCardList'

// import { rest } from 'msw'
import { setupServer } from 'msw/node'
import { getPage } from 'next-page-tester'
import { initTestHelpers } from 'next-page-tester'
import { handlers } from '../src/mocks/handlers'

initTestHelpers()

// process.env.NEXT_PUBLIC_RESTAPI_URL = 'http://127.0.0.1:8000'

const server = setupServer(...handlers)
beforeAll(() => {
  server.listen()
})
afterEach(() => {
  server.resetHandlers()
  cleanup()
})
afterAll(() => {
  server.close()
})

describe('MainPage Test Cases', () => {
  it('Should render the list of phrases pre-fetched by getStaticProps', async () => {
    const { page } = await getPage({ route: '/' })
    render(page)

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
