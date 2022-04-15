import React from "react";
import styled from "styled-components";
import Text from "./Text";
import { secondaryLight } from "../utils/colors";

const Pill = ({ field, setSelectedFields }) => (
  <Wrapper
    onClick={() =>
      setSelectedFields({
        name: field.name,
        value: field.value,
      })
    }
  >
    <Text>
      <i className="fa fa-plus mr_4px" /> {field.name}
    </Text>
  </Wrapper>
);

const Wrapper = styled.div`
  background: ${secondaryLight};
  padding: 0.5rem 0.75rem;
  border-radius: 10px;
  display: flex;
  flex-wrap: wrap;
  width: auto;
  margin-bottom: 0.75rem;
`;

export default Pill;
