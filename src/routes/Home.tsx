import { useEffect, useState } from "react";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import styled from "styled-components";
import { getProducts } from "../../lib/api";
import { productsFiltered, productsState } from "../../lib/atom";
import Carousel from "../components/Carousel";
import ProductCard, { IProduct } from "../components/ProductCard";
import ProductList from "../components/ProductList";

const Wrapper = styled.div`
  min-height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${(props) => props.theme.baseColor};
`;

const Main = styled.div`
  max-width: 1360px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export default function Home() {
  const [loading, setLoading] = useState(true);
  const [itemLimit, setItemLimit] = useState(4);
  const setProducts = useSetRecoilState(productsState);
  const [fashion, acessories, digital] = useRecoilValue(productsFiltered);
  useEffect(() => {
    if (fashion.length) {
      setLoading(false);
      return;
    }

    getProducts().then((res) => {
      setLoading(false);
      setProducts(res);
    });
  }, []);

  if (loading) return null;

  return (
    <Wrapper>
      <Carousel />
      <Main>
        <ProductList title="패션" products={fashion.slice(0, itemLimit)} />
        <ProductList
          title="액세서리"
          products={acessories.slice(0, itemLimit)}
        />
        <ProductList title="디지털" products={digital.slice(0, itemLimit)} />
      </Main>
    </Wrapper>
  );
}
