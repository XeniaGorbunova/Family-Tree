/* eslint-disable consistent-return */
/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit'
import { initState } from '../initState'

const userSlice = createSlice({
  name: 'user',
  initialState: initState.user,
  reducers: {
    setNewUser: {
      reducer(state, action) {
        if (state.email !== action.payload.email) return action.payload
      },
      prepare(email) {
        return {
          payload: {
            email,
          },

        }
      },
    },
    logIn(state, action) {
      state.token = action.payload
    },
    logOut() {
      return initState.user
    },
  },
})
export const { setNewUser, logIn, logOut } = userSlice.actions
export const getUserSelector = (state) => state.user
export const userReducer = userSlice.reducer
