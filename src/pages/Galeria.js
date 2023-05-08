import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import LoginContext from '../context/LoginContext';
import { MdNightsStay } from 'react-icons/md';
import { FaSun } from 'react-icons/fa';
import CarouselPag from '../componets/Carousel';



export default function Galeria() {
    const { xablau } = useContext(LoginContext);

    const { toggleTheme } = useContext(LoginContext);

  return (
      <>
      <div class="coracao"></div>
            <div className='container2'>

      <div className='item'>Galeria</div>
<section className='item'>
    <NavLink 
    to="/noite" 
    activeClassName="active">
 <MdNightsStay />    
 </NavLink>

    <NavLink 
    to="/dia" 
    activeClassName="active">
    <FaSun />

    </NavLink>
    </section>
    <button
    onClick={() => { toggleTheme(); }}
    type="button"
  >
    {xablau === 'dark' ? '🌞' : '🌒'}
  </button>
<br></br>
      <p>xablau</p>
  </div>
      <br></br>
  <CarouselPag />      

  </>
  )
}
