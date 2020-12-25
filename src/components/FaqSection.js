import React from "react";
import styled from 'styled-components';
import {StyledAbout, StyledDescription, StyledImage, StyledHide} from '../styles';

const FaqSection = () => {
    return (
        <StyledFaq>
            <h2>Any questions <span>FAQ</span></h2>
            <div className="question">
                <h4>How Do I Start?</h4>
                <div className="answer">
                    <p>Lorem ipsum dolor sit amet.</p>
                    <p>Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet.</p>
                </div>
            </div>
            <div className="faq-line"></div>
            <div className="question">
                <h4>Daily Schedule</h4>
                <div className="answer">
                    <p>Lorem ipsum dolor sit amet.</p>
                    <p>Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet.</p>
                </div>
            </div>
            <div className="faq-line"></div>
            <div className="question">
                <h4>Different Payment Methods</h4>
                <div className="answer">
                    <p>Lorem ipsum dolor sit amet.</p>
                    <p>Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet.</p>
                </div>
            </div>
            <div className="faq-line"></div>
            <div className="question">
                <h4>What we offer</h4>
                <div className="answer">
                    <p>Lorem ipsum dolor sit amet.</p>
                    <p>Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet.</p>
                </div>
            </div>
            <div className="faq-line"></div>
        </StyledFaq>
    )
}

const StyledFaq = styled(StyledAbout)`
    display: block;
    span {
        display:block;
    }
    h2 {
        padding-bottom: 1rem;
        font-weight:lighter;
    }
    .faq-line{
        background: #cccccc;
        height:0.2rem;
        margin:2rem 0rem;
        width:100%;
    }
    .question {
        padding: 3rem 0;
        cursor: pointer;
    }
    .answer {
        padding: 2rem 0;
        p{
            padding:1rem 0;
        }
    }
`;

export default FaqSection;