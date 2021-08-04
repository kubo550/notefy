import { motion } from "framer-motion";
import styled from "styled-components";

export const Container = styled(motion.div)`
    position: absolute;
    bottom: -60px;
    left: 50%;
    transform: translateX(-50%);
    background-color: #99cc00;
    padding: 5px 10px;
    border-radius: 20px;
    color: ${props => props.theme.colors.extra};

`