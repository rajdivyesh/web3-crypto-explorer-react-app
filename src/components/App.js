import React, { Component } from 'react'
import ReactCoinsList from './Coins/ReactCoinsList'
import ReactHome from './General/ReactHome'
import ReactAbout from './General/ReactAbout'
import { Route } from 'react-router-dom'
import { Layout } from 'antd'
import ReactHeader from './Navigation/ReactHeader'
import ReactExchangeRates from './ExchangeRates/ReactExchangeRates'
import ReactTrendingCoins from './Coins/ReactTrendingCoins'
import ReactFooter from './Navigation/ReactFooter'
import './App.css'

export default class App extends Component {
  render () {
    return (
      <Layout style={{ minHeight: '100vh', lineHeight: '1.6rem' }}>
        <ReactHeader/>
        <Layout>
          <Route path='/' exact component={ReactHome}/>
          <Route path='/about' exact component={ReactAbout}/>
          <Route path='/trending-coins' exact component={ReactTrendingCoins}/>
          <Route path='/coins' exact component={ReactCoinsList}/>
          <Route path='/exchange-rates' exact component={ReactExchangeRates}/>
        </Layout>
        <ReactFooter/>
      </Layout>
    )
  }
}
