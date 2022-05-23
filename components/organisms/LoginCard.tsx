import { useState } from 'react'
import { useAppDispatch } from '../../app/store'
import Button from '../atoms/Button'
import {
  fetchAsyncLoginUser,
  selectErrorMessage,
} from '../../features/user/userSlice'
import { useAppSelector } from '../../app/store'

const LoginCard: React.FC = () => {
  const dispatch = useAppDispatch()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const errorMessage = useAppSelector(selectErrorMessage)

  const login = async (e: React.FormEvent<HTMLElement>) => {
    e.preventDefault()
    dispatch(fetchAsyncLoginUser({ email: email, password: password }))
  }

  return (
    <div className="flex flex-col my-4">
      {errorMessage && <p className="mt-5 text-red-600">{errorMessage}</p>}
      <h2 className="text-center text-3xl font-extrabold text-gray-900">
        Login Page
      </h2>
      <form className="mt-8 space-y-6" onSubmit={login}>
        <div className="rounded-md shadow-sm">
          <input
            type="email"
            autoComplete="email"
            required
            className="w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:border-pink-400 sm:text-sm"
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            autoComplete="current-password"
            required
            className="w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:border-pink-400 sm:text-sm"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <Button text="Login" />
      </form>
    </div>
  )
}

export default LoginCard
