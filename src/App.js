import React from 'react'
import './index.css'
import {Route} from 'react-router-dom'
import LogIn from './components/StoreSections/Login/log-in'
import Footer from './components/Footer/footer'
import Delivery from './components/StoreSections/Delivery/delivery'
import CurrentIphoneContainer  from './components/StoreSections/Shop/Iphone/current-iphone-container'
import HeaderContainer from './components/Header/header-container'
import ShoppingCartContainer from './components/ShoppingCart/shopping-cart-container'
import GoodsContainer from './components/StoreSections/Shop/goods-container'


const App = () => {

  return  (
    <div >
      {/* <Redirect to="/Shop" /> */}
  
      <HeaderContainer />
        <div>
          <Route path="/ShoppingCart" render={() => <ShoppingCartContainer />} />
        </div>
      <div>
        <Route path="/LogIn" render={() => <LogIn />} />
        <Route path="/Shop" render={() => <GoodsContainer />} />
        <Route path="/Delivery" render ={() => <Delivery />} />
        <div>
          <Route path="/p/:id" render={({ match }) => <CurrentIphoneContainer match={match} />} />
        </div>
      </div>
      <Footer />
    </div>
  )
}


export default App;
