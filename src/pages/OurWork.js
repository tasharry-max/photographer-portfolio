import React from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';
import athlete from '../img/athlete-small.png';
import theracer from '../img/theracer-small.png';
import goodtimes from '../img/goodtimes-small.png';
import {motion} from "framer-motion";
import {pageAnimation} from "../animate";

 const OurWork = () => {
    return(
        <StyledWork variants={pageAnimation} initial="hidden" animate="show" exit="exit">
            <StyledMovie>
                <h2>The Athlete</h2>
                <div className="line"></div>
                <Link to="/work/the-athlete">
                    <img src={athlete} alt="athlete"/>
                </Link>
            </StyledMovie>
            <StyledMovie>
                <h2>The Racer</h2>
                <div className="line"></div>
                <Link to="/work/the-racer">
                    <img src={theracer} alt="racer"/>
                </Link>
            </StyledMovie>
            <StyledMovie>
                <h2>The Good Times</h2>
                <div className="line"></div>
                <Link to="/work/good-times">
                    <img src={goodtimes} alt="goodtimes"/>
                </Link>
            </StyledMovie>
        </StyledWork>
    )
 }

 const StyledWork = styled(motion.div)`
    min-height:100vh;
    overflow:hidden;
    padding:3rem 7rem;
    h2{
        color:white;
        padding: 1rem 0;
    }
 `
 const StyledMovie = styled.div`
    padding-bottom:7rem;
    .line{
        height: 0.3rem;
        background: #ccc;
        margin-bottom: 2rem;
    }
    img{
        width:100%;
        height:75vh;
        object-fit:cover;
    }
 `

 export default OurWork;