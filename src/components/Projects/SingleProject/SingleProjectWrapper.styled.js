import { motion } from "framer-motion";
import styled from "styled-components";

export const SingleProjectWrapper = styled(motion.div)`
    height: 100%;
    padding: 7.5rem 2rem;
    color: white;
    cursor: pointer;
    transition: .3s ease-out;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    background: linear-gradient(0deg, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), url(${(props) => props.background});
    background-size: 130%;
    background-repeat: no-repeat;
    background-position: center;

    &:hover:not(Modal) {
        background-size: 150%;
        opacity: .85;
    }
`;