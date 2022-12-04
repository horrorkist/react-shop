import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useRecoilValue } from "recoil";
import styled from "styled-components";
import { productsFilteredByCategory } from "../../lib/atom";
import PathList from "../components/PathList";
import ProductList from "../components/ProductList";

const Main = styled.div`
  max-width: 1360px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export function getCategory(pathname: string) {
  pathname = pathname.substring(1);
  if (pathname === "fashion") return "패션";
  if (pathname === "accessory") return "액세서리";
  if (pathname === "digital") return "디지털";

  return "";
}

export default function CategoryPage() {
  const { pathname } = useLocation();
  const products = useRecoilValue(
    productsFilteredByCategory(pathname.substring(1))
  );

  if (!products?.length) {
    throw new Error("404");
  }

  return (
    <Main>
      <PathList category={getCategory(pathname)} />
      <ProductList title={getCategory(pathname)} products={products} />
    </Main>
  );
}
