import React,{useState} from 'react';
//importing Link from react-router-dom
// import { Link } from 'react-router-dom';
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink
} from './NavbarElements';


const Navbar = () => {
  const [notLogin, setNotLogin] = useState(true);
  return (
    <Nav>
        <NavLink to='/home'><h3>Basic Twitter App</h3></NavLink>
        {/* Match the path to what set in the 'Switch' */}
        <Bars/>
        <NavMenu>
          <NavLink to='/home'>Home</NavLink>
          <NavLink exact to='/'>Welcome</NavLink>
          {notLogin ?(<NavLink to='/login' onClick = {()=>setNotLogin(false)}>Login</NavLink>):
          (<NavLink to='/welcome' onClick = {() => {sessionStorage.removeItem('name'); setNotLogin(true); }}>Logout</NavLink>)}
        </NavMenu>
    </Nav>
  );
};
export default Navbar;
