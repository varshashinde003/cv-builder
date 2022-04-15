import React from "react";
import styled from "styled-components";
import { white } from "../utils/colors";

const Card = ({ children, padding, borderRadius, boxShadow }) => (
  <Wrapper padding={padding} borderRadius={borderRadius} boxShadow={boxShadow}>
    {children}
  </Wrapper>
);

const Wrapper = styled.div`
  position: relative;
  border-radius: ${(props) => props.borderRadius || "1.2rem"};
  padding: ${(props) => props.padding || "1.2rem"};
  background: ${white};
  box-shadow: ${(props) =>
    props.boxShadow ? "0px 2px 27px 0px rgb(154 161 171 / 18%)" : "none"};
  -webkit-box-shadow: ${(props) =>
    props.boxShadow ? "0px 2px 27px 0px rgb(154 161 171 / 18%)" : "none"};
`;

export default Card;
