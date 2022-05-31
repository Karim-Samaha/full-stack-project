import React from "react";

const Footer = () => {
    return <footer className="footer">
        <div className="img-container">
            <img src={`../assets/bg.png`} alt="" />
        </div>
        <div className="footer-info">
            <div className="left-section">
                <h2>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sit. 
                    </h2>
            </div>
            <div className="middle-section">
                <h3>FIND OUR <br /> RESTURANTS</h3>
                <p>
                    1654 R. Don Road #304.
                    <br /> NewYork, 85022
                    <br /> (602) 867-1010
                </p>
                <p>
                    2356 K. Laquie Rd #235.
                    <br /> NewYork, 85022
                    <br /> (602) 867-1011
                </p>
                <p>
                    1614 E. Erwin St #104.
                    <br /> NewYork, 85022
                    <br /> (602) 867-1012
                </p>
                <p>
                    1614 W. Caroll St #125.
                    <br /> NewYork, 85022
                    <br /> (602) 867-1013
                </p>
            </div>
            <div className="right-section">
                <h3>Working Hours</h3>
                <p>MONDAY UNTIL FRIDAY</p>
                <p>9:00-22:00</p>
                <p>SATURDAY UNTIL SUNDAY</p>
                <p>12:00-24:00</p>
            </div>
        </div>

    </footer>
}

export default Footer;