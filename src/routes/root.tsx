import styled from "styled-components";
import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "../../lib/Theme";
import { useRecoilValue } from "recoil";
import { themeState } from "../../lib/atom";
import Footer from "../components/Footer";

const Wrapper = styled.div`
  min-height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${(props) => props.theme.baseColor};
`;

export default function Root() {
  const theme = useRecoilValue(themeState);
  return (
    <>
      <ThemeProvider theme={theme === "dark" ? darkTheme : lightTheme}>
        <Header />
        <Wrapper>
          <Outlet />
        </Wrapper>
        <Footer />
      </ThemeProvider>
    </>
  );
}
