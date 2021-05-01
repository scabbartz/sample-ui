import React from 'react'

function Footer() {

    const currentYear = new Date().getFullYear();

    return (
        <div className = "footerMain">
             <p>Made with <img src="./images/love-heart.png" alt="Love Logo"/> by Abhishek Mishra | Copyright &#169; {currentYear} </p>
        </div>
    )
}

export default Footer
