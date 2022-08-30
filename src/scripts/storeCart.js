
export const sessionStoreCart = (cart) => {
    sessionStorage.setItem('cart-content', JSON.stringify(cart))
}