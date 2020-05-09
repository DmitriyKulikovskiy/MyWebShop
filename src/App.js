import React from 'react'
import './index.css'
import Header from './components/Header/header'
import {Route, Redirect} from 'react-router-dom'
import LogIn from './components/StoreSections/Login/log-in'
import Goods from './components/StoreSections/Shop/goods'
import CurrentIphone from './components/StoreSections/Shop/Iphone/current-iphone'
import Footer from './components/Footer/footer'
import Delivery from './components/StoreSections/Delivery/delivery'


const App = () => {
  return  (
    <div >
      {/* <Redirect to="/Shop" /> */}

      <Header />
      <div>
        <Route path="/LogIn" render={() => <LogIn />} />
        <Route path="/Shop" render={() => <Goods />} />
        <Route path="/Delivery" render ={() => <Delivery />} />
        <div>
          <Route path="/CurrentIphone/:id" render={({ match }) => <CurrentIphone match={match} />} />
        </div>
      </div>
      <Footer />
    </div>
  )
}


export default App;
