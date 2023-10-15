import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Layout, Menu } from 'antd'

import { iconStyle } from '../../styles'
import {
  AlertOutlined,
  DollarOutlined
} from '@ant-design/icons'
import { connect } from 'react-redux'

const { Sider } = Layout
const { SubMenu } = Menu

class ReactSider extends Component {
  render () {
    return (
      <React.Fragment>
        <Sider
          breakpoint="md"
          collapsedWidth="0"
          width={240}
          style={{ background: '#fff' }}>
          <Menu
            mode="inline"
            selectedKeys={[this.props.sider_selected]}
            defaultOpenKeys={['menu-exchange-rates', 'menu-updates', 'menu-coins', 'menu-events', 'menu-global', 'menu-exchanges']}
            style={{ height: '100%', borderRight: 0 }}
          >
            {/* Status updates */}
            <SubMenu
              key="menu-updates"
              title={
                <span>
                  <AlertOutlined style={iconStyle}/>General
                </span>
              }
            >
              <Menu.Item key="trending-coins"><Link to='/trending-coins'>Trending coins</Link></Menu.Item>
            </SubMenu>
            {/* Coin Sub Menu */}
            <SubMenu
              key="menu-coins"
              title={
                <span>
                  <DollarOutlined style={iconStyle}/>Coins
                </span>
              }
            >
              <Menu.Item key="coin-list"><Link to='/coins'>Coin Listing</Link></Menu.Item>
            </SubMenu>

            {/* Exchange Rates Menu */}
            <SubMenu
              key="menu-exchange-rates"
              title={
                <span>
                  <DollarOutlined style={iconStyle}/>
                            Exchange Rates
                </span>
              }>
              <Menu.Item key="exchange-rates-list"><Link to='/exchange-rates'>Exchange Rates Listing</Link></Menu.Item>
            </SubMenu>

          </Menu>
        </Sider>
      </React.Fragment>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    sider_selected: state.sider_selected
  }
}

export default connect(mapStateToProps)(ReactSider)
