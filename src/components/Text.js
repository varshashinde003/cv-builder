import styled, { css } from "styled-components";
import { primary } from "../utils/colors";

const Text = styled.span`
  ${(props) =>
    css`
      left: ${props.left};
      top: ${props.top};
      position: ${props.position};
      display: ${props.block ? "block" : "inline"};
      font-size: ${props.fontSize};
      font-weight: ${props.bold
        ? 700
        : props.fontWeight
        ? props.fontWeight
        : "unset"};
      color: ${props.color};
      margin: ${props.margin};
      padding: ${props.padding};
      text-decoration: ${props.textDecoration};
      line-height: ${props.lineHeight};
      opacity: ${props.opacity};
      text-transform: ${props.textTransform};
      text-align: ${props.align};
      letter-spacing: ${props.spacing};
      text-underline-offset: ${props.underlineOffset};
      word-wrap: ${props.wordWrap};
      word-break: ${props.wordBreak};
      background-color: ${props.backgroundColor};
      border-radius: ${props.borderRadius};
      white-space: ${props.whiteSpace};
      cursor: ${props.cursor};
      opacity: ${props.opacity};
      float: ${props.float};
    `}
`;

Text.defaultProps = {
  color: primary,
  fontSize: "0.875rem",
  bold: false,
  margin: 0,
  padding: 0,
  textDecoration: "none",
  lineHeight: 1.5,
  opacity: 1,
  align: "left",
  spacing: "normal",
  underlineOffset: 0,
  position: "inherit",
  left: "unset",
  top: "unset",
  backgroundColor: null,
  borderRadius: 0,
  whiteSpace: "normal",
  cursor: "unset",
  wordBreak: "normal",
  float: "none",
};

export default Text;
