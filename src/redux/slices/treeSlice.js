/* eslint-disable consistent-return */
/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit'
import { initState } from '../initState'

const treeSlice = createSlice({
  name: 'tree',
  initialState: initState.tree,
  reducers: {
    clearTree() {
      return initState.tree
    },
  },
})
export const { setNewtree, logOut } = treeSlice.actions
export const gettreeSelector = (state) => state.tree
export const treeReducer = treeSlice.reducer
