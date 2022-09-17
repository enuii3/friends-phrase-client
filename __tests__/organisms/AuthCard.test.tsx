import '@testing-library/jest-dom/extend-expect'
import { render, screen } from '@testing-library/react'
import AuthCard from '../../components/organisms/AuthCard'
import { Provider } from 'react-redux'
import { configureStore } from '@reduxjs/toolkit'
import userReducer from '../../features/user/userSlice'
import userEvent from '@testing-library/user-event'
// import Cookie from 'universal-cookie'

describe('AuthCard Component  test', () => {
  // const cookie = new Cookie()
  it.only('Should render AuthCard when not have acoount', async () => {
    const preloadedState = {
      user: {
        username: '',
        icon: '',
        errorMessage: '',
      },
    }
    const store = configureStore({
      reducer: {
        user: userReducer,
      },
      preloadedState: preloadedState,
    })
    render(
      <Provider store={store}>
        <AuthCard />
      </Provider>
    )
    expect(screen.getByText('Login Page')).toBeInTheDocument()
    expect(screen.getByText('アカウント作成はこちら')).toBeInTheDocument()
    await userEvent.click(screen.getByText('アカウント作成はこちら'))
    expect(screen.getByText('Register Page')).toBeInTheDocument()
    expect(screen.getByText('ログインはこちら')).toBeInTheDocument()
    const inputUsername = screen.getByPlaceholderText(
      'Username'
    ) as HTMLInputElement
    expect(inputUsername).toBeInTheDocument()
    await userEvent.type(inputUsername, 'testuser')
    expect(inputUsername.value).toBe('testuser')
    const inputEmail = screen.getByPlaceholderText('Email') as HTMLInputElement
    expect(inputEmail).toBeInTheDocument()
    await userEvent.type(inputEmail, 'testuser@sample.com')
    expect(inputEmail.value).toBe('testuser@sample.com')
    const inputPassword = screen.getByPlaceholderText(
      'Password'
    ) as HTMLInputElement
    expect(inputPassword).toBeInTheDocument()
    await userEvent.type(inputPassword, 'hogehoge')
    expect(inputPassword.value).toBe('hogehoge')
    await userEvent.type(screen.getByPlaceholderText('Password'), 'hogehoge')
    const authButton = screen.getByRole('button', { name: 'Register' })
    await userEvent.click(authButton)
    // screen.debug()
    // const token = await cookie.get('accesstoken')
    // console.log(cookie.get(token))
  })
  // it.only('Should render AuthCard when not login', async () => {
  //   const preloadedState = {
  //     user: {
  //       username: '',
  //       icon: '',
  //       errorMessage: '',
  //     },
  //   }
  //   const store = configureStore({
  //     reducer: {
  //       user: userReducer,
  //     },
  //     preloadedState: preloadedState,
  //   })
  //   render(
  //     <Provider store={store}>
  //       <AuthCard />
  //     </Provider>
  //   )
  // })
  // it.only('Should render AuthCard when login', async () => {
  //   const preloadedState = {
  //     user: {
  //       username: 'testuser',
  //       icon: '/default.png',
  //       errorMessage: '',
  //     },
  //   }
  //   const store = configureStore({
  //     reducer: {
  //       user: userReducer,
  //     },
  //     preloadedState: preloadedState,
  //   })
  //   render(
  //     <Provider store={store}>
  //       <AuthCard />
  //     </Provider>
  //   )
  //   // screen.debug()
  // })
})
