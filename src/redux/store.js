import { configureStore } from '@reduxjs/toolkit'
import { TREE_LS_KEY } from './constants'
import { getInitState } from './initState'
import { rootReducer } from './rootReducer'

export const store = configureStore({
  reducer: rootReducer,
  preloadedState: getInitState(),

})

store.subscribe(() => window.localStorage.setItem(TREE_LS_KEY, JSON.stringify(store.getState())))
