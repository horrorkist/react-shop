import { useEffect, useState } from "react";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import styled from "styled-components";
import { getProducts } from "../../lib/api";
import { productsFiltered, productsState } from "../../lib/atom";
import Carousel from "../components/Carousel";
import ProductCard, { IProduct } from "../components/ProductCard";
import ProductList from "../components/ProductList";

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
  const [fashion, accessories, digital] = useRecoilValue(productsFiltered);
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
    <>
      <Carousel />
      <Main>
        <ProductList title="패션" products={fashion.slice(0, itemLimit)} />
        <ProductList
          title="액세서리"
          products={accessories.slice(0, itemLimit)}
        />
        <ProductList title="디지털" products={digital.slice(0, itemLimit)} />
      </Main>
    </>
  );
}
