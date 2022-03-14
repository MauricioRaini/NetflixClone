import React, { useEffect, useState } from 'react';
import './Nav.css';

function Nav() {

    const [show, handleShow] = useState(false);

    useEffect(()=>{
        window.addEventListener("scroll", () => {
            if(window.scrollY > 100) {
                handleShow(true);
            }else handleShow(false);
        });
        return () => {
            window.removeEventListener("scroll");
        }
    }, []);

    return (
        <div className={`nav ${show && "nav__black"}`}>
        {/*  <img className='nav__logo'
            src="https://www.edigitalagency.com.au/wp-content/uploads/Netflix-N-Symbol-logo-red-transparent-RGB-png.png"
            alt="Netflix Logo" /> */}
            <img className='nav__logo'
            src='https://logodownload.org/wp-content/uploads/2014/10/netflix-logo-6.png'
            alt='Netflix Logo'/>

            <img className='nav__avatar'
            src='https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png?20201013161117'
            alt='Netflix User' />
        </div>
  )
}

export default Nav