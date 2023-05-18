import React from 'react'
import {AiFillDelete} from "react-icons/ai"
import { useSelector, useDispatch } from 'react-redux'



const Cart = () => {



    
    const dispatch = useDispatch()

    const increment = (id)=>{
        dispatch({
            type: "addToCart",
            payload: {id},
        })

        dispatch({type: "calculatePrice"})
    }
    const decrement = (id)=>{
        dispatch({
            type: "decrement",
            payload: id,
        })
        dispatch({type: "calculatePrice"})
    }
    const deleteHandler = (id)=>{
        dispatch({
            type: "deleteFromCart",
            payload: id,
        })

        dispatch({type: "calculatePrice"})
    }


    const {cartItems , subTotal, Tax, shipping, total} = useSelector((state)=> state.cart)

  return (
    <div className = "cart">

        <main>
           {
            cartItems.length >0 ? (
                cartItems.map((i)=>{
                    return (
                        <CartItem 
                        imgSrc={i.imgSrc}
                        name= {i.name}
                        price= {i.price}
                        qty={i.quantity}
                        id= {i.id}
                        key= {i.id}
                        decrement={decrement}
                        increment={increment}
                        deleteHandler={deleteHandler}
                        />
                    )
                })
            ): <h1>No Items Yet</h1>
           }
           
        </main>

        <aside>
            <h2>Subtotal : ${subTotal}</h2>
            <h2>Shipping : ${shipping}</h2>
            <h2>tax : ${Tax}</h2>
            <h2>total : ${total}</h2>
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
