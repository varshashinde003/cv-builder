import React from "react";
import styled from "styled-components";
import Text from "../../../components/Text";
import { secondaryLight } from "../../../utils/colors";

const Footer = () => (
  <FooterWrapper>
    <Text fontSize="16px" align="center" bold block>
      Made with <i className="fa fa-heart" /> by VS
    </Text>
  </FooterWrapper>
);

const FooterWrapper = styled.footer`
  background: ${secondaryLight};
  padding-top: 4rem;
`;

export default Footer;
