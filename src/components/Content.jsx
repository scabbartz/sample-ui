import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookSquare, faInstagramSquare, faLinkedinIn, faTwitterSquare } from '@fortawesome/free-brands-svg-icons';
import { faHeart } from '@fortawesome/free-solid-svg-icons';


function Content() {

    const currentYear = new Date().getFullYear();

    const ceoTexth1 = {
        fontWeight: "600",
        fontSize: "27px",
        padding: "5px",
        paddingLeft: "15px"
    }


    const ceoTextp = {
        paddingLeft: "20px"
    }

    const ceoHeading = {
        paddingLeft: "215px",
        paddingBottom: "10px",
        fontSize: "35px",
        fontWeight: "600"
    }

    const footerImg = {
        height: "300px",
        width: "400px",
        borderRadius: "10%",

    }


    return (
        <div>

            {/* Engineering Impact Section */}
            <section className="engineeringImpact">
                <div className="engineeringLeft">
                    <h1>Engineering<br></br>Impact</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. </p>
                </div>
                <img src="../images/engineering.jpg" alt="engineering-impact"></img>
            </section>



            {/* Leaader's Section */}
            <section className="leadership">
                <h1 style={ceoHeading}>Leadership Team</h1>
                <div className="leadersImages">
                    <div className="imageDiv">
                        <img className="ceoImage" src="../images/ceo1.jpg" alt="leader-img"></img>
                        <h1 style={ceoTexth1}>Name<br></br><span style={{ fontWeight: "500" }}>CEO, Founder</span></h1>
                        <p style={ceoTextp}>Linkdin</p>
                    </div>
                    <div className="imageDiv">
                        <img className="ceoImage" src="../images/ceo2.jpg" alt="leader-img"></img>
                        <h1 style={ceoTexth1}>Name<br></br><span style={{ fontWeight: "500" }}>CEO, Founder</span></h1>
                        <p style={ceoTextp}>Linkdin</p>
                    </div>
                    <div className="imageDiv">
                        <img className="ceoImage" src="../images/ceo3.jpg" alt="leader-img"></img>
                        <h1 style={ceoTexth1}>Name<br></br><span style={{ fontWeight: "500" }}>CEO, Founder</span></h1>
                        <p style={ceoTextp}>Linkdin</p>
                    </div>
                </div>

            </section>


            {/* Our People Section */}
            <section className="ourPeople">
                <h1>Our People</h1>
                <div className="imgSlider">
                    <img className="peopleImg" src="../images/people1.jpg" alt="leader-img"></img>
                    <img className="peopleImg" src="../images/people2.jpg" alt="leader-img"></img>
                </div>
            </section>

            {/* Feel Free to get in touch with us section */}
            <section className="contactUs">
                <div className="footerUpper">
                    <div className="leftText">
                        <h1 style={{ fontSize: "39px", fontWeight: "600", padding: " 10px 20px" }}>Feel Free To Get In Touch With Us</h1>
                        <p style={{ fontSize: "20px", fontWeight: "400", padding: "10px 20px" }}>If you have any idea let's discuss it. Just drop us an e-mail or call and we'll find a <br></br>suitable time for a meeting.</p>
                        <input type="text" placeholder="Your E-mail or Phone" style={{
                            height: "50px", fontSize: "14pt", padding: "10px", borderRadius: "5%", backgroundColor: "rgb(241, 241, 241)",
                            border: "none", margin: "20px 20px"
                        }}
                        ></input>
                        <button type="button">Contact Me </button>
                    </div>
                    <div className="rightImage" style={{ paddingRight: "50px" }}>
                        <img id="rightImg" src="../images/contact.jpg" alt="contact Us" style={footerImg}></img>
                    </div>
                </div>
                <div className="footer">
                    <div className="special">
                        <div className="footerLeft">
                            <h1 style={{ paddingBottom: "130px", fontWeight: "600", fontSize: "25px" }}>The IT Company</h1>
                            <h1 style={{ fontWeight: "600", fontSize: "20px", Bottom: "0" }}>Follow us at</h1><br></br>
                            <div className="iconClass">
                                <FontAwesomeIcon icon={faFacebookSquare} style={{ paddingRight: "20px", color: "rgb(143, 143, 143)" }} size="lg" />
                                <FontAwesomeIcon icon={faInstagramSquare} style={{ paddingRight: "20px", color: "rgb(143, 143, 143)" }} size="lg" />
                                <FontAwesomeIcon icon={faTwitterSquare} style={{ paddingRight: "20px", color: "rgb(143, 143, 143)" }} size="lg" />
                                <FontAwesomeIcon icon={faLinkedinIn} style={{ paddingRight: "20px", color: "rgb(143, 143, 143)" }} size="lg" />
                            </div>
                        </div>
                        <div className="footerRight">
                            <div className="rightTop">
                                <h1 style={{ fontSize: "20px" }}>Get In Touch</h1>
                                <p style={{ color: "red", padding: "15px 0px" }}>Email@Email.com<br></br>9560289565</p>
                            </div>
                            <div className="rightBottom">
                                <h1 style={{ fontSize: "20px", padding: "20px 0px 15px 0px", color: "#fff" }}>Explore</h1>
                                <nav className="footerNav">
                                    <div className="navLinksFooter">
                                        <ul>
                                            <li><a href=""></a>Home</li>
                                            <li><a href=""></a>Work</li>
                                            <li><a href=""></a>Services</li>
                                            <li><a href=""></a>About</li>
                                            <li><a href=""></a>Contact</li>
                                        </ul>
                                    </div>
                                </nav>
                                <p style={{ fontSize: "15px", paddingTop: "10px", color: "rgb(130, 130, 130)" }}>Loremipsum Address</p>
                            </div>
                        </div>
                    </div>
                    <hr></hr>
                    <p style={{ backgroundColor: "black", color: "rgb(130, 130, 130)", textAlign: "center", padding: "20px 0px", marginBottom: "0" }}>Made
                with <FontAwesomeIcon icon={faHeart} color="red" /> by Abhishek Mishra | Copyright &#169; {currentYear} </p>
                </div>

            </section>
        </div>
    )
}

export default Content


