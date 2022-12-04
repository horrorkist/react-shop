import styled from "styled-components";
import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme, colors } from "../../lib/Theme";
import { useRecoilValue } from "recoil";
import { themeState } from "../../lib/atom";
import Footer from "../components/Footer";
import ScrollToTop from "../components/ScrollToTop";
import GlobalStyle from "../../lib/global-style";

const Wrapper = styled.div`
  font-family: "Noto Sans KR", sans-serif;
  position: relative;
  min-height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  background-color: ${(props) => props.theme.baseColor};
`;

export default function Root() {
  const theme = useRecoilValue(themeState);
  return (
    <>
      <ThemeProvider theme={theme === "dark" ? darkTheme : lightTheme}>
        <ThemeProvider theme={colors}>
          <ScrollToTop />
          <Header />
          <Wrapper>
            <Outlet />
          </Wrapper>
          <Footer />
        </ThemeProvider>
      </ThemeProvider>
    </>
  );
}
