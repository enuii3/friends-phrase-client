import UserBar from './UserBar'
import { useState } from 'react'
import { selectLoginUser } from '../../features/user/userSlice'
import { useAppSelector } from '../../app/store'
import TextField from '@mui/material/TextField'
import FormControl from '@mui/material/FormControl'
import Button from '../atoms/Button'
import Cookie from 'universal-cookie'
import axios from 'axios'
import WhiteCardCase from '../atoms/WhiteCardCase'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useAppDispatch } from '../../app/store'
import { setErrorMessage } from '../../features/user/userSlice'

import Image from 'next/image'
import Select from '@mui/material/Select'
import MenuItem from '@mui/material/MenuItem'
import InputLabel from '@mui/material/InputLabel'
import { languages } from '../../utils/Language'

const cookie = new Cookie()

const CommentFormCard: React.VFC<{ phraseId: string }> = ({ phraseId }) => {
  const loginUser = useAppSelector(selectLoginUser)
  const [text, setText] = useState('')
  const [textLanguage, setTextLanguage] = useState('jp')
  const dispatch = useAppDispatch()
  const router = useRouter()

  const postComment = async (e: React.FormEvent<HTMLElement>) => {
    e.preventDefault()
    const packet = {
      text: text,
      text_language: textLanguage,
      phrase: phraseId,
    }
    try {
      const res = await axios.post(
        `${process.env.NEXT_PUBLIC_RESTAPI_URL}/api/comments/`,
        packet,
        {
          headers: {
            'Content-Type': 'application/json',
            Authorization: `JWT ${cookie.get('accesstoken')}`,
          },
        }
      )
      if (res.status == 201) {
        router.reload()
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
    <WhiteCardCase>
      {loginUser.username !== '' ? (
        <div className="space-y-2">
          <UserBar username={loginUser.username} icon={loginUser.icon} />
          <form
            onSubmit={postComment}
            className="w-full space-y-4 p-4 flex flex-col bg-gray-100 rounded-md"
          >
            <FormControl className="w-full">
              <TextField
                required
                className="w-full"
                type="string"
                placeholder="コメントの記入"
                onChange={(e) => setText(e.target.value)}
              />
            </FormControl>
            <div className="flex justify-between items-center">
              <FormControl fullWidth>
                <div className="mr-4">
                  <InputLabel id="demo-simple-select-helper-label">
                    フレーズの言語
                  </InputLabel>
                  <Select
                    className="w-full"
                    labelId="demo-simple-select-helper-label"
                    id="demo-simple-select-helper"
                    value={textLanguage}
                    label="フレーズの言語"
                    onChange={(e) => setTextLanguage(e.target.value)}
                  >
                    {languages.map((language) => (
                      <MenuItem
                        className="w-full"
                        key={language.id}
                        value={language.code}
                      >
                        {language.name}
                      </MenuItem>
                    ))}
                  </Select>
                </div>
              </FormControl>
              <div className="flex items-center">
                <Image
                  src={`/${textLanguage}.svg`}
                  alt={textLanguage}
                  width={50}
                  height={30}
                />
              </div>
            </div>
            {/* <FormItemLanguage
              SelectLanguage={textLanguage}
              setSelectLanguage={setTextLanguage}
            /> */}

            <Button text="投稿" />
          </form>
        </div>
      ) : (
        <div className="text-center items-center text-pink-400 hover: text-pink-500">
          <Link href="/auth">コメントするにはログインが必要です</Link>
        </div>
      )}
    </WhiteCardCase>
  )
}

export default CommentFormCard
