import '@testing-library/jest-dom/extend-expect'
import { render, screen } from '@testing-library/react'
import CommentFormCard from '../../components/molecules/CommentFormCard'
import { Provider } from 'react-redux'
import { configureStore } from '@reduxjs/toolkit'
import userReducer from '../../features/user/userSlice'

describe('CommentFormCard Component Test', () => {
  it('Should render CommentFormCard when not login', async () => {
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
        <CommentFormCard phraseId="1" />
      </Provider>
    )

    expect(
      screen.getByText('コメントするにはログインが必要です')
    ).toBeInTheDocument()
  })
  it('Should render CommentFormCard when login', async () => {
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
      preloadedState: preloadedState,
    })
    render(
      <Provider store={store}>
        <CommentFormCard phraseId="1" />
      </Provider>
    )

    expect(screen.getByText('testuser')).toBeInTheDocument()
    expect(screen.getByPlaceholderText('コメントの記入')).toBeInTheDocument()
    expect(screen.getByText('Japanese')).toBeInTheDocument()
    expect(screen.getByAltText('jp')).toBeInTheDocument()
    expect(screen.getByText('投稿')).toBeInTheDocument()
    expect(screen.getByLabelText('フレーズの言語')).toBeInTheDocument()
  })
})
