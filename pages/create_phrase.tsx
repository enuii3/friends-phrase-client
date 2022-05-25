import Layout from '../components/templates/Layout'
import Cookie from 'universal-cookie'
import axios from 'axios'
import { useRouter } from 'next/router'
import { Phrase } from '../types/types'
import { useEffect, useState } from 'react'
import TextField from '@mui/material/TextField'
import CardCase from '../components/atoms/CardCase'
import Button from '../components/atoms/Button'
import FormControl from '@mui/material/FormControl'
import FormItemLanguage from '../components/FormItemLanguage'
import { useAppDispatch } from '../app/store'
import { setErrorMessage } from '../features/user/userSlice'

const cookie = new Cookie()

const CreatePhrase: React.FC<Phrase> = () => {
  const dispatch = useAppDispatch()
  const router = useRouter()
  const [text, setText] = useState('')
  const [textLanguage, setTextLanguage] = useState('en')
  const [translatedWord, setTranslatedWord] = useState('')
  const [translatedWordLanguage, setTranslatedWordLanguage] = useState('jp')

  useEffect(() => {
    if (!cookie.get('accesstoken')) {
      dispatch(setErrorMessage({ errorMessage: '投稿にはログインが必要です' }))
      router.push('/auth')
    }
  }, [dispatch, router])

  const postPhrase = async (e: React.FormEvent<HTMLElement>) => {
    e.preventDefault()
    const packet = {
      text: text,
      text_language: textLanguage,
      translated_word: translatedWord,
      translated_word_language: translatedWordLanguage,
    }
    try {
      const res = await axios.post(
        `${process.env.NEXT_PUBLIC_RESTAPI_URL}/api/phrase/`,
        packet,
        {
          headers: {
            'Content-Type': 'application/json',
            Authorization: `JWT ${cookie.get('accesstoken')}`,
          },
        }
      )
      if (res.status == 201) {
        window.location.href = '/'
      }
    } catch (error) {
      if (error.response.status == 401) {
        dispatch(
          setErrorMessage({
            errorMessage: 'セッションが切れましたのでログインし直してください',
          })
        )
        router.push('/auth')
      }
    }
  }

  return (
    <Layout title="create phrase">
      <CardCase>
        <form onSubmit={postPhrase} className="w-full space-y-6 flex flex-col">
          <FormControl className="w-full">
            <TextField
              required
              className="w-full"
              type="string"
              placeholder="This is a pen などのフレーズ"
              onChange={(e) => setText(e.target.value)}
            />
          </FormControl>
          <FormItemLanguage
            SelectLanguage={textLanguage}
            setSelectLanguage={setTextLanguage}
          />

          <TextField
            required
            className="w-full"
            type="string"
            placeholder="これはペンです などの翻訳"
            onChange={(e) => setTranslatedWord(e.target.value)}
          />
          <FormItemLanguage
            SelectLanguage={translatedWordLanguage}
            setSelectLanguage={setTranslatedWordLanguage}
          />
          <Button text="投稿" />
        </form>
      </CardCase>
    </Layout>
  )
}

export default CreatePhrase
