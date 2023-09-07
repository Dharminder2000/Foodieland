import React from 'react'
import { Link } from 'react-router-dom';
import logo from '../Assets/logo.png'
import fb from '../Assets/fb.png'
import instagram from '../Assets/instagram.png'
import twitter from '../Assets/twitter.png'
const openInNewTab=(url)=>{
  window.open(url, '_blank','noreferrer');
}
function Navbar() {
  return (
    <div className='navbar'> 
      <div className='leftSide'>
       <Link to={'/'}><img src={logo}/></Link> 
      </div>
      <div className='mid'>
        <ul className='navItems'>
            <Link to={"/"}>Home</Link>
            <Link to={'/Recipe'}>Recipe</Link>
            <Link to={'/Blog'}>Blog</Link>
            <Link to={'/Contact'}>Contact</Link>
            <Link to={'/AboutUs'}>About Us</Link>
        </ul>
      </div>

      <div className='rightSide'>
        <button onClick={()=>openInNewTab("https://www.facebook.com/")}>
            <img src={fb}/>
        </button>
        <button onClick={()=>openInNewTab("https://www.twitter.com/")}>
            <img src={twitter}/>
        </button>
        <button onClick={()=>openInNewTab("https://www.instagram.com/")}>
            <img src={instagram}/>
        </button>

        
        {/* <img src={twitter}/>
        <img src={instagram}/> */}

      </div>
    </div>
  )
}

export default Navbar

