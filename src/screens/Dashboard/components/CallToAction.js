import React from "react";
import styled from "styled-components";
import FlexBox from "../../../components/styled/FlexBox";
import Text from "../../../components/Text";
import Button from "../../../components/styled/Button";
import coreImage from "../../../assets/images/core-img.png";
import { white } from "../../../utils/colors";

const CallToAction = () => (
  <Wrapper>
    <Block>
      <FlexBox alignItems="center" justifyContent="space-between">
        <CoreImage src={coreImage} />
        <Heading>
          <Text fontSize="2.4rem" block bold>
            Do you Need a Complete Custom CV Template?
          </Text>
        </Heading>
        <Button padding="0.75rem 2rem" outlined>
          <Text fontWeight={500} fontSize="1.2rem">
            Send a Request
          </Text>
        </Button>
      </FlexBox>
    </Block>
  </Wrapper>
);

const Wrapper = styled.div`
  max-width: 1200px;
  margin: 5rem auto 4rem;
`;

const Block = styled.div`
  position: relative;
  padding: 2.7rem 2rem 2.7rem 0;
  background: ${white};
  border-radius: 1rem;
  overflow: hidden;
  box-shadow: 0 5px 40px 0 rgb(0 0 0 / 11%);
  box-sizing: border-box;
`;

const CoreImage = styled.img`
  position: absolute;
  left: -20px;
  width: 300px;
`;

const Heading = styled.div`
  width: 48%;
  margin-left: auto;
`;

export default CallToAction;
