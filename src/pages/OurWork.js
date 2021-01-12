import React from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';
import athlete from '../img/athlete-small.png';
import theracer from '../img/theracer-small.png';
import goodtimes from '../img/goodtimes-small.png';
import {motion} from "framer-motion";
import {pageAnimation, fade, photoAnim, lineAnim, slider, sliderContainer} from "../animate";
import {useScroll} from '../components/useScroll';
import {scrollReveal} from '../animate';

 const OurWork = () => {
    const [element, controls] = useScroll();
    const [element2, controls2] = useScroll();
    return(
        <StyledWork variants={pageAnimation} initial="hidden" animate="show" exit="exit" style={{background:"#fff"}}>
            <motion.div  variants={sliderContainer}>
                <Frame1 variants={slider}></Frame1>
                <Frame2 variants={slider}></Frame2>
                <Frame3 variants={slider}></Frame3>
                <Frame4 variants={slider}></Frame4>
            </motion.div>
            <StyledMovie >
                <motion.h2 variants={fade}>The Athlete</motion.h2>
                <motion.div variants={lineAnim} className="line"></motion.div>
                <Link to="/work/the-athlete">
                    <Hide>
                        <motion.img variants={photoAnim} src={athlete} alt="athlete"/>
                    </Hide>
                </Link>
            </StyledMovie>
            <StyledMovie ref={element} animate={controls} variants={fade} initial="hidden">
                <h2>The Racer</h2>
                <div className="line"></div>
                <Link to="/work/the-racer">
                    <img src={theracer} alt="racer"/>
                </Link>
            </StyledMovie>
            <StyledMovie ref={element2} animate={controls2} variants={fade} initial="hidden">
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
        padding: 1rem 0;
    }
 `
 const StyledMovie = styled(motion.div)`
    padding-bottom:7rem;
    .line{
        height: 0.3rem;
        background: #23d997;
        margin-bottom: 2rem;
    }
    img{
        width:100%;
        height:75vh;
        object-fit:cover;
    }
 `
const Hide = styled.div`
    overflow:hidden;
`

const Frame1 = styled(motion.div)`
    position:fixed;
    left:0;
    top:10%;
    height:100vh;
    width:100%;
    background:#fffebf;
    z-index:2;
`;

const Frame2 = styled(Frame1)`
    background:#ff8efb;
`

const Frame3 = styled(Frame1)`
    background:#8ed2ff;
`

const Frame4 = styled(Frame1)`
    background:#8effa0;
`
 export default OurWork;