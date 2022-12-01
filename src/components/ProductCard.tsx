import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

export interface IProduct {
  id: string;
  category: string;
  description: string;
  image: string;
  price: number;
  rating: {
    rate: number;
    count: number;
  };
  title: string;
}

interface IProductCard {
  product: IProduct;
}

const Wrapper = styled.div`
  max-width: 320px;
  display: flex;
  border-radius: 10px;
  overflow: hidden;

  a {
    display: flex;
    flex-direction: column;
    width: 100%;
  }

  img {
    transition: all 0.2s ease-in-out;
  }

  &:hover {
    img {
      transform: scale(1.1);
    }
  }

  .card-image {
    aspect-ratio: 1 / 1;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: white;

    img {
      width: 160px;
    }
  }

  .card-body {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: flex-start;
    padding: 30px;
    padding-right: 60px;
    background-color: ${(props) => props.theme.baseLight};
    color: ${(props) => props.theme.text};
    font-size: 1rem;
    font-weight: 700;
    flex-grow: 1;

    .title {
      margin-bottom: 20px;
    }

    .title,
    .price {
      width: 100%;
      display: -webkit-box;
      line-height: 25px;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      overflow: hidden;
      text-overflow: ellipsis;
    }
  }
`;

export default function ProductCard({ product }: IProductCard) {
  return (
    <Wrapper>
      <Link to={`/product/${product.id}`}>
        <div className="card-image">
          <img src={product.image} alt="" />
        </div>
        <div className="card-body">
          <span className="title">{product.title}</span>
          <span className="price">${product.price}</span>
        </div>
      </Link>
    </Wrapper>
  );
}
