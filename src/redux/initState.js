/* eslint-disable max-len */
import { TREE_LS_KEY } from './constants'

export const initState = {
  user: {
    userName: '',
    email: '',
    id: '',
    token: '',
  },
  tree: [
    {
      personName: 'Александр Пушкин',
      years: '1799-1837',
      location: 'Москва',
      description:
        'Русский поэт, драматург и прозаик, заложивший основы русского реалистического направления, литературный критик и теоретик литературы, историк, публицист, журналист. Один из самых авторитетных литературных деятелей первой трети XIX века.',
      photo: [
        'https://upload.wikimedia.org/wikipedia/commons/thumb/5/56/Kiprensky_Pushkin.jpg/540px-Kiprensky_Pushkin.jpg',
        'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/%D0%9F%D1%83%D1%88%D0%BA%D0%B8%D0%BD_%D0%B8_%D0%93%D0%BE%D0%B3%D0%BE%D0%BB%D1%8C._%D0%A5%D1%83%D0%B4%D0%BE%D0%B6%D0%BD%D0%B8%D0%BA_%D0%9D%D0%B8%D0%BA%D0%BE%D0%BB%D0%B0%D0%B9_%D0%9C%D0%B8%D1%85%D0%B0%D0%B9%D0%BB%D0%BE%D0%B2%D0%B8%D1%87_%D0%90%D0%BB%D0%B5%D0%BA%D1%81%D0%B5%D0%B5%D0%B2.jpg/510px-%D0%9F%D1%83%D1%88%D0%BA%D0%B8%D0%BD_%D0%B8_%D0%93%D0%BE%D0%B3%D0%BE%D0%BB%D1%8C._%D0%A5%D1%83%D0%B4%D0%BE%D0%B6%D0%BD%D0%B8%D0%BA_%D0%9D%D0%B8%D0%BA%D0%BE%D0%BB%D0%B0%D0%B9_%D0%9C%D0%B8%D1%85%D0%B0%D0%B9%D0%BB%D0%BE%D0%B2%D0%B8%D1%87_%D0%90%D0%BB%D0%B5%D0%BA%D1%81%D0%B5%D0%B5%D0%B2.jpg',
      ],
      articles: [
        'https://ru.wikipedia.org/wiki/%D0%9F%D1%83%D1%88%D0%BA%D0%B8%D0%BD,_%D0%90%D0%BB%D0%B5%D0%BA%D1%81%D0%B0%D0%BD%D0%B4%D1%80_%D0%A1%D0%B5%D1%80%D0%B3%D0%B5%D0%B5%D0%B2%D0%B8%D1%87',
      ],
      children: {},
    },

    {
      personName: 'Василий Жуковский',
      years: '1783-18352',
      location: 'Москва',
      description:
        'Русский поэт, один из основоположников романтизма в русской поэзии, автор элегий, посланий, песен, романсов, баллад и эпических произведений.',
      photo: [
        'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/Bryullov_portrait_of_Zhukovsky.jpg/548px-Bryullov_portrait_of_Zhukovsky.jpg',
        'https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/Zhukovsky_1815.jpg/440px-Zhukovsky_1815.jpg',
      ],
      articles: [
        'https://ru.wikipedia.org/wiki/%D0%96%D1%83%D0%BA%D0%BE%D0%B2%D1%81%D0%BA%D0%B8%D0%B9,_%D0%92%D0%B0%D1%81%D0%B8%D0%BB%D0%B8%D0%B9_%D0%90%D0%BD%D0%B4%D1%80%D0%B5%D0%B5%D0%B2%D0%B8%D1%87',
      ],
      children: {},
    },

    {
      personName: 'Александр Пушкин',
      years: '1799-1837',
      location: 'Москва',
      description:
        'Русский поэт, драматург и прозаик, заложивший основы русского реалистического направления, литературный критик и теоретик литературы, историк, публицист, журналист. Один из самых авторитетных литературных деятелей первой трети XIX века.',
      photo: [
        'https://upload.wikimedia.org/wikipedia/commons/thumb/5/56/Kiprensky_Pushkin.jpg/540px-Kiprensky_Pushkin.jpg',
        'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/%D0%9F%D1%83%D1%88%D0%BA%D0%B8%D0%BD_%D0%B8_%D0%93%D0%BE%D0%B3%D0%BE%D0%BB%D1%8C._%D0%A5%D1%83%D0%B4%D0%BE%D0%B6%D0%BD%D0%B8%D0%BA_%D0%9D%D0%B8%D0%BA%D0%BE%D0%BB%D0%B0%D0%B9_%D0%9C%D0%B8%D1%85%D0%B0%D0%B9%D0%BB%D0%BE%D0%B2%D0%B8%D1%87_%D0%90%D0%BB%D0%B5%D0%BA%D1%81%D0%B5%D0%B5%D0%B2.jpg/510px-%D0%9F%D1%83%D1%88%D0%BA%D0%B8%D0%BD_%D0%B8_%D0%93%D0%BE%D0%B3%D0%BE%D0%BB%D1%8C._%D0%A5%D1%83%D0%B4%D0%BE%D0%B6%D0%BD%D0%B8%D0%BA_%D0%9D%D0%B8%D0%BA%D0%BE%D0%BB%D0%B0%D0%B9_%D0%9C%D0%B8%D1%85%D0%B0%D0%B9%D0%BB%D0%BE%D0%B2%D0%B8%D1%87_%D0%90%D0%BB%D0%B5%D0%BA%D1%81%D0%B5%D0%B5%D0%B2.jpg',
      ],
      articles: [
        'https://ru.wikipedia.org/wiki/%D0%9F%D1%83%D1%88%D0%BA%D0%B8%D0%BD,_%D0%90%D0%BB%D0%B5%D0%BA%D1%81%D0%B0%D0%BD%D0%B4%D1%80_%D0%A1%D0%B5%D1%80%D0%B3%D0%B5%D0%B5%D0%B2%D0%B8%D1%87',
      ],
      children: {},
    },

    {
      personName: 'Василий Жуковский',
      years: '1783-18352',
      location: 'Москва',
      description:
        'Русский поэт, один из основоположников романтизма в русской поэзии, автор элегий, посланий, песен, романсов, баллад и эпических произведений.',
      photo: [
        'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/Bryullov_portrait_of_Zhukovsky.jpg/548px-Bryullov_portrait_of_Zhukovsky.jpg',
        'https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/Zhukovsky_1815.jpg/440px-Zhukovsky_1815.jpg',
      ],
      articles: [
        'https://ru.wikipedia.org/wiki/%D0%96%D1%83%D0%BA%D0%BE%D0%B2%D1%81%D0%BA%D0%B8%D0%B9,_%D0%92%D0%B0%D1%81%D0%B8%D0%BB%D0%B8%D0%B9_%D0%90%D0%BD%D0%B4%D1%80%D0%B5%D0%B5%D0%B2%D0%B8%D1%87',
      ],
      children: {},
    },
  ],
}

export const getInitState = () => {
  const dataFromLS = window.localStorage.getItem(TREE_LS_KEY)

  return dataFromLS ? JSON.parse(dataFromLS) : initState
}
