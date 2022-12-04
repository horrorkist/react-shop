import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useRecoilState } from "recoil";
import styled from "styled-components";
import { cartState } from "../../lib/atom";
import Button from "../components/Button";
import PathList from "../components/PathList";

const Main = styled.div`
  max-width: 1360px;
  width: 100%;
  display: flex;
  flex-direction: column;
  color: ${(props) => props.theme.text};

  .cart-list {
    margin: 60px 0;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;

    .empty {
      h1 {
        font-size: 2rem;
        font-weight: 600;
        margin-bottom: 30px;
      }
    }
  }

  .purchase {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    font-size: 1.5rem;
    flex-shrink: 0;
    overflow: visible;

    button {
      margin-left: 20px;
    }
  }
`;

const CartList = styled.div``;

const CartItem = styled.div`
  display: flex;
  margin-bottom: 30px;

  .image-container {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 10px;
    background-color: white;
    min-width: 224px;
    width: 224px;
    height: 224px;
    border-radius: 10px;

    img {
      height: 100%;
      width: 100%;
      object-fit: contain;
    }
  }

  .info {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    transition: color 0.3s ease-in-out;
    padding: 30px;
    .title {
      transition: color 0.3s ease-in-out;
      text-decoration: none;
      color: ${(props) => props.theme.text};
      font-size: 1.5rem;
      font-weight: 600;

      &:hover {
        text-decoration: underline;
      }
    }
    .price {
      font-size: 1.5rem;
      font-weight: 600;
    }
  }
`;

const CartItemButton = styled.div`
  width: 150px;
  height: 50px;
  border-radius: 15px;
  overflow: hidden;
  display: flex;

  button {
    flex-grow: 1;
    padding: 0;
    background-color: ${(props) => props.theme.emphasize};
    color: white;
    border: none;
    cursor: pointer;

    transition: all 0.1s ease-in-out;

    &:hover {
      background-color: ${(props) => props.theme.emphasizeDark};
    }
  }

  .active {
    scale: 0.9;
    transition: none;
  }

  div {
    flex-grow: 1;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export default function Cart() {
  const [cartList, setCartList] = useRecoilState(cartState);
  const [totalPrice, setTotalPrice] = useState(0);

  const onMouseDown = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.currentTarget.classList.add("active");
  };

  const onMouseUp = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.currentTarget.classList.remove("active");
  };

  const onDecrease = (e: React.MouseEvent<HTMLButtonElement>) => {
    const item = e.currentTarget.closest(".cart-item");

    if (!(item instanceof HTMLElement)) return;

    const id = Number(item.dataset.id);
    if (id >= 0) {
      const index = cartList.findIndex((item) => item.product.id === id);
      if (index === -1) return;

      if (cartList[index].quantity > 1) {
        setCartList([
          ...cartList.slice(0, index),
          { ...cartList[index], quantity: cartList[index].quantity - 1 },
          ...cartList.slice(index + 1),
        ]);
      } else {
        setCartList([...cartList.filter((_, i) => i !== index)]);
      }
    }
  };

  const onIncrease = (e: React.MouseEvent<HTMLButtonElement>) => {
    const item = e.currentTarget.closest(".cart-item");

    if (!(item instanceof HTMLElement)) return;

    const id = Number(item.dataset.id);
    if (id >= 0) {
      const index = cartList.findIndex((item) => item.product.id === id);
      if (index !== -1) {
        setCartList([
          ...cartList.slice(0, index),
          { ...cartList[index], quantity: cartList[index].quantity + 1 },
          ...cartList.slice(index + 1),
        ]);
      }
    }
  };

  useEffect(() => {
    let sum = 0;
    cartList.forEach((item) => {
      sum += item.product.price * item.quantity;
    });
    setTotalPrice(sum);
  });

  return (
    <Main>
      <PathList category="장바구니" />
      <div className="cart-list">
        {cartList.length === 0 ? (
          <div className="empty">
            <h1>장바구니에 물품이 없습니다.</h1>
            <Link to="/">
              <Button emphasize>담으러 가기</Button>
            </Link>
          </div>
        ) : (
          <CartList>
            {cartList.map((item) => (
              <CartItem
                className="cart-item"
                key={item.product.id}
                data-id={item.product.id}
              >
                <Link
                  to={`/product/${item.product.id}`}
                  className="image-container"
                >
                  <img src={item.product.image} alt="" />
                </Link>
                <div className="info">
                  <Link to={`/product/${item.product.id}`}>
                    <h1 className="title">{item.product.title}</h1>
                  </Link>
                  <span className="price">
                    ${(item.product.price * item.quantity).toLocaleString()}
                  </span>
                  <CartItemButton>
                    <button
                      className="decrease"
                      role="button"
                      onClick={onDecrease}
                      onMouseDown={onMouseDown}
                      onMouseUp={onMouseUp}
                    >
                      -
                    </button>
                    <div className="quantity">
                      <span>{item.quantity}</span>
                    </div>
                    <button
                      className="increase"
                      role="button"
                      onClick={onIncrease}
                      onMouseDown={onMouseDown}
                      onMouseUp={onMouseUp}
                    >
                      +
                    </button>
                  </CartItemButton>
                </div>
              </CartItem>
            ))}
          </CartList>
        )}
        <div className="purchase">
          <span>총 : ${totalPrice.toLocaleString()}</span>
          <Button emphasize>구매하기</Button>
        </div>
      </div>
    </Main>
  );
}
