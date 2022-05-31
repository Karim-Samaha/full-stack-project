import React, { useEffect, useState } from "react";
import { BiLeftArrow, BiRightArrow } from 'react-icons/bi'
import Menu from "./menu";
const Home = ({ openNavbar }) => {
    const [index, setIndex] = useState(0);
    const handleArrows = (direction) => {
        if (direction === "right") {
            setIndex(index !== 2 ? index + 1 : 0)
            console.log(index)
        }
        if (direction === "left") {
            setIndex(index !== 0 ? index - 1 : 2)
            console.log(index)
        }
    }
    useEffect(() => {
        const timeout = setTimeout(() => {
            setIndex(index !== 2 ? index + 1 : 0)
        }, 6000)
        return () => clearTimeout(timeout);
    })
    const homePic = [
        "assets/home.1.png",
        "assets/home.2.jpg",
        "assets/home.3.jpg"
    ]
    return <>
        <section className="home">
            <div className="img-container">
                {homePic.map((pic, i) => {
                    return <div key={i} className="img-div">
                        <img style={{ transform: `translateX(${-100 * index}%)` }} src={`./${pic}`} alt="" />
                    </div>
                })}
            </div>
            <div style={{ display: openNavbar ? "none" : null}} className="arrows">
                <BiLeftArrow size="80px" className="left" onClick={() => handleArrows("left")} />
                <BiRightArrow size="80px" className="right" onClick={() => handleArrows("right")} />
            </div>

        </section>
        <Menu />
    </>
}

export default Home;