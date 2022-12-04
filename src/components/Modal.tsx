import styled from "styled-components";
import Button from "./Button";

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 1000;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalBox = styled.div`
  width: 500px;
  background-color: ${(props) => props.theme.baseColor};
  color: ${(props) => props.theme.text};
  padding: 20px;
  border-radius: 15px;
  display: flex;
  flex-direction: column;

  h1 {
    font-size: 1.2rem;
    font-weight: 600;
    margin-bottom: 20px;
  }

  p {
    margin-bottom: 40px;
  }

  .buttons {
    display: flex;
    align-self: flex-end;

    button {
      margin-left: 10px;
    }
  }

  animation: fadeIn 0.2s ease-in-out;
  transform-origin: bottom;

  @keyframes fadeIn {
    from {
      opacity: 0;
      scale: 0.8;
    }
    to {
      opacity: 1;
      scale: 1;
    }
  }
`;

interface ModalProps {
  onConfirm: (e: React.MouseEvent<HTMLElement>) => void;
  onCancel: (e: React.MouseEvent<HTMLElement>) => void;
}

export default function Modal({ onConfirm, onCancel }: ModalProps) {
  return (
    <Overlay onClick={onCancel}>
      <ModalBox onClick={(e) => e.stopPropagation()}>
        <h1>정말로 구매하시겠습니까?</h1>
        <p>장바구니의 모든 상품들이 삭제됩니다.</p>
        <div className="buttons">
          <Button emphasize onClick={onConfirm}>
            네
          </Button>
          <Button onClick={onCancel}>아니오</Button>
        </div>
      </ModalBox>
    </Overlay>
  );
}
