import React from "react";
import styled from "styled-components";
import Text from "./Text";
import Input from "./Input";

const InputWrapper = ({ field, content, object, handleChange }) => (
  <ElementWrapper>
    <Text textTransform="capitalize" block>
      {field.title}
    </Text>
    <Input
      type={
        field.name === "email"
          ? "email"
          : field.name === "phone" || field === "postcode"
          ? "number"
          : field.name === "dob" ||
            field.name === "startDate" ||
            field.name === "endDate"
          ? "date"
          : "text"
      }
      value={content[field.name]}
      name={field.name}
      defaultValue={content[field.name]}
      onChange={object ? (e) => handleChange(e, object) : handleChange}
      placeholder={field.placeholder}
    />
  </ElementWrapper>
);

const ElementWrapper = styled.div`
  width: 46.8%;
`;

export default InputWrapper;
