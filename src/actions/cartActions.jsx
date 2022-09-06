export const storeCart = (item) => {
    return {
        type: 'STORE',
        payload: item
    }
}

export const storeWholeCart = (cart) => {
    return {
        type: 'STORECART',
        payload: cart
    }
}

export const resetCart = () => {
    return {
        type: 'RESET',
    }
}

export const removeFromCart = (id) => {
    return {
        type: 'DELETE',
        payload: id
    }
}


export const increment = (id) => {
    return {
        type: 'INC',
        payload: id
    }
}

export const decrement = (id) => {
    return {
        type: 'DEC',
        payload: id
    }
}


