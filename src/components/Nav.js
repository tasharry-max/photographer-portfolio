import React from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';

const Nav = () => {
    return(
        <StyledNav>
            <Link to="/" id="logo">Capture</Link>
            <ul>
                <li>
                    <Link to="/" >About us</Link>
                </li>
                <li>
                    <Link to="/work">Our Work</Link>
                </li>
                <li>
                    <Link to="/contact">Contact us</Link>
                </li>
            </ul>
        </StyledNav>
    );
}

const StyledNav = styled.div`
    min-height:10vh;
    display: flex;
    margin: auto;
    justify-content:space-between;
    align-items:center;
    padding:1rem 7rem;
    background: #282828;
    a{color:white;text-decoration:none;}
    ul{
        display: flex;list-style:none;
        li{
            margin-left:3rem;position: relative;
        }
    }
    #logo{
        font-size:1.5rem;
        font-family: 'Jura', sans-serif;

    }
`;

export default Nav;