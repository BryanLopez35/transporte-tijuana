import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import BurgerButton from './BurgerButton'

function Navbar() {
    const [clicked, setClicked] = useState(false);

    const handleClick = () => {
        // Cuando esta true lo pasa a false y viceversa
        setClicked(!clicked);
    };

    useEffect(() => {
        function handleResize() {
            if (window.innerWidth > 768) {
                setClicked(false);
            }
        }

        // Agregar un listener de cambio de tamaño de ventana
        window.addEventListener('resize', handleResize);

        // Llamar a handleResize inmediatamente para manejar el estado inicial
        handleResize();

        // Eliminar el listener cuando se desmonta el componente
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const isMobileOrTablet = window.innerWidth <= 768;

    return (
        <>
            <NavContainer className={`links ${clicked ? 'active' : ''}`}>
                <h2>Muévete por <span>Tijuana</span></h2>
                <div className={`links ${clicked ? 'active' : ''}`}>
                    {/* Agregar la condición para ejecutar el evento solo en dispositivos móviles o tabletas */}
                    {isMobileOrTablet ? (
                        <>
                            <a onClick={handleClick} href="https://google.com">Inicio</a>
                            <a onClick={handleClick} href="#h">Rutas</a>
                            <a onClick={handleClick} href="#h">Puntos de interés</a>
                            <a onClick={handleClick} href="#h">Contáctanos</a>
                        </>
                    ) : (
                        // Renderizar los enlaces sin el evento onClick en otros dispositivos
                        <>
                            <a href="https://google.com">Inicio</a>
                            <a href="#h">Rutas</a>
                            <a href="#h">Puntos de interés</a>
                            <a href="#h">Contáctanos</a>
                        </>
                    )}
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