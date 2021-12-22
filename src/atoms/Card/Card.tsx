// Generated with util/create-component.js
import React from "react";
import styled from "styled-components";
import { device } from "../../helpers";

import { CardProps } from "./Card.types";

const Card: React.FC<CardProps> = ({ children, maxWidth }) => (
  <StyledCard data-testid="card" maxWidth={maxWidth}>
    {children}
  </StyledCard>
);

export default Card;

const StyledCard = styled.div.attrs<CardProps>((props) => ({
  maxWidth: props.maxWidth,
}))<CardProps>`
  background-color: ${(props) => props.theme.colors.cell.active};
  color: ${(props) => props.theme.colors.text.active};
  box-sizing: border-box;
  padding: 3rem 1rem;
  border-radius: 0;
  width: 100%;

  @media ${device.mobileL} {
    ${(props) => (props.maxWidth ? `max-width: ${props.maxWidth}` : "")};
    width: calc(100% - 2rem);
    border-radius: 1.5rem;
    margin: 0 auto;
    padding: 4rem;
    box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.1);
  }
`;
