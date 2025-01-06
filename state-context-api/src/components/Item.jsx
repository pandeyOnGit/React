import React from "react";
import { useCart } from "../context/Cart";
export const Item = (props)=>{
    const Cart = useCart();
    console.log("cart :" , Cart);
    return(
        <div className="item-card">
            <h4>{props.name}</h4>
            <p>{props.price}</p>
            <button onClick={()=>{
                Cart.setItems([...Cart.items,{name:props.name, price: props.price}])
            }}>Add To Cart</button>
        </div>
    );
};