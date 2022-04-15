import React from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { FlexBox } from "../styled/FlexBox";
import content from "../../assets/images/content.svg";
import design from "../../assets/images/design.svg";
import reset from "../../assets/images/reset.svg";
import Text from "../Text";
import Card from "../Card";

const ToolBar = () => {
  const dispatch = useDispatch();
  return (
    <Wrapper>
      <Card padding="2rem 1.6rem">
        <FlexBox column>
          <Link to="resume/content">
            <Image src={content} alt="add-content" />
            <Text align="center" cursor="pointer" fontSize="1.1rem" block>
              Content
            </Text>
          </Link>
          <Spacer />
          <Link to="resume/customization">
            <Image src={design} alt="customize" />
            <Text align="center" cursor="pointer" fontSize="1.1rem" block>
              Design
            </Text>
          </Link>
          <Spacer />
          <a onClick={() => dispatch({ type: "RESET" })}>
            <Image src={reset} alt="reset-data" />
            <Text align="center" cursor="pointer" fontSize="1.1rem" block>
              Reset
            </Text>
          </a>
        </FlexBox>
      </Card>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  text-align: center;
`;

const Image = styled.img`
  margin-bottom: 0.6rem;
  width: 3.2rem;
  cursor: pointer;
`;

const Spacer = styled.div`
  height: 2rem;
`;

export default ToolBar;
