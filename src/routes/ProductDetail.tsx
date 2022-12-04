import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useNavigate, useParams } from "react-router-dom";
import { useRecoilValue, useSetRecoilState } from "recoil";
import styled from "styled-components";
import { cartState, getProductById } from "../../lib/atom";
import Button from "../components/Button";
import PathList from "../components/PathList";
import StarRating from "../components/StarRating";

const Main = styled.div`
  max-width: 1360px;
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const Product = styled.div`
  margin-top: 60px;
  display: flex;
`;

const ImgWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: white;
  padding: 20px;
  border-radius: 15px;
  height: 320px;
  min-width: 320px;
  width: max-content;

  img {
    height: 100%;
    width: 100%;
    object-fit: contain;
  }
`;

const ProductInfo = styled.div`
  padding: 0px 20px;
  flex: 1;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  color: ${(props) => props.theme.text};

  .title {
    display: flex;
    align-items: center;

    h1 {
      font-size: 1.5rem;
      line-height: 1.8rem;
      font-weight: 600;
    }

    .product-badge {
      background-color: ${(props) => props.theme.badgeGreen};
      padding: 3px 10px;
      color: white;
      margin-left: 20px;
      border-radius: 25% / 50%;
      display: flex;
      justify-content: center;
      align-items: center;

      span {
        font-weight: bold;
        display: inline-block;
      }
    }
  }
  p {
    font-size: 1rem;
    line-height: 1.2rem;
  }

  .meta {
    display: flex;
    align-items: center;
    margin: 10px 0;
    span {
      transform: translateY(3px);
      margin-left: 20px;
    }
  }

  .price {
    font-size: 2rem;
    font-weight: 600;
  }

  .cart-buttons {
    display: flex;

    button {
      margin-right: 10px;
    }
  }
`;

export default function ProductDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const product = useRecoilValue(getProductById(id || ""));
  const setCartList = useSetRecoilState(cartState);

  const onAddToCart = () => {
    if (!product) return;
    setCartList((prev) => {
      const index = prev.findIndex((item) => item.product.id === product.id);
      if (index !== -1) {
        return [
          ...prev.slice(0, index),
          { ...prev[index], quantity: prev[index].quantity + 1 },
          ...prev.slice(index + 1),
        ];
      }
      return [...prev, { product, quantity: 1 }];
    });
  };

  useEffect(() => {
    if (!product) {
      navigate("/");
    }
  });

  if (!product) {
    return null;
  }

  return (
    <Main>
      <PathList category={product.category} productName={product.title} />
      <Product>
        <ImgWrapper>
          <img src={product.image} alt="" />
        </ImgWrapper>
        <ProductInfo>
          <div className="title">
            <h1>{product?.title}</h1>
            <div className="product-badge">
              <span>New</span>
            </div>
          </div>
          <p>{product?.description}</p>
          <div className="meta">
            <StarRating score={Math.floor(product.rating.rate * 2)} />
            <span>
              {product.rating.rate} / {product.rating.count} 참여
            </span>
          </div>
          <div className="price">${product.price}</div>
          <div className="cart-buttons">
            <div onClick={onAddToCart}>
              <Button emphasize>장바구니에 담기</Button>
            </div>
            <Link to={"/cart"}>
              <Button>장바구니로 이동</Button>
            </Link>
          </div>
        </ProductInfo>
      </Product>
    </Main>
  );
}
