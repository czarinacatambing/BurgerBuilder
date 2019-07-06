import React, { Component } from 'react'
import CheckoutSummary from '../../components/Order/CheckoutSummary/CheckoutSummary'
import { Route, Redirect } from 'react-router-dom'
import ContactData from './ContactData/ContactData'
import { connect } from 'react-redux'
import * as action from '../../store/actions/index'

class Checkout extends Component {

    // state = {
    //     ingredients: null,
    //     totalPrice: 0 
    // }
    // componentWillMount() {

    //     console.log('[Checkout.js] Component did mount')
    //     const query = new URLSearchParams(this.props.location.search);
    //     console.log("PRICE CLOSE")
    //     console.log(query.entries())
    //     const ingredients = {};

    //     let price = 0;
    //     for (let param of query.entries()) {
            
    //         if (param[0] === 'price'){
    //             price = param[1]
    //         }
    //         else{
    //             ingredients[param[0]] = +param[1]
    //         }


            

    //     }
    //     this.setState( { ingredients: ingredients, totalPrice: price } );
    // }

    // componentWillMount () {
    //     this.props.onInitPurchase();
    // }

    checkoutCancelled = () => {
        this.props.history.goBack();
    }

    checkoutContinued = () => {
        this.props.history.replace('/checkout/contact-data');
    }
    // summary, what they are, ingredients, and price
    render(){
        let summary = <Redirect to="/"/>
        

        if (this.props.ings) {
            const purchasedRedirect = this.props.purchased ? <Redirect to="/"/> : null;
            summary = ( <div> 
                    {purchasedRedirect}
                    <CheckoutSummary 
                        ingredients={this.props.ings}
                        checkoutContinued={this.checkoutContinued}
                        checkoutCancelled={this.checkoutCancelled}/>
                    <Route path={this.props.match.path + '/contact-data'}  
                        component={ContactData} / > 
                </div>
            )
        }

        return summary;
    }
}

const mapStateToProps = state => {
    return {
        ings: state.burgerBuilder.ingredients,
        purchased: state.order.purchased
    }
}

{/* const mapDispatchToProps = dispatch => {
    return {
        onInitPurchase: () => dispatch(action.purchaseInit())
    }
} */}

export default connect(mapStateToProps)(Checkout);