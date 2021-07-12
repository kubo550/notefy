import { motion } from "framer-motion";
import styled from "styled-components";

export const Container = styled(motion.div)`
  width: 580px;
  max-width: 1280px;
  margin: 0 auto;

  @media ${props => props.theme.breakpoints.sm} {
    width: 90vw;
    margin: 0 auto;
  }
`;
