import React from "react";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

const Menu = () => {
    const [data, setData] = useState([])
    useEffect(() => {
        const fetchData = async (url) => {
            const response = await fetch(url);
            const data = await response.json()
            setData(data)
        }
        fetchData("https://resturantk.herokuapp.com/api")
    }, [])
    return <section className="menu">
        {data.map((item) => {
            const { id, name, img, info, price } = item;
            return <div key={id} className="pizza-container">
                <img className="product-img" src={`./${img}`} alt="" />
                <h3 className="name"><Link to={`/product/${id}`}>{name}</Link></h3>
                <p className="price">${price}</p>
                <p className="info">{info}</p>

            </div>
        })
        }

    </section>
}
export default Menu