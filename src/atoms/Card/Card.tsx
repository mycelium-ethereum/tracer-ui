// Generated with util/create-component.js
import React from "react";
import styled from "styled-components";
import { device } from "../../helpers";

import { CardProps } from "./Card.types";

const Card: React.FC<CardProps> = ({ children }) => (
  <StyledCard data-testid="card">{children}</StyledCard>
);

export default Card;

const StyledCard = styled.div`
  background-color: ${(props) => props.theme.colors.cell.active};
  width: 100%;
  color: ${(props) => props.theme.colors.text.active};
  box-sizing: border-box;

  padding: 3rem 1rem;
  border-radius: 0;

  @media ${device.tablet} {
    border-radius: 1.5rem;
  }

  @media ${device.laptop} {
    padding: 4rem;
    box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.1);
  }
`;
