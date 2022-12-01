import styled from "styled-components";
import ProductCard, { IProduct } from "./ProductCard";

interface IProductList {
  title: string;
  products: IProduct[];
}

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 50px 0;

  h2 {
    font-size: 2.5rem;
    font-weight: 700;
    color: ${(props) => props.theme.text};
    margin-bottom: 50px;
  }

  .products-grid {
    width: 100%;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-auto-rows: 1fr;
    grid-gap: 25px;
  }
`;

export default function ProductList({ title, products }: IProductList) {
  return (
    <Wrapper>
      <h2>{title}</h2>
      <div className="products-grid">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </Wrapper>
  );
}
