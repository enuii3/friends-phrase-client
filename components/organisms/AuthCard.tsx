import { useState } from 'react'
import { useAppDispatch } from '../../app/store'
import Button from '../atoms/Button'
import {
  fetchAsyncLoginUser,
  fetchAsyncRegisterUser,
} from '../../features/user/userSlice'

const AuthCard: React.FC = () => {
  const dispatch = useAppDispatch()
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [isLogin, setIsLogin] = useState(true)

  const login = async (e: React.FormEvent<HTMLElement>) => {
    e.preventDefault()
    dispatch(fetchAsyncLoginUser({ email: email, password: password }))
  }

  const register = async (e: React.FormEvent<HTMLElement>) => {
    e.preventDefault()
    const res = await dispatch(
      fetchAsyncRegisterUser({
        username: username,
        email: email,
        password: password,
      })
    )
    if (fetchAsyncRegisterUser.fulfilled.match(res)) {
      await dispatch(fetchAsyncLoginUser({ email: email, password: password }))
    }
  }

  return (
    <div className="flex flex-col my-4">
      <h2 className="text-center text-3xl font-extrabold text-gray-900">
        {isLogin ? 'Login Page' : 'Register Page'}
      </h2>
      <form className="mt-8 space-y-6" onSubmit={isLogin ? login : register}>
        {isLogin ? (
          <div className="rounded-md shadow-sm">
            <input
              type="email"
              autoComplete="email"
              required
              className="w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:border-pink-400 sm:text-sm"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="password"
              autoComplete="current-password"
              required
              className="w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:border-pink-400 sm:text-sm"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
        ) : (
          <div className="rounded-md shadow-sm">
            <input
              type="text"
              autoComplete="text"
              required
              className="w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:border-pink-400 sm:text-sm"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <input
              type="email"
              autoComplete="email"
              required
              className="w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:border-pink-400 sm:text-sm"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="password"
              autoComplete="current-password"
              required
              className="w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:border-pink-400 sm:text-sm"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
        )}

        <Button text={isLogin ? 'Login' : 'Register'} />
      </form>
      <p className="pt-4 text-center" onClick={() => setIsLogin(!isLogin)}>
        {isLogin ? 'アカウント作成はこちら' : 'ログインはこちら'}
      </p>
    </div>
  )
}

export default AuthCard
