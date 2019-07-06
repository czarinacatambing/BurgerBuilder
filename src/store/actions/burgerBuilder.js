import  * as actionTypes from './actionTypes'
import axios from '../../axios-orders'

export const addIngredient = (name) => {
    return { type: actionTypes.ADD_INGREDIENT, ingredientName: name}
}

export const removeIngredient = ( name ) => {
    return { type: actionTypes.REMOVE_INGREDIENT, ingredientName: name} 
}


// synchronous action creator
export const setIngredients = (ingredients) => {
    return {
        type: actionTypes.SET_INGREDIENTS,
        ingredients: ingredients
    }
}

export const fetchingInredientsFailed = () => {
    return {
        type: actionTypes.FETCH_INGREDIENTS_FAILED
    }
}

// asynchronous action creator
export const initIngredients = () => {
    return dispatch => {
        
        axios.get( 'https://react-my-project-23ac1.firebaseio.com/ingredients.json' )
        .then( response => {
            // this.setState( { ingredients: response.data } );
            dispatch(setIngredients(response.data))
        } )
        .catch( error => {
            // this.setState( { error: true } );
            dispatch(fetchingInredientsFailed())

        } );
    }
}