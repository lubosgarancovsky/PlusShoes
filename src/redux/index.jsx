import { combineReducers } from "redux"
import {createStore} from 'redux'
import { sessionStoreCart } from "../scripts/storeCart"

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
            sessionStoreCart(state.filter(item => !(item.id == action.payload)))
            return state.filter(item => !(item.id == action.payload))

        case 'INC':
            const newState = state.map(item => {
                if (item.id == action.payload){
                    const newAmount = item.amount + 1
                    return {...item, amount: newAmount}
                }
                return item;
            })
            sessionStoreCart(newState)
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
                sessionStoreCart(newAmount == 0 ?  state.filter(item => !(item.id == action.payload)) : newState2)
                return newAmount == 0 ?  state.filter(item => !(item.id == action.payload)) : newState2

        case 'STORECART':
            return action.payload
        case 'RESET':
            sessionStoreCart([])
            return []
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

const selectedItemReducer = (state = {}, action) => {
    if (action.type == 'SELECT') {
        return action.payload
    }
    return state
}

const menuReducer = (state = false, action) => {
    if (action.type == 'TOGGLE') {
        return !state
    }
    return state
}

const pageReducer = (state = 0, action) => {
    switch(action.type) {
        case 'SUMMARY':
            return 0
        case 'FORM':
            return 1
        case 'DETAILS':
            return 2
        case 'CONFIRM':
            return 3
        default:
            return state
    }
}

const formReducer = (state = {}, action) => {
    if(action.type === 'SEND') {
        return action.payload
    }
    return state
}

const allReducers = combineReducers({
    cart: cartReducer,
    content: contentReducer,
    item: selectedItemReducer,
    menu: menuReducer,
    page: pageReducer,
    form: formReducer
})

export const store = createStore(allReducers)

