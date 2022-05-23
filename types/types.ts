export type LoginUser = {
  username: string
}

export type ErrorMessage = {
  errorMessage?: string
}

export type Jwt = {
  refresh: string
  access: string
}

export type AccessToken = Pick<Jwt, 'access'>

export type Cred = {
  email: string
  password: string
}

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
