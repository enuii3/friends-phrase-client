import fetch from 'node-fetch'
import { Phrase } from '../types/types'

export const getAllPhrasesData = async (): Promise<Phrase[]> => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_RESTAPI_URL}/api/phrase/`)
  return (await res.json()) as Phrase[]
}

export const getAllPhraseIds = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_RESTAPI_URL}/api/phrase/`)
  const phrases = (await res.json()) as Phrase[]
  return phrases.map((phrase) => {
    return {
      params: {
        id: String(phrase.id),
      },
    }
  })
}

export const getPhraseData = async (id: string) => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_RESTAPI_URL}/api/phrase/${id}`
  )
  return (await res.json()) as Phrase
}
