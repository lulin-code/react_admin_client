/*
 * @Author: lu
 * @Date: 2021-07-03 17:33:33
 * @LastEditTime: 2021-07-05 17:42:50
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /react_admin_client/src/index.js
 */
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom'
import 'antd/dist/antd.css'
import './index.css';
import App from './App';


ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root')
)


