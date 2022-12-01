import { Link } from "react-router-dom";
import { useRecoilState } from "recoil";
import styled, { css } from "styled-components";
import { themeState } from "../../lib/atom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun } from "@fortawesome/free-regular-svg-icons";
import { faBagShopping } from "@fortawesome/free-solid-svg-icons";

const Wrapper = styled.header`
  width: 100%;
  position: sticky;
  z-index: 999;
  top: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${(props) =>
    props.theme.isDark ? props.theme.baseDark : "white"};
  color: ${(props) => (props.theme.isDark ? "white" : props.theme.text)};
  font-weight: 700;
  transition: color 0.3s ease-in-out;
  ${(props) =>
    !props.theme.isDark &&
    css`
      box-shadow: 0 0 15px rgba(0, 0, 0, 0.1);
    `}

  .header-inner {
    max-width: 1360px;
    width: 100%;
    padding: 0 20px;
    margin: 10px auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .header-navList {
    display: flex;
    align-items: center;
    li {
      margin: 10px 0;
    }
  }

  .header-icons {
    display: flex;
    align-items: center;
    li {
      margin-left: 5px;
    }
  }

  a {
    display: flex;
    align-items: center;
    text-decoration: none;
    color: ${(props) => (props.theme.isDark ? "white" : props.theme.text)};
    padding: 10px 15px;
    transition: all 0.2s ease-in-out;
    border-radius: 5px;
  }

  a:hover:not(.home) {
    ${(props) =>
      props.theme.isDark
        ? css`
            background-color: rgba(100, 100, 100, 0.8);
          `
        : css`
            background-color: rgba(45, 45, 45, 0.2);
          `}
  }

  .home {
    padding: 0;
    margin-right: 15px;
  }

  .toggleTheme {
    background-color: transparent;
    border: none;
    cursor: pointer;
    color: ${(props) => (props.theme.isDark ? "white" : props.theme.text)};
    ${(props) =>
      props.theme.isDark
        ? css`
            transform: rotate(45deg);
          `
        : css`
            transform: rotate(-30deg);
          `}

    transition: all 0.3s ease-in-out;
  }

  .search {
    margin-left: 10px;
    padding: 15px 10px;
    border: none;
    outline: none;
    border-radius: 10px;
    background-color: ${(props) => props.theme.baseLight};
    color: ${(props) => (props.theme.isDark ? "white" : props.theme.text)};
    transition: background-color 0.2s ease-in-out;
  }

  .cart {
    padding: 15px 15px;
    position: relative;
    .badge {
      position: absolute;
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 12px;
      width: 20px;
      height: 20px;
      color: white;
      background-color: red;
      border-radius: 50%;
      top: 0;
      right: 0;

      span {
        transform: translateY(1px);
      }
    }
  }
`;

export default function Header() {
  const [theme, setTheme] = useRecoilState(themeState);
  const toggleTheme = () => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  };
  return (
    <Wrapper>
      <div className="header-inner">
        <nav className="header-nav">
          <ul className="header-navList">
            <li>
              <Link className="home" to={"/"}>
                <h1>React Shop</h1>
              </Link>
            </li>
            <li>
              <Link to={"fashion"}>패션</Link>
            </li>
            <li>
              <Link to={"accessory"}>액세서리</Link>
            </li>
            <li>
              <Link to={"digital"}>디지털</Link>
            </li>
          </ul>
        </nav>
        <ul className="header-icons">
          <li>
            <button className="toggleTheme" role="button" onClick={toggleTheme}>
              <FontAwesomeIcon
                icon={theme === "dark" ? faSun : faMoon}
                size="2x"
              />
            </button>
          </li>
          <li>
            <form method="POST">
              <input className="search" type="text" placeholder="검색" />
            </form>
          </li>
          <li>
            <Link to="cart" className="cart">
              <FontAwesomeIcon icon={faBagShopping} size="lg" />
              <div className="badge">
                <span>0</span>
              </div>
            </Link>
          </li>
        </ul>
      </div>
    </Wrapper>
  );
}
