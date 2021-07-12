import Link from "next/link";
import styled from "styled-components";

export const CopyContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0 40px;
`;

export const Hr = styled.hr`
  margin: 40px 0;
`;

export const RLink = styled(Link)`
  color: orangered;
  text-decoration: none;

  &:visited {
    color: orangered;
  }

  &:hover,
  &:focus {
    color: orange;
  }

  &:active {
    transform: translateY(10px);
  }
`;

export const CopyBtn = styled.button``;
