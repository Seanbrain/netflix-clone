import React, {useState, useEffect} from 'react'

function Nav() {
    const [show, handleShow] = useState(false)
    // monitoring the scroll effect and pops out the nav bar when the scroll is down by 100 or full scroll
    useEffect(() =>{
        window.addEventListener("scroll", () => {
            if(window.scrollY > 100) {
                handleShow(true);
            } else handleShow(false)
        })
    }, [])
    return (
        <div className={`nav ${show && "nav__black"}`}>
            <img className="nav__logo" src ="https://upload.wikimedia.org/wikipedia/commons/0/0f/Logo_Netflix.png"
            alt ="Netflix Logo" />

            <img className="nav__avatar"  
            src="https://pbs.twimg.com/profile_images/1240119990411550720/hBEe3tdn_400x400.png" />
            _images/1240"
        </div>
    )
}

export default Nav
