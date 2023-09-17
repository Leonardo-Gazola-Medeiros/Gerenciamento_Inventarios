import React from 'react'

import { Info, Inventory, Navbar } from './components';
import { Header, Inv_list, Item_info, Sidebar } from './containers';

import './static/css/App.css'

const App = () => {
  return (
    <div className='App'>
      <div className='gradient_bg'>
        <Navbar />
        <Header />
        <Sidebar />
      </div>
      <Inventory />
      <Inv_list />
      
    </div>
  )
}

export default App