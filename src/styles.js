import styled from 'styled-components';
import {motion} from 'framer-motion';

export const StyledAbout = styled(motion.div)`
    min-height:90vh;
    display:flex;
    align-items:center;
    justify-content:space-between;
    padding:3.5rem 7rem;
    color:white;
`;
export const StyledDescription = styled.div`
    flex:1;
    padding-right:5rem;
    h2 {
        font-weight:lighter;
    }
`;
export const StyledImage = styled.div`
    flex:1;
    overflow:hidden;
    img {
        width:100%;
        height:80vh;
        object-fit:cover;
    }
`;
export const StyledHide = styled.div`
    overflow:hidden;
`;