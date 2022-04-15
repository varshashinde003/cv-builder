import React from "react";
import styled from "styled-components";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Content from "./screens/Content";
import Preview from "./components/Preview";
import FlexBox from "./components/styled/FlexBox";
import { secondaryLight } from "./utils/colors";

const routes = [
  {
    path: "/resume/content",
    exact: true,
    toolbar: () => <></>,
    main: () => <Content />,
    preview: () => <Preview />,
  },
];

const RootRouter = () => {
  return (
    <Container>
      <FlexBox>
        <SectionLeft>
          <Router>
            <Routes>
              {routes.map((route, index) => (
                <Route
                  key={index}
                  path={route.path}
                  exact={route.exact}
                  element={<route.toolbar />}
                />
              ))}
            </Routes>
          </Router>
        </SectionLeft>

        <SectionMain>
          <Router>
            <Routes>
              {routes.map((route, index) => (
                <Route
                  key={index}
                  exact
                  path={route.path}
                  element={<route.main />}
                />
              ))}
            </Routes>
          </Router>
        </SectionMain>

        <SectionRight>
          <Router>
            <Routes>
              {routes.map((route, index) => (
                <Route
                  key={index}
                  exact
                  path={route.path}
                  element={<route.preview />}
                />
              ))}
            </Routes>
          </Router>
        </SectionRight>
      </FlexBox>
    </Container>
  );
};

const Container = styled.div`
  background: ${secondaryLight};
  padding: 2rem;
`;

const SectionLeft = styled.div``;

const SectionMain = styled.div`
  flex: 1;
  max-height: 92vh;
  overflow: auto;
  ::-webkit-scrollbar {
    visibility: hidden;
  }
`;

const SectionRight = styled.div`
  flex: 1;
`;

export default RootRouter;
