import React from 'react';
import styled from 'styled-components';
import BurgerButton from './BurgerButton';
import { Link } from 'react-router-dom';

function Navbar() {
  const [clicked, setClicked] = React.useState(false);

  const handleClick = () => {
    setClicked(!clicked);
  };

  return (
    <>
      <NavContainer className={`links ${clicked ? 'active' : ''}`}>
        <h2>Muévete por <span>Tijuana</span></h2>
        <div className={`links ${clicked ? 'active' : ''}`}>
          <Link to="/Inicio">Inicio</Link>
          <Link to="/Rutas">Rutas</Link>
          <Link to="/PuntosInteres">Puntos de interés</Link>
          <Link to="/Contacto">Contáctanos</Link>
        </div>
        <div className='burger'>
          <BurgerButton clicked={clicked} handleClick={handleClick} />
        </div>
        <BgDiv className={`initial ${clicked ? 'active' : ''}`} />
      </NavContainer>
    </>
  );
}

export default Navbar;

const NavContainer = styled.nav`
    h2{
        color: white;
        font-weight:400;
        span{
            font-weight: bold;
        }
    }
    padding: .4rem;
    background-color: #9F2241;
    display: flex;
    align-items: center;
    justify-content: space-between;
    a{
        color: white;
        text-decoration:none;
        margin-right: 1rem;
    }

    .links{
        position: absolute;
        top: -700px;
        left: -2000px;
        right: 0;
        margin-left: auto;
        margin-right: auto;
        text-align: center;
        transition: all .5s ease;
        a{
          color: white;
          font-size: 2rem;
          display: block;
        }
        @media(min-width: 768px){
          position: initial;
          margin: 0;
          a{
            font-size: 1rem;
            color: white;
            display: inline;
          }
          display: block;
        }
      }
      .links.active{
        width: 100%;
        display: block;
        position: absolute;
        margin-left: auto;
        margin-right: auto;
        top: 30%;
        left: 0;
        right: 0;
        text-align: center;
        a{
          font-size: 2rem;
          margin-top: 1rem;
          color: white;
        }
      }


    .burger{
        @media(min-width: 768px){
            display: none;
        }
    }
    
`

const BgDiv = styled.div`
    background-color: #691C32;
    position: absolute;
    top: -1200px;
    left: -1200px;
    width: 100%;
    height: 100%;
    z-index: -1;
    transition: all .6s ease;

    &.active{
        border-radius: 0 0 80% 0  ;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
    }
    
`