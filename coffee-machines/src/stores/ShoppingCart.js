import { defineStore } from 'pinia'

export const useShoppingCart = defineStore( 'shoppingCart', {
    state: () => ({
        products: [
            {id: '1', name: "Kaffemaskin 1", pris: "999"}
        ]
    })
})