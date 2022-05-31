
import React, { useState } from "react";
import { AiFillDelete } from 'react-icons/ai';
const Cart = ({ getLocalStorage }) => {

    const [data, setData] = useState(getLocalStorage())
    const totalPrice = () => {
        let totalPrice = 0
        data.map((item) => {
            return totalPrice += item.price
        })
        return totalPrice
    }
    const remove = (id) => {
        setData(data.filter((item) => item.id !== id))
        document.querySelector(".cart-quntity").innerHTML = data.length - 1
    }
    localStorage.setItem("order", JSON.stringify(data))
    if (data.length < 1) {
        return <>
        <section className="emptyCart-mssg">
            <h2>Your Cart Is Empty</h2>
        </section>
        </>
    }
    return <section className="checkoutCart">
        <div className="cart-catg">
            <h2></h2>
            <h2>Name</h2>
            <h2>quantity</h2>
            <h2>Price</h2>
            <AiFillDelete style={{ opacity: 0 }} />
        </div>
        {data.map((item, index) => {
            const { id, name, pic, price, qunt } = item;
            return <div key={index} className="cart-item">
                <div className="img-container"><img src={`../${pic}`} alt="" /></div>
                <h2>{name}</h2>
                <h4>{qunt}</h4>
                <h4>${price}</h4>
                <AiFillDelete style={{ cursor: "pointer" }} size="20px" onClick={() => remove(id)} />
            </div>

        })}
        <div className="total">
            <button>Check Out</button>
            <h3>Total:  ${totalPrice()} </h3>
        </div>
    </section>
}

export default Cart