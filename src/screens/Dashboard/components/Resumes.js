import React from "react";
import styled from "styled-components";
import FlexBox from "../../../components/styled/FlexBox";
import Card from "../../../components/Card";
import Text from "../../../components/Text";
import Button from "../../../components/styled/Button";
import { features } from "../metadata";
import { white, secondary } from "../../../utils/colors";

const Resumes = () => (
  <div className="resume-bg">
    <Wrapper>
      <SectionTitle>
        <Text margin="0 0 1rem" align="center" fontSize="3rem" bold>
          Resumes
        </Text>

        <Text
          margin="1rem 0 2rem"
          color={secondary}
          align="center"
          fontSize="1.2rem"
          fontWeight={500}
          block
        >
          Your first resume - 100% free, forever, all features, unlimited
          downloads, yes really.
        </Text>
      </SectionTitle>
      <FlexBox justifyContent="center">
        <SectionLeft>
          {features.map((feature, index) => (
            <SpacerDiv key={index}>
              <Card borderRadius="0.5rem" width="auto" boxShadow key={index}>
                <FlexBox alignItems="center">
                  <Image src={feature.icon} />
                  <FlexBox column>
                    <Text fontSize="1.2rem" bold block>
                      {feature.title}
                    </Text>
                    <Spacer />
                    <Text
                      color={secondary}
                      fontWeight={500}
                      fontSize="1rem"
                      block
                    >
                      {feature.description}
                    </Text>
                  </FlexBox>
                </FlexBox>
              </Card>
            </SpacerDiv>
          ))}
        </SectionLeft>
        <SectionRight>
          <Text fontSize="2rem" bold block>
            Why Choose Our Platform?
          </Text>
          <Text
            margin="1rem 0 0"
            lineHeight={1.8}
            color={secondary}
            fontWeight={500}
            fontSize="1.1rem"
            block
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis at
            dictum risus, non suscipit arcu. Quisque aliquam posuere tortor, sit
            amet convallis nunc scelerisque in.
          </Text>
          <Text
            margin="1rem 0"
            lineHeight={1.8}
            color={secondary}
            fontWeight={500}
            fontSize="1.1rem"
            block
          >
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore
            eius molestiae facere, natus reprehenderit eaque eum, autem ipsam.
            Magni, error. Tempora odit laborum iure inventore possimus
            laboriosam qui nam. Fugit!
          </Text>
          <Button padding="1rem 2rem">
            <a href="/resume/content">
              <Text color={white} fontSize="1rem" bold>
                New resume
              </Text>
            </a>
          </Button>
        </SectionRight>
      </FlexBox>
    </Wrapper>
  </div>
);

const Wrapper = styled.div`
  max-width: 1200px;
  margin: auto;
`;

const SpacerDiv = styled.div`
  margin: 2rem 0;
`;

const SectionTitle = styled.div`
  text-align: center;
`;

const SectionLeft = styled.div`
  width: 46%;
`;

const SectionRight = styled.div`
  width: 46%;
  padding: 2rem 0 2rem 4rem;
`;

const Spacer = styled.div`
  height: 0.5rem;
`;

const Image = styled.img`
  margin-right: 1.6rem;
`;

export default Resumes;
