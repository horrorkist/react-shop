import { useEffect, useState } from "react";
import styled from "styled-components";
import { getProducts } from "../../lib/api";
import Carousel from "../components/Carousel";

const Wrapper = styled.div`
  min-height: 100vh;
`;

export default function Home() {
  const [loading, setLoading] = useState<Boolean>(true);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts().then((res) => {
      console.log(res);
      setProducts(res.data);
    });
  }, []);

  return (
    <Wrapper>
      <Carousel />
    </Wrapper>
  );
}
