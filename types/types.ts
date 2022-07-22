export type RegisterUser = {
  id: string
  username: string
  email: string
  createdAt: string
  updatedAt: string
}

export type ParamsRegisterUser = {
  username: string
  email: string
  password: string
}

export type LoginUser = {
  username: string
}

export type ParamsLoginUser = {
  email: string
  password: string
}

export type PostUser = {
  id: string
  username: string
  icon: string
}

export type ErrorMessage = {
  errorMessage?: string
}

export type Jwt = {
  refresh: string
  access: string
}

export type AccessToken = Pick<Jwt, 'access'>

export type Phrases = {
  phrases: Phrase[]
}

export type Phrase = {
  id: string
  text: string
  textLanguage: LanguageCode
  translatedWord: string
  translatedWordLanguage: LanguageCode
  user: PostUser
  comments: string[]
  createdAt: string
  updatedAt: string
}

export type Comment = {
  id: string
  text: string
  textLanguage: LanguageCode
  createdAt: string
  updatedAt: string
  user: PostUser
  phrase: string
}

export type ParamsPhrase = Pick<
  Phrase,
  'text' | 'textLanguage' | 'translatedWord' | 'translatedWordLanguage'
>

export type LanguageCode = 'en' | 'jp'
