import React from "react";
//Icons
import clock from '../img/clock.svg';
import diaphragm from '../img/diaphragm.svg';
import money from '../img/money.svg';
import teamwork from '../img/teamwork.svg';
import home2 from "../img/home2.png";
import {StyledAbout, StyledDescription, StyledImage, StyledHide} from '../styles';
import styled from 'styled-components';

const ServicesSection = () => {
    return (
        <StyledServices>
            <StyledDescription>
                <h2>High <span>quality</span> service.</h2>
                <StyledCards>
                    <StyledCard>
                       <div className="icon">
                           <img src={clock} alt={clock}/>
                           <h3>Efficient</h3>
                        </div>
                        <p>Lorem ipsum dolor sit amet</p>
                    </StyledCard>
                    <StyledCard>
                       <div className="icon">
                           <img src={diaphragm} alt={diaphragm}/>
                           <h3>Diaphragm</h3>
                        </div>
                        <p>Lorem ipsum dolor sit amet</p>
                    </StyledCard>
                    <StyledCard>
                       <div className="icon">
                           <img src={teamwork} alt={teamwork}/>
                           <h3>Teamwork</h3>
                        </div>
                        <p>Lorem ipsum dolor sit amet</p>
                    </StyledCard>
                    <StyledCard>
                       <div className="icon">
                           <img src={money} alt={money}/>
                           <h3>Money</h3>
                        </div>
                        <p>Lorem ipsum dolor sit amet</p>
                    </StyledCard>
                </StyledCards>
            </StyledDescription>
            <StyledImage>
                <img src={home2} alt="camera"/>
            </StyledImage>
        </StyledServices>
    )
}

const StyledServices = styled(StyledAbout)`
    h2{
        padding-bottom: 4rem;
    }
    p{
        width:80%;
        padding:2rem 0rem 4rem 0rem;
    }
`;
const StyledCards = styled.div`
    display:flex;
    flex-wrap: wrap;
`
const StyledCard = styled.div`
    flex-basis:15rem;
    .icon{
        display:flex;
        align-items:center;
        h3{
            margin-left:1rem;
            background:white;
            color:black;
            padding:1rem;
        }
    }
`
export default ServicesSection;