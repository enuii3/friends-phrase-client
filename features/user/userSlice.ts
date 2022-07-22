import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit'
import { RootState } from '../../app/store'
import axios from 'axios'
import {
  ErrorMessage,
  AccessToken,
  Jwt,
  LoginUser,
  ParamsLoginUser,
  RegisterUser,
  ParamsRegisterUser,
} from '../../types/types'
import Cookies from 'universal-cookie'

const cookie = new Cookies()

export const fetchAsyncRegisterUser = createAsyncThunk<
  RegisterUser,
  ParamsRegisterUser,
  { rejectValue: ErrorMessage }
>('user/register_user', async (params, { rejectWithValue }) => {
  try {
    const res = await axios.post(
      `${process.env.NEXT_PUBLIC_RESTAPI_URL}/api/users/`,
      params,
      {
        headers: {
          'Content-Type': 'application/json',
        },
      }
    )
    return res.data as RegisterUser
  } catch (error) {
    if (
      error.response.data.email[0] == 'user with this email already exists.'
    ) {
      return rejectWithValue({
        errorMessage: 'メールアドレスは既に使用されています',
      } as ErrorMessage)
    }
    return rejectWithValue({
      errorMessage: 'アカウントの作成に失敗しました',
    } as ErrorMessage)
  }
})

export const fetchAsyncLoginUser = createAsyncThunk<
  Jwt,
  ParamsLoginUser,
  { rejectValue: ErrorMessage }
>('user/login_user', async (params, { rejectWithValue }) => {
  try {
    const res = await axios.post(
      `${process.env.NEXT_PUBLIC_RESTAPI_URL}/authen/jwt/create/`,
      params,
      {
        headers: {
          'Content-Type': 'application/json',
        },
      }
    )
    return res.data as Jwt
  } catch (error) {
    return rejectWithValue({
      errorMessage: 'メールアドレスもしくは、パスワードが間違っています。',
    } as ErrorMessage)
  }
})

export const fetchAsyncGetLoginUser = createAsyncThunk<
  LoginUser,
  AccessToken,
  { rejectValue: ErrorMessage }
>('user/get_login_user', async (accessToken, { rejectWithValue }) => {
  try {
    const res = await axios.get(
      `${process.env.NEXT_PUBLIC_RESTAPI_URL}/api/login_user/`,
      {
        headers: {
          Authorization: `JWT ${accessToken.access}`,
        },
      }
    )
    return res.data as LoginUser
  } catch (error) {
    return rejectWithValue({
      errorMessage: 'ログイン情報の取得に失敗しました',
    } as ErrorMessage)
  }
})

const initialState: LoginUser & ErrorMessage = {
  username: '',
  icon: '',
  errorMessage: '',
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setErrorMessage(state, action: PayloadAction<ErrorMessage>) {
      state.errorMessage = action.payload.errorMessage
    },
    resetErrorMessage(state) {
      state.errorMessage = ''
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchAsyncRegisterUser.fulfilled, () => {})
    builder.addCase(
      fetchAsyncRegisterUser.rejected,
      (state, action: PayloadAction<ErrorMessage>) => {
        return {
          ...state,
          errorMessage: action.payload.errorMessage,
        }
      }
    )
    builder.addCase(
      fetchAsyncLoginUser.fulfilled,
      (state, action: PayloadAction<Jwt>) => {
        cookie.set('accesstoken', action.payload.access)
        action.payload.access && history.back()
        return {
          ...state,
          errorMessage: '',
        }
      }
    )
    builder.addCase(
      fetchAsyncLoginUser.rejected,
      (state, action: PayloadAction<ErrorMessage>) => {
        return {
          ...state,
          errorMessage: action.payload.errorMessage,
        }
      }
    )
    builder.addCase(
      fetchAsyncGetLoginUser.fulfilled,
      (state, action: PayloadAction<LoginUser>) => {
        return {
          ...state,
          username: action.payload.username,
          icon: action.payload.icon,
        }
      }
    )
    builder.addCase(fetchAsyncGetLoginUser.rejected, () => {
      cookie.remove('accesstoken')
    })
  },
})

export const { setErrorMessage, resetErrorMessage } = userSlice.actions
export const selectLoginUser = (state: RootState) => state.user
export const selectErrorMessage = (state: RootState) => state.user.errorMessage

export default userSlice.reducer
