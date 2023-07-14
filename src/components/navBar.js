import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { MenuData } from '../data/MenuData'
import { Button } from './button'
import { BsCodeSlash } from 'react-icons/bs'

const Nav = styled.nav`
    height: 60px;
    display: flex;
    justify-content: space-between;
    padding: 1rem 2rem;
    z-index: 100;
    position: fixed;
    align-items: center;
    width: 100%;
    background-image: linear-gradient(to right,#12091E,#D05E1D,#E1B24D);
    @media screen and (max-width: 768px) {
        padding: 0;
    }
`
const Logo = styled(Link)`
    color: white;
    font-style: italic;
    text-decoration: none;
    font-size: 1.5rem;
    font-weight: bold;
    @media screen and (max-width: 768px) {
        font-size: 20px;
    }
    `
const MenuBars = styled(BsCodeSlash)`
    display: none;
    @media screen and (max-width: 768px) {
        display: block;
        color: #fff;
        height: 40px;
        width: 40px;
        cursor: pointer;
        position: absolute;
        top: 0;
        right: 0;
        transform: translate(-50%, 25%);
    }
`;
const NavMenuLinks = styled(Link)`
    text-decoration: none;
    color: white;
    padding: 10px;
    margin-right: 1.5rem;
    &:hover {
        transform: translateY(-2px)`
const NavMenu = styled.div`
    display: flex;
    align-items: center;
    margin-right: -48px;
    @media screen and (max-width: 768px) {
        display: none;
    }
    `;
const NavBtn = styled.div`
    display: flex;
    align-items: center;
    margin-right: 24px;`
const NavBar = () => {
  return (
    <Nav>
        <Logo>Michael Leeser-Smith</Logo>
        <MenuBars />
        <NavMenu>
            {MenuData.map((item, index) => (
                <NavMenuLinks to={item.link} key={index}>
                {item.title}
                </NavMenuLinks>
            ))}
        </NavMenu>
        {/* <NavBtn>
            <Button to="/contact" primary='true'>Contact Me</Button>
        </NavBtn> */}
    </Nav>
    
  )
}

export default NavBar