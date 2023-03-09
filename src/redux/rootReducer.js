import { combineReducers } from '@reduxjs/toolkit'
import { treeReducer } from './slices/treeSlice'
import { userReducer } from './slices/userSlice'

export const rootReducer = combineReducers({
  user: userReducer,
  tree: treeReducer,
})
