import { motion } from "framer-motion";
import styled from "styled-components";

export const ButtonWrapper = styled(motion.a) `
    font-size: 0.875rem;;
    font-weight: 500;
    position: relative;

    &::before {
        position: absolute;
        content: "";
        display: block;
        height: 1px;
        width: 100%;
        background: #9D9E54;
        max-width: 6.25rem;
        bottom: -2px;
    }

    span {
        position: absolute;
        right: -3rem;
        top: 1px;
        width: 2rem;
    }
`;