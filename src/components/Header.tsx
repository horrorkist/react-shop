import { Link } from "react-router-dom";
import { useRecoilState, useRecoilValue } from "recoil";
import styled, { css } from "styled-components";
import { cartQuantityState, themeState, productsState } from "../../lib/atom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun } from "@fortawesome/free-regular-svg-icons";
import { faBagShopping } from "@fortawesome/free-solid-svg-icons";
import React, { useEffect } from "react";
import { IProduct } from "./ProductCard";

const Wrapper = styled.header`
  font-family: "Noto Sans KR", sans-serif;
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

  .search-container {
    position: relative;
  }

  .search {
    padding: 15px 10px;
    border: none;
    outline: none;
    border-radius: 10px;
    background-color: ${(props) => props.theme.baseLight};
    color: ${(props) => (props.theme.isDark ? "white" : props.theme.text)};
    transition: background-color 0.2s ease-in-out;
  }

  .search-list {
    display: none;
    flex-direction: column;
    align-items: center;
    position: absolute;
    width: 230px;
    max-height: 300px;
    overflow: scroll;
    background-color: ${(props) =>
      props.theme.isDark ? props.theme.baseLight : "white"};
    margin-top: 15px;
    animation: fadeIn 0.1s ease-in-out;
    transform-origin: top;
    -ms-overflow-style: none;
    &::-webkit-scrollbar {
      display: none !important;
    }

    li {
      width: 100%;
      padding: 0;
      margin: 0;
    }

    &.show {
      display: flex;
    }
  }

  @keyframes fadeIn {
    from {
      opacity: 0;
      scale: 0.95;
    }
    to {
      opacity: 1;
      scale: 1;
    }
  }

  .search-item {
    width: 100%;
    padding: 15px 15px;
    margin: 0;
    background-color: ${(props) => props.theme.baseLight};
    color: ${(props) => (props.theme.isDark ? "white" : props.theme.text)};
    transition: background-color 0.2s ease-in-out;

    span {
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 2;
      overflow: hidden;
      text-overflow: ellipsis;
    }

    &:hover {
      background-color: ${(props) => props.theme.baseDark};
    }
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
      width: max-content;
      min-width: 25px;
      padding: 5px 5px;
      color: white;
      background-color: red;
      border-radius: 10px;
      top: 0;
      right: 0;

      span {
        text-align: center;
      }
    }
  }
`;

export default function Header() {
  const [theme, setTheme] = useRecoilState(themeState);
  const cartQuantity = useRecoilValue(cartQuantityState);
  const products = useRecoilValue(productsState);
  const [searchItemList, setSearchItemList] = React.useState<IProduct[]>([]);
  const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const keyword = e.currentTarget.value;

    if (keyword) {
      const filteredProducts = products.filter((product) =>
        product.title.toLowerCase().includes(keyword.toLowerCase())
      );

      setSearchItemList(filteredProducts);

      document.querySelector(".search-list")?.classList.add("show");
    } else {
      setSearchItemList([]);
      document.querySelector(".search-list")?.classList.remove("show");
    }
  };
  const onFocus = () => {
    if (searchItemList.length > 0) {
      document.querySelector(".search-list")?.classList.add("show");
    }
  };
  const onBlur = () => {
    document.querySelector(".search-list")?.classList.remove("show");
  };
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
          <li className="search-container">
            <input
              onFocus={onFocus}
              onBlur={onBlur}
              onChange={onInputChange}
              className="search"
              type="text"
              placeholder="검색"
            />
            <ul className="search-list">
              {searchItemList.map((item) => (
                <li key={item.id}>
                  <Link className="search-item" to={`/product/${item.id}`}>
                    <span>{item.title}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </li>
          <li>
            <Link to="cart" className="cart">
              <FontAwesomeIcon icon={faBagShopping} size="lg" />
              <div className="badge">
                <span>{cartQuantity}</span>
              </div>
            </Link>
          </li>
        </ul>
      </div>
    </Wrapper>
  );
}
