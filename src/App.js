import React, { Component } from 'react';
import {Route, Switch} from 'react-router-dom'
import Layout from './components/Layout/Layout';
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder';
import Checkout from './containers/Checkout/Checkout'
import Orders from './containers/Orders/Orders'
import Spinner from '/Users/townfolio-data01/Documents/burger-basics--05-after-navigation/src/components/UI/Spinner/Spinner'

class App extends Component {
  render () {
    return (
      <div>
        <Layout>
          <Switch>  
            <Route path='/checkout' component={Checkout}/>
            <Route path="/orders" component={Orders} />
            <Route path='/' exact component={BurgerBuilder}/>
            
          </Switch>
        </Layout>
      </div>
    );
  }
}

export default App;
