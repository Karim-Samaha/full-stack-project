
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
const SingleProduct = ({ getLocalStorage }) => {
    const { id } = useParams();
    const [value, setValue] = useState(1)
    const [product, setProduct] = useState()
    const [cartData, setCartData] = useState(getLocalStorage())
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const fetchData = async (url) => {
            const response = await fetch(url);
            const data = await response.json();
            setProduct(data)
            setLoading(false)
        }
        fetchData(`https://resturantk.herokuapp.com/api/${id}`)

    }, [])

    const handleChange = (e) => {
        setValue(e.target.value)
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        setCartData([...cartData, {
            id: new Date().getTime().toString(),
            name: product[0].name,
            pic: product[0].img,
            qunt: value,
            price: product[0].price * value
        }])
        // document.querySelector(".cart-quntity").innerHTML = product.length + 1
    }
    useEffect(() => {
        localStorage.setItem("order", JSON.stringify(cartData))
        document.querySelector(".cart-quntity").innerHTML = cartData.length
    }, [cartData])

    if (loading) {
        return <h2>Loading ....</h2>
    }
    return <section className="single-product">

        <div className="sectionOne">
            <img src={`../${product[0].img}`} alt="" />

        </div>
        <div className="sectionTow">
            <h1>{product[0].name}</h1>
            <p>{product[0].info}</p>
            <h2 style={{ color: "#c77819" }}>${product[0].price}</h2>
            <form onSubmit={handleSubmit} className="add-tocart">
                <input value={value} onChange={handleChange} placeholder="quantity" type="number" />
                <button type="submit">Add to Cart</button>
            </form>
        </div>
    </section>


}

export default SingleProduct;