import React from "react";
import styled from "styled-components";
import FlexBox from "../../../components/styled/FlexBox";
import Text from "../../../components/Text";
import Button from "../../../components/styled/Button";
import logo from "../../../assets/images/logo.png";

const Header = () => (
  <HeaderWrapper>
    <FlexBox alignItems="center" justifyContent="space-between">
      <Text fontSize="2rem" bold>
        <Logo src={logo} /> CV BUILDER
      </Text>
      <Button width="10rem" fontSize="1.2rem">
        Login
      </Button>
    </FlexBox>
  </HeaderWrapper>
);

const HeaderWrapper = styled.header`
  padding: 3rem 0;
  max-width: 1200px;
  margin: auto;
`;

const Logo = styled.img`
  width: 5rem;
`;

export default Header;
