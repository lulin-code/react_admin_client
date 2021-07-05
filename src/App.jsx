
import React, { Component } from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'

// import { Button, message } from 'antd'
import Login from './pages/Login'
import Admin from './pages/Admin'
import './App.css';
export default class App extends Component {

  render() {
    return (
      <div>
          <Switch>
            <Route path='/login' component={Login}/>
            <Route path='/home' component={Admin}/> 
            <Redirect to="/login" />
          </Switch>
      </div>
    )
  }
}
