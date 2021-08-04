import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 250px;
  padding: 10px 20px;
  margin: 5px 0;
  border: 2px dotted ${props => props.theme.colors.primary};
  border-radius: 21px;
`;
