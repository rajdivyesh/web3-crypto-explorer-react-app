import coinGecko from '../API'
export const GET_COIN_LIST = 'GET_COIN_LIST'
export const GET_EXCHANGE_RATES = 'GET_EXCHANGE_RATES'
export const SET_HEADER_MENU_ITEM = 'SET_HEADER_MENU_ITEM'
export const SET_SIDER_MENU_ITEM = 'SET_SIDER_MENU_ITEM'
export const GET_TRENDING_COINS = 'GET_TRENDING_COINS'

export const fetchTrendingCoins = () => async (dispatch, getState) => {
  const response = await coinGecko.get('/search/trending')
  dispatch({
    type: GET_TRENDING_COINS,
    payload: response.data
  })
}

export const fetchCoins = () => async (dispatch, getState) => {
  const response = await coinGecko.get('/coins/list')
  dispatch({
    type: GET_COIN_LIST,
    payload: response.data
  })
}

export const fetchExchangeRates = () => async (dispatch, getState) => {
  const response = await coinGecko.get('/exchange_rates')
  dispatch({
    type: GET_EXCHANGE_RATES,
    payload: response.data
  })
}

export const setHeaderMenuItem = (item) => {
  return {
    type: SET_HEADER_MENU_ITEM,
    payload: { item }
  }
}

export const setSiderMenuItem = (item) => {
  return {
    type: SET_SIDER_MENU_ITEM,
    payload: { item }
  }
}
