import { rest } from 'msw'
import { v4 as uuidv4 } from 'uuid'

process.env.NEXT_PUBLIC_RESTAPI_URL = 'http://127.0.0.1:8000/api'

export const handlers = [
  rest.get(
    `${process.env.NEXT_PUBLIC_RESTAPI_URL}/phrase/`,
    (req, res, ctx) => {
      return res(
        ctx.status(200),
        ctx.json([
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
        ])
      )
    }
  ),
]
