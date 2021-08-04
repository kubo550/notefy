import { motion } from "framer-motion";
import styled from "styled-components";

export const Container = styled(motion.div)`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  h2 {
    font-size: 1.4rem;
    margin-top: 14px;
    text-transform: uppercase;
    font-style: italic;
  }
`;
