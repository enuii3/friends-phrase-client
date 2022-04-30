export type Phrases = {
  phrases: Phrase[]
}

export type Phrase = {
  id: string
  text: string
  textLanguage: LanguageCode
  translatedWord: string
  translatedWordLanguage: LanguageCode
  username: string
  createdAt: string
  updatedAt: string
}

export type LanguageCode = 'en' | 'jp'
