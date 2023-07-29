import React, {  useState } from 'react'
import CartContext from './CartContext'
const CartProvider = (props) => {
    const [items, setItems] = useState([])
    const addItemHandler=(item)=>{
        const existingInd=items.findIndex(cur=>cur.id===item.id);
        if(existingInd!==-1){
            const updatedItem=[...items];
            updatedItem[existingInd].quantity= Number(updatedItem[existingInd].quantity) +Number(item.quantity);
            setItems(updatedItem);
        }
        else setItems([...items,item])
    }
    const removeItemHandler=(item)=>{
        const existingInd=items.findIndex(cur=>cur.id===item.id);
        if(existingInd!==-1){
            const updatedItem=[...items];
            updatedItem[existingInd].quantity= Number(updatedItem[existingInd].quantity) -1;
            setItems(updatedItem);
        }}


    const cartContext={
        items:items,
        addItem:addItemHandler,
        removeItem:removeItemHandler,
    }
    {console.log(items)}

    return(
        <CartContext.Provider value={cartContext}>
            {props.children}
        </CartContext.Provider>
    )
}
export default CartProvider;