import React, { Fragment } from 'react'
import { BrowserRouter as Router,Switch,Route,Link } from 'react-router-dom'
import { Layout,Typography,Space } from 'antd'
import './App.css';
import Cryptocurrencies from './components/Cryptocurrencies';
import CryptoDetails from './components/CryptoDetails'
import Homepage  from './components/Homepage';
import Navbar from './components/Navbar';
import News from './components/News';
import Exchanges from './components/Exchanges'
const App = () => {
  return (
    <Fragment>
      <div className="app">
        <div className="navbar">
          <Navbar/>
        </div>
        <div className="main">
        <Layout>
          <div className="routes">
            <Switch>
              <Route exact path="/">
                <Homepage />
              </Route>
              <Route exact path="/exchanges">
                <Exchanges />
              </Route>
              <Route exact path="/cryptocurrencies">
                <Cryptocurrencies />
              </Route>
              <Route exact path="/crypto/:coinId">
                <CryptoDetails />
              </Route>
              <Route exact path="/news">
                <News />
              </Route>
             </Switch>
            </div>
           </Layout>
           <div className="footer">
        <Typography.Title level={5} style={{ color: 'white', textAlign: 'center' }}>Copyright © 2021
          <Link to="/">       
            CriptoDetails Inc.
          </Link> <br />
          All Rights Reserved.
        </Typography.Title>
        <Space>
          <Link to="/">Home</Link>
          <Link to="/exchanges">Exchanges</Link>
          <Link to="/news">News</Link>
        </Space>
      </div>
      </div>
      </div>
    </Fragment>
   
  )
}

export default App
