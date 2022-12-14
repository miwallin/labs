import { defineStore } from 'pinia'

export const useShoppingCart = defineStore( 'shoppingCart', {
    state: () => ({
        cart: [],
    }),
    actions: {
        addOneProduct(productId) {
            this.cart.push(productId)
        }
    },
    getters: {
        cartCount() {
            return this.cart.length
        },
        getCart() {
            return this.cart
        }
    }
})