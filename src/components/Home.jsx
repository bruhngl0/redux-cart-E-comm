import React from 'react'
import { toast } from 'react-hot-toast';
import {useDispatch} from "react-redux"

import ProductCard from './ProductCard';




const img1 =   "https://www.reliancedigital.in/medias/Apple-MGN63HNA-Laptops-491946461-i-1-1200Wx1200H?context=bWFzdGVyfGltYWdlc3wxNzczNDJ8aW1hZ2UvanBlZ3xpbWFnZXMvaDVhL2gyZC85NDQzMDgzNTgzNTE4LmpwZ3xhYzRiNWIxZGQ2NjNiNWIyYjI0Y2ZkYTZlZWQ3MTFjZTMxYzVmNDBiNmM5Mzk5OTM2OGVkZmExMjMyYjIxNDQ4";
const img2 =     "https://www.reliancedigital.in/medias/Sony-5-1-CH-Soundbar-Home-Theatre-S20R-Black-491666475-i-1-1200Wx1200H?context=bWFzdGVyfGltYWdlc3wyMzI0NDl8aW1hZ2UvanBlZ3xpbWFnZXMvaDY4L2hjMi85MzAxMjcwOTg2NzgyLmpwZ3xkNjU3MDhjYTk5N2U2YTlhNGZjYjI0NjlmNjM0ZDYwOTdiMmVjNWJlMzc0N2Q4Yzg5OWU2MWQ5MDk3ZjFmNWM1"
const img3 = "https://www.reliancedigital.in/medias/Canon-EOS-1500D-DSLR-491362608-i-1-1200Wx1200H?context=bWFzdGVyfGltYWdlc3wzNDgzNDB8aW1hZ2UvanBlZ3xpbWFnZXMvaDZlL2g1OS84OTkzNDA0MDU5Njc4LmpwZ3wxNjNhYmJjNTU0YjU1YzNlZDkyMWQ0MmIyZWM3MGMzMDg4Yjg0M2Y3ZTEyM2M0NDk4NGFjMGU0ZDI5Yjc5NWNj";
const Home = () => {

    const productList = [
        {
            name: "Mac Book",
            price: 12000,
            imgSrc: img1,
            id: 1,

        },

        {
            name: "Party Speakers",
            price: 5000,
            imgSrc: img2,
            id: 2,
        },

        {
            name: "DSLR",
            price: 1200,
            imgSrc: img3,
            id: 3,
        },

     
    ]

    const dispatch = useDispatch()


    const addToCartHandler = (options) => {
     
        dispatch({ 
            type: "addToCart",
            payload: options})
        dispatch({type: "calculatePrice"})    

        toast.success("Added To Cart")
    };

  return (
    <div className='home'>
      {
        productList.map((i)=>{
            return(

               <ProductCard 
                key={i.id}
                imgSrc={i.imgSrc}
                name={i.name}
                price={i.price}
                id= {i.id}
                handler={addToCartHandler}/>

            )
        }
      )}
    </div>
  )
}




export default Home
