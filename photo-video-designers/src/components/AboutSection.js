import React from "react";
import home1 from "../img/home1.png";
import {StyledAbout, StyledDescription, StyledImage, StyledHide} from '../styles';
import {motion} from 'framer-motion';
import {titleAnim, fade, photoAnim} from '../animate';
import Wave from './Wave';

const AboutSection = () => {
    return(
        <StyledAbout>
            <StyledDescription>
                <div className="title">
                    <StyledHide>
                        <motion.h2 variants={titleAnim}>We work to make</motion.h2>
                    </StyledHide>
                    <StyledHide>
                        <motion.h2 variants={titleAnim}>your <span>dreams</span> come</motion.h2>
                    </StyledHide>
                    <StyledHide>
                        <motion.h2 variants={titleAnim}>true</motion.h2>
                    </StyledHide>
                </div>
                <motion.p variants={fade}>Contact us for any photography or videography ideas that you have. We have professionals with amazing skills.</motion.p>
                <motion.button variants={fade}>Contact Us</motion.button>
            </StyledDescription>
            <StyledImage>
                <motion.img src={home1} alt="camera" variants={photoAnim} initial="hidden" animate="show"/>
            </StyledImage>
            <Wave/>
        </StyledAbout>
    )
};

export default AboutSection;