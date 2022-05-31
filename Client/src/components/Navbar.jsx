import React from "react";
import { BiPhoneCall } from 'react-icons/bi';
import { Link } from "react-router-dom";
import { AiOutlineShoppingCart, AiOutlineBars, AiOutlineClose } from 'react-icons/ai';
const Navbar = ({ openNavbar, setOpenNavbar }) => {
    const handleScroll = (direction) => {
        window.scrollTo({
            top: document.querySelector(`.${direction}`).offsetTop,
            behavior: "smooth"
        })
        setOpenNavbar(false)
    }

    return <nav className={openNavbar ? "navbar navbar-open" : "navbar"}>
        <div className="navbar-left">
            <BiPhoneCall className="phone-icon" size="55px" />
            <div className="order">
                <p>Order f Now!</p>
                <h4>0101236547</h4>
            </div>
        </div>
        <div className="navbar-center">
            <ul>
                <li><Link onClick={() => setOpenNavbar(false)} to="/">Home</Link></li>
                <li onClick={() => handleScroll("menu")}>Menu</li>
                <li><Link onClick={() => setOpenNavbar(false)} className="logo" to="/">Pizza Store</Link></li>
                <li onClick={() => handleScroll("footer")}>blog</li>
                <li>Contact</li>
                <li>
                    {openNavbar ?
                        <AiOutlineClose onClick={() => setOpenNavbar(false)} className="navbar-icon"
                            style={{ display: "none" }} size="35px" />
                        :
                        <AiOutlineBars onClick={() => setOpenNavbar(true)} className="navbar-icon"
                            style={{ display: "none" }} size="35px" />}
                </li>
            </ul>
        </div>
        <div className="navbar-right">
            <Link className="cart" to="/cart"><AiOutlineShoppingCart size="55px" /></Link>
            <span className="cart-quntity">0</span>
        </div>
    </nav>
}

export default Navbar