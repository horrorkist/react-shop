import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Button from "../components/Button";

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  color: ${(props) => (props.theme.isDark ? props.theme.text : "black")};

  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  h1 {
    font-size: 6rem;
    margin-bottom: 10px;
  }

  h2 {
    font-size: 2rem;
    margin-bottom: 40px;
  }
`;

export default function NotFound() {
  return (
    <Wrapper>
      <div>
        <h1>404</h1>
        <h2>페이지를 찾을 수 없습니다.</h2>
        <Link to="/">
          <Button emphasize>돌아가기</Button>
        </Link>
      </div>
    </Wrapper>
  );
}
