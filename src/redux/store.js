import { configureStore } from '@reduxjs/toolkit'
import { getInitState } from './initState'
import { rootReducer } from './rootReducer'

export const store = configureStore({
  reducer: rootReducer,
  preloadedState: getInitState(),

})
