import React from "react";
import {
  Nav,
  NavLink1,
  NavLink2,
  NavLink3,
  Bars,
  DropD,
  Ft,
  Link,
  NavLink4,
} from "./Navel";

import { FiArrowLeft } from 'react-icons/fi'

import Logo from "../../images/Logo.png";


import { CgBell } from 'react-icons/cg'
import ProfilePic from '../../images/ProfilePic.png'
import { useNavigate } from "react-router-dom";

const ProjetosNavbar = () => {
  const USER = JSON.parse(localStorage.getItem('user'))
  const navigation = useNavigate()

  return (
    <>
      <FiArrowLeft onClick={() => navigation('/teams')} style={{position: 'absolute', top: '100px', left: '30px', cursor: 'pointer', zIndex: 99915}} size={40}  />
      <Nav>
        <div className="lft"> 
          <img src={Logo} />
        </div>


        <div className="center">
          
          <NavLink1 to="/projects" style={{cursor: 'pointer', zIndex: 5}} activeStyle>
            Projetos
          </NavLink1>
          <NavLink2 to="/ferramentas" style={{cursor: 'pointer', zIndex: 5}} activeStyle>
            Ferramentas
          </NavLink2>
          <NavLink3 to="/members" style={{cursor: 'pointer', zIndex: 5}} activeStyle>
            Membros
          </NavLink3>
        </div>
        <div className="rght">
          <div className="dropdown">
            <CgBell className="bellIcon" />
            <img className="profilePic" src={ProfilePic} />
          </div>
        </div>
      </Nav>
    </>
  );
};

export default ProjetosNavbar;
