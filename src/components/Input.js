import React from "react";
import styled from "styled-components";
import { secondaryLight } from "../utils/colors";

const Input = ({ type, name, value, onChange, placeholder, margin }) => (
  <InputBox
    type={type}
    name={name}
    value={value}
    onChange={onChange}
    placeholder={placeholder}
    margin={margin}
  />
);

const InputBox = styled.input`
  appearance: none;
  box-shadow: none;
  outline: 0px;
  border: none;
  border-radius: 12px;
  height: 48px;
  width: 100%;
  margin-right: 8px;
  padding: 0px 16px;
  font-size: 1rem;
  background-color: ${secondaryLight};
  box-sizing: border-box;
  margin: ${(props) => (props.margin ? props.margin : "0.5rem 0 1.2rem 0")};

  &::-webkit-inner-spin-button,
  &::-webkit-outer-spin-button {
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    margin: 0;
  }
`;

export default Input;
