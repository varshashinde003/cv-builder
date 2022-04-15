import React from "react";
import styled from "styled-components";
import FlexBox from "../../../components/styled/FlexBox";
import Text from "../../../components/Text";
import introImage from "../../../assets/images/intro-image.png";
import {
  primary,
  secondary,
  primaryAccent1,
  primaryAccent2,
  success,
} from "../../../utils/colors";

const Intro = () => (
  <Wrapper>
    <FlexBox alignItems="center" justifyContent="space-between">
      <SectionLeft>
        <FlexBox column>
          <IntroText>
            <FlexBox alignItems="center">
              <i className="fa fa-check-circle" />
              <Text color={primaryAccent1} fontSize="1rem" bold>
                Discover The Easiest ways to Build Your CV!
              </Text>
            </FlexBox>
          </IntroText>
          <Heading>Let's boost your career</Heading>
          <Text
            fontSize="1.2rem"
            lineHeight={2}
            color={secondary}
            fontWeight={500}
          >
            This resume builder takes the hassle out of resume writing. Choose
            from several templates and follow easy prompts to create the perfect
            job-ready resume.
          </Text>
        </FlexBox>
      </SectionLeft>
      <RightImage>
        <Image src={introImage} />
      </RightImage>
    </FlexBox>
  </Wrapper>
);

const Wrapper = styled.div`
  max-width: 1200px;
  margin: auto;
`;

const Heading = styled.h1`
  font-size: 48px;
  margin-bottom: 0px;
  color: ${primary};
  font-weight: 700;
  margin-bottom: 1.6rem;
`;

const SectionLeft = styled.div`
  width: 50%;
`;

const RightImage = styled.div`
  width: 46%;
  position: relative;
  box-sizing: border-box;

  .bgImage {
    width: 100%;
    z-index: 10;
    position: absolute;
    box-sizing: border-box;
  }
`;

const Image = styled.img`
  width: 100%;
  box-sizing: border-box;
`;

const IntroText = styled.div`
  width: 80%;
  padding: 0.4rem 0;
  border-radius: 2rem;
  background: ${primaryAccent2};
  .fa {
    margin: 0 1rem;
    font-size: 2rem;
    color: ${success};
  }
  margin-bottom: 2rem;
`;

export default Intro;
