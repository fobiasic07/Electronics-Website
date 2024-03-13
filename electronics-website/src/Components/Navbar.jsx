import React from 'react'
//import Logo from '..src/Assets/white_iot_regular_icon.png'

const Navbar = () => {
    //const [openMenu,setOpenMenu] = useState(false); //responsiveness for screen sizes, probably used when getting to the topical content,i.e, left-section
    const menuOptions = [
        {
            text: "HOME"
        },
        {
            text: "DOCUMENTATION"
        },
        {
            text: "CONTACT"
        }
    ]
    //<img src={Logo} alt="" />
  return (
    <nav>
        <div className='nav-logo-container'>
            <img src="./" alt="" />
        </div>
        <div className='navbar-links-container'>
            <a href="">HOME</a>
            <a href="">DOCUMENTATION</a>
            <a href="">CONTACT</a>
        </div>
    </nav>
  )
}

export default Navbar