import '@testing-library/jest-dom/extend-expect'
import { render, screen } from '@testing-library/react'
import Header from '../../components/organisms/Header'
import { Provider } from 'react-redux'
import { configureStore } from '@reduxjs/toolkit'
import userReducer from '../../features/user/userSlice'
import userEvent from '@testing-library/user-event'
import Cookie from 'universal-cookie'

describe('Header Components test', () => {
  it('Should render Header when not login', async () => {
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
      preloadedState,
    })
    render(
      <Provider store={store}>
        <Header />
      </Provider>
    )

    expect(screen.getByText('FriendsPhrase')).toBeInTheDocument()
    expect(screen.queryByAltText('icon')).not.toBeInTheDocument()
    expect(screen.getByTestId('create-phrase-icon')).toBeInTheDocument()
    expect(screen.getByTestId('auth-icon')).toBeInTheDocument()
  })

  it('Should render Header when login', async () => {
    const preloadedState = {
      user: {
        username: 'testuser',
        icon: '/default.png',
        errorMessage: '',
      },
    }
    const store = configureStore({
      reducer: {
        user: userReducer,
      },
      preloadedState,
    })
    render(
      <Provider store={store}>
        <Header />
      </Provider>
    )
    expect(screen.getByText('FriendsPhrase')).toBeInTheDocument()
    expect(screen.getByAltText('icon')).toBeInTheDocument()
    expect(screen.getByTestId('create-phrase-icon')).toBeInTheDocument()
    expect(screen.queryByTestId('auth-icon')).not.toBeInTheDocument()
  })
  it('Should render pull down when login', async () => {
    const preloadedState = {
      user: {
        username: 'testuser',
        icon: '/default.png',
        errorMessage: '',
      },
    }
    const store = configureStore({
      reducer: {
        user: userReducer,
      },
      preloadedState,
    })
    render(
      <Provider store={store}>
        <Header />
      </Provider>
    )
    userEvent.click(screen.getByAltText('icon'))
    expect(screen.getByText('My Page')).toBeInTheDocument()
    expect(screen.getByText('Log Out')).toBeInTheDocument()
  })
  it.only('Should logout', async () => {
    const cookie = new Cookie()
    const preloadedState = {
      user: {
        username: 'testuser',
        icon: '/default.png',
        errorMessage: '',
      },
    }
    const store = configureStore({
      reducer: {
        user: userReducer,
      },
      preloadedState,
    })
    render(
      <Provider store={store}>
        <Header />
      </Provider>
    )
    const testCookie = 'test_cookie'
    cookie.set('accesstoken', testCookie)
    expect(cookie.get('accesstoken')).toBe(testCookie)

    expect(screen.getByAltText('icon')).toBeInTheDocument()
    await userEvent.click(screen.getByAltText('icon'))
    expect(screen.getByTestId('logout-button')).toBeInTheDocument()
    await userEvent.click(screen.getByTestId('logout-button'))
    expect(cookie.get('accesstoken')).toBeUndefined()
  })
})
