import { TREE_LS_KEY } from './constants'

export const initState = {
  user: {
    email: '',
  },
  tree: [],
}

export const getInitState = () => {
  const dataFromLS = window.localStorage.getItem(TREE_LS_KEY)

  return dataFromLS ? JSON.parse(dataFromLS) : initState
}
