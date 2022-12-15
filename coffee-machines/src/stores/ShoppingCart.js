import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useShoppingCart = defineStore( 'shoppingCart', () => {
    const cart = ref( new Map() )
    const products = ref ([])

    function addOneProduct(product) {
        if (cart.value.has(product.id)) {
            let i = Number.parseInt(cart.value.get(product.id))
            cart.value.set(product.id, i + 1)
        }
        else {
            cart.value.set(product.id, 1)
            products.value.push(product)
        }
    }

    function addProducts(product, number) {
        if (cart.value.has(product.id)) {
            let i = Number.parseInt(cart.value.get(product.id))
            cart.value.set( product.id, (i + Number.parseInt(number)) )
        }
        else {
            cart.value.set(product.id, number)
            products.value.push(product)
        }
    }

    function deleteProduct(product) {
        cart.value.delete(product.id)
    }
    function removeProduct(product) {
        if (cart.value.has(product.id)) {
            let i = Number.parseInt(cart.value.get(product.id))
            if (i > 1) {
                cart.value.set(product.id, i - 1)
            }
            else {
                deleteProduct(product)
            }
        }
    }

    const cartSize = cart.value.size
    const getProducts = products.value

    const cartCount = computed( () => {
        let i = 0;
        cart.value.forEach (function(value, key) {
            i = i + Number.parseInt(value);
        })
        return i
    })

    const totalPrice = computed( () => {
        let i = 0;
        cart.value.forEach (function(value, key) {
            let prod = products.value.filter(p => p.id === key)
            i = i + prod[0].price * Number.parseInt(value);
        })
        return i
    })

    return { cart, products, addOneProduct, addProducts, removeProduct, getProducts, cartCount, totalPrice }
})