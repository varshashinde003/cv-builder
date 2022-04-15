import styled, { css } from "styled-components";

import { primary, white, danger, primaryAccent1 } from "../../utils/colors";

const Button = styled.button`
  display: ${(props) => props.display};
  border-radius: ${(props) =>
    props.borderRadius ? props.borderRadius : "2rem"};
  padding: ${(props) => props.padding};
  border: ${(props) => (props.border ? props.border : "none")};
  background-color: ${(props) =>
    props.backgroundColor ? props.backgroundColor : primary};
  color: ${(props) => (props.color ? props.color : white)};
  font-size: ${(props) => props.fontSize};
  font-weight: 700;
  letter-spacing: ${(props) => props.spacing};
  -webkit-letter-spacing: 1.4px;
  -moz-letter-spacing: 1.4px;
  -ms-letter-spacing: 1.4px;
  width: ${(props) => props.width};
  max-width: ${(props) => props.maxWidth};
  text-transform: ${(props) => props.transform};
  margin: ${(props) => props.margin};
  position: ${(props) => props.position};
  left: ${(props) => props.left};
  right: ${(props) => props.right};
  bottom: ${(props) => props.bottom};
  z-index: ${(props) => props.zIndex};
  cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};
  opacity: ${(props) => (props.disabled ? "0.34" : "1")};
  float: ${(props) => props.float};
  ${(props) =>
    props.outlined &&
    css`
      display: ${props.block ? "block" : "inline-block"};
      background-color: transparent;
      color: ${props.danger ? danger : primaryAccent1};
      border: 2px solid ${props.danger ? danger : primaryAccent1};
    `}
`;

Button.defaultProps = {
  transform: "none",
  outlined: false,
  margin: 0,
  padding: "0.6rem 1.6rem",
  fontSize: "0.875rem",
  width: "auto",
  maxWidth: "-webkit-fill-available; max-width: -moz-available",
  danger: false,
  type: "button",
  display: "inline-block",
  spacing: "0.5px",
};

export default Button;
