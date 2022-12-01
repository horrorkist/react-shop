import { useLocation } from "react-router-dom";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";

interface IPathList {
  category: string;
  title?: string;
}

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin: 20px 0;
  color: ${(props) => props.theme.text};

  span {
    line-height: 20px;
    margin-right: 20px;
    transform: translateY(2px);

    &:last-child {
      margin-left: 20px;
    }
  }
`;

export default function PathList({ category, title }: IPathList) {
  const { pathname } = useLocation();

  if (!title) {
    return (
      <Wrapper>
        <span>홈</span>
        <FontAwesomeIcon icon={faChevronRight} size="2xs" />
        <span>{category}</span>
      </Wrapper>
    );
  }

  return (
    <Wrapper>
      <span>{category}</span>
      <FontAwesomeIcon icon={faChevronRight} size="2xs" />
      <span>{title}</span>
    </Wrapper>
  );
}
