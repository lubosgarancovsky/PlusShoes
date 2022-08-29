import { combineReducers } from "redux"
import {createStore} from 'redux'



const cartReducer = (state = [], action) => {
    switch (action.type){
        case 'STORE':
            var isInCart = false

            const newState3 = state.map(item => {
                if (item.name == action.payload.name && item.size == action.payload.size){
                    newAmount = item.amount + 1
                    isInCart = true
                    return {...item, amount: newAmount}
                }
                return item;
            })

           return isInCart ?  newState3 : [...state, action.payload]

        case 'DELETE':
            return state.filter(item => !(item.id == action.payload))

        case 'INC':
            const newState = state.map(item => {
                if (item.id == action.payload){
                    const newAmount = item.amount + 1
                    return {...item, amount: newAmount}
                }
                return item;
            })
            return newState

         case 'DEC':
            var newAmount = 0
            const newState2 = state.map(item => {
                if (item.id == action.payload){
                    newAmount = item.amount - 1
                    return {...item, amount: newAmount}
                }
                return item;
            })
                return newAmount == 0 ?  state.filter(item => !(item.id == action.payload)) : newState2
        default:
            return state
    }
}

const contentReducer = (state = false, action) => {
    switch (action.type){
        case 'OPEN':
            return !state
        default:
            return state
    }
}

const allReducers = combineReducers({
    cart: cartReducer,
    content: contentReducer
})

export const store = createStore(allReducers)

