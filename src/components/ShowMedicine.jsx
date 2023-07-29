import React, { useContext } from 'react'
import CartContext from '../store/CartContext'

const ShowMedicine = () => {
    const cartcontext=useContext(CartContext);
    console.log(cartcontext.items,"sss")
    return (
    <div>
        {
            cartcontext.items.map((item)=>{
                return <div  style={{display:'flex',justifyContent:'space-between' ,padding:"1rem"}} key={item.id}>
                    <h1>{item.name}</h1>
                    <h1>{item.description}</h1>
                    <h1>{item.price}</h1>
                    <h1>{item.quantity}</h1>
                    <button onClick={()=>{cartcontext.removeItem(item)}}disabled={item.quantity === 0}> {item.quantity===0?'Out Of STock':'Add to bill'} </button>
                </div>
            })
        }
    </div>
  )
}

export default ShowMedicine