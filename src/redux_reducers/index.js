import { combineReducers } from 'redux'
import {
  GET_COIN_LIST,
  GET_EXCHANGE_RATES,
  SET_HEADER_MENU_ITEM,
  SET_SIDER_MENU_ITEM,
  GET_TRENDING_COINS
} from '../redux_actions'

const coinsTrendingReducer = (state = [], action) => {
  const { type, payload } = action

  switch (type) {
  case GET_TRENDING_COINS:
    return payload
  default:
    return state
  }
}

const coinsReducer = (state = [], action) => {
  const { type, payload } = action

  switch (type) {
  case GET_COIN_LIST:
    return payload
  default:
    return state
  }
}

const exchangeRatesReducer = (state = [], action) => {
  const { type, payload } = action

  switch (type) {
  case GET_EXCHANGE_RATES:
    const rates = Object.values(payload.rates)
    return rates
  default:
    return state
  }
}

const headerMenuItemReducer = (state = '', action) => {
  const { type, payload } = action

  switch (type) {
  case SET_HEADER_MENU_ITEM:
    return payload.item
  default:
    return state
  }
}

const siderMenuItemReducer = (state = 'asset-platforms', action) => {
  const { type, payload } = action

  switch (type) {
  case SET_SIDER_MENU_ITEM:
    return payload.item
  default:
    return state
  }
}

export const rootReducer = combineReducers({
  exchange_rates: exchangeRatesReducer,
  coins: coinsReducer,
  trending_coins: coinsTrendingReducer,
  header_selected: headerMenuItemReducer,
  sider_selected: siderMenuItemReducer
})
