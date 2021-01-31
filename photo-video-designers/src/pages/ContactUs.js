import React from 'react';
import {motion} from "framer-motion";
import {pageAnimation, titleAnim} from "../animate";
import styled from "styled-components";

 const ContactUs = () => {
    return(
        <StyledContact variants={pageAnimation} initial="hidden" animate="show" exit="exit" style={{background:"#fff"}}>
            <StyledTitle>
                <Hide>
                    <motion.h2 variants={titleAnim}>Get in touch</motion.h2>
                </Hide>
            </StyledTitle>
            <div>
                <Social variants={titleAnim}>
                    <Circle/>
                    <h2>Send Us A Message</h2>
                </Social>
                <Social variants={titleAnim}>
                    <Circle/>
                    <h2>Send an email</h2>
                </Social>
                <Social variants={titleAnim}>
                    <Circle/>
                    <h2>Social Media</h2>
                </Social>
                
            </div>
        </StyledContact>
    )
 }
const StyledContact = styled(motion.div)`
    padding: 5rem 10rem;
    color: #353535;
    min-height: 90vh;
`;

const StyledTitle = styled(motion.div)`
  margin-bottom:4rem;
  color:black;
`;
const Hide = styled.div`
    overflow: hidden;
`;
const Circle = styled.div`
    border-radius: 50%;
    width:2rem;
    height:2rem;
    background: #353535;
`
const Social = styled(motion.div)`
    display:flex;
    align-items: center;
    h2{
        margin:2rem;
    }
`
 export default ContactUs;
 