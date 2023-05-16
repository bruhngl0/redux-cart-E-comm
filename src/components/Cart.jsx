import React from 'react'
import {AiFillDelete} from "react-icons/ai"

const Cart = () => {
  return (
    <div className = "cart">

        <main>
            <CartItem 
                imgSrc = ""
                name = "macbook"
                price = "$2000"
                qty    = {1}
                id = "ascas"
                />
        </main>

        <aside>
            <h2>Subtotal : ${200}</h2>
            <h2>Shipping : ${200}</h2>
            <h2>tax : ${200}</h2>
            <h2>total : ${200}</h2>
        </aside>
      
    </div>
  )
}


const CartItem = ({imgSrc, name, price, qty, decrement, increment, deleteHandler, id}) => {
    return(
        <div className='cartItem'>
            <img src = {imgSrc} alt = "Item" />
            <article>
                <h3>{name}</h3>
                <p>{price}</p>    
            </article>

            <div>
                <button onClick={()=> decrement(id)}>-</button>
                <p>{qty}</p>
                <button onClick={()=> increment(id)}>+</button>

            </div>

        <AiFillDelete onClick={()=> deleteHandler(id)} />
        </div>

    )
}

export default Cart
