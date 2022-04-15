import React from "react";
import styled from "styled-components";
import loadable from "@loadable/component";

const Header = loadable(() => import("./components/Header"));
const Footer = loadable(() => import("./components/Footer"));
const Resumes = loadable(() => import("./components/Resumes"));
const Intro = loadable(() => import("./components/Intro"));
const CallToAction = loadable(() => import("./components/CallToAction"));

const Dashboard = () => (
  <>
    <DashboardWrapper>
      <Header />
      <Spacer />
      <Main>
        <Intro />
        <Resumes />
        <CallToAction />
      </Main>
    </DashboardWrapper>
    <Footer />
  </>
);

const DashboardWrapper = styled.header`
  margin: auto;
`;

const Spacer = styled.div`
  height: 1.2rem;
`;

const Main = styled.main`
  padding: 1.2rem 0;
  margin: auto;
  box-sizing: border-box;
`;

export default Dashboard;
