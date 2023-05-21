import React from 'react'
import {Link} from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'

import CartProducts from './CartItem'

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
                        <CartProducts 
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
            <div>
            <Link to = {"/payment"} >
                <button>
                    CHECKOUT
                </button>
            </Link>
            </div>
            
        </aside>

        
      
    </div>
  )
}




export default Cart
