import styled from "styled-components";
import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "../../lib/Theme";
import { useRecoilValue } from "recoil";
import { themeState } from "../../lib/atom";
import Footer from "../components/Footer";

export default function Root() {
  const theme = useRecoilValue(themeState);
  return (
    <>
      <ThemeProvider theme={theme === "dark" ? darkTheme : lightTheme}>
        <Header />
        <Outlet />
        <Footer />
      </ThemeProvider>
    </>
  );
}
