import React, { createContext, useEffect, useState } from 'react'
import all_products from '../Components/Assets/all_product'

export const ShopContext = createContext(null);
const cartLocal = JSON.parse(localStorage.getItem("cartItems") || "[]")

const getDefaultCart = () => {

    // let cart = {}
    for (let i = 0; i < all_products.length + 1; i++) {

        cartLocal[i] = 0;
    }
    return cartLocal;

}


const ShopContextProvider = (props) => {
    
    const [cartItems, setCartItems] = useState(getDefaultCart);

    useEffect(() => {
        localStorage.setItem("cartItems",JSON.stringify(cartItems)) 
    }, [cartItems])
    
    console.log(cartItems)

    // const [showNav, setShowNav] = useState(false);
    // const toggleNav = () => {
    //     setShowNav(!showNav)
    // };

    function addToCart(itemId) {
        
        setCartItems((prevItem) => {
            return {
                ...prevItem, [itemId]: prevItem[itemId] + 1 
            }
        })
    }


    function removeFromCart(itemId) {
        setCartItems((prevItem) => {
            return { ...prevItem, [itemId]: prevItem[itemId] - 1 }
        })
    }

    function removeFromCartTotal(itemId) {
        setCartItems((prevItem) => {
            return { ...prevItem, [itemId]: 0 }
        })
    }




    // function totalCartAmount() {
    //     let totalAmount = 0;
    //     for (const item in cartItems) {
    //         if (cartItems[item] > 0) {
    //             let itemInfo = all_products.find((product) => product.id === Number(item))
    //             totalAmount =+ itemInfo.new_price * cartItems[item];
    //         }
    //         return totalAmount;
    //     }
    //     console.log(totalAmount)
    //     console.log('whats happening')
    // }

    function getTotalCartAmount() {
        let totalAmount = 0;
        for (const item in cartItems) {
            if (cartItems[item] > 0) {
                let itemInfo = all_products.find((product) => product.id === Number(item))
                totalAmount += itemInfo.new_price * cartItems[item];
            }
            // return totalAmount;
        }
        return totalAmount;
    }


    function getTotalCartItems() {
        let totalItem = 0;
        for (const item in cartItems) {
            if (cartItems[item] > 0) {
                totalItem += cartItems[item];
            }
        }
        return totalItem;
    }



    const contextValue = { getTotalCartItems, getTotalCartAmount, all_products, cartItems, addToCart, removeFromCart,removeFromCartTotal };


    return (
        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>
    )

}

export default ShopContextProvider