import React, { useState } from 'react'
import "./navbar.css"
import logo from '../../assets/logo.svg'

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const Menu = () => {
    return <>
      <p> <a href='#home'>Home</a> </p>
      <p> <a href='#wgpt3'>What is GPT?</a> </p>
      <p> <a href='#possibility'>Open AI</a> </p>
      <p> <a href='#features'>Case Studies</a> </p>
      <p> <a href='#blog'>Library</a> </p>
    </>
  }
  return (
    <div className='gpt3_navbar'>
      <div className='gpt3_navbar-links'>
        <div className='gpt3_navbar-links_logo'>
          <img src={logo} alt=''></img>
        </div>

        <div className='gpt3_navbar-links_container'>
          <Menu></Menu>
        </div>

        <div className='gpt3_navbar-sign'>
          <p>Sign in</p>
          <button type='button'>Sign up</button>
        </div>

        <div className='gpt3_navbar-menu'>
          {toggleMenu ?
            <i class="fa fa-times" style={{ fontSize: "27px", color: "white" }} onClick={() => setToggleMenu(false)}></i>
            : <i class="fa fa-align-right" style={{ fontSize: "27px", color: "white" }} onClick={() => setToggleMenu(true)}></i>}
          {
            toggleMenu && (
              <div className='gpt3_navbar-menu_container scale-up-center'>
                <div className="gpt3__navbar-menu_container-links">
                   <Menu></Menu>
                </div>
               
                <div className='gpt3_navbar-menu_container-links-sign'>
                  <p>Sign in</p>
                  <button type='button'>Sign up</button>
                </div>
              </div>
            )
          }


        </div>

      </div>
    </div>
  )
}

export default Navbar
