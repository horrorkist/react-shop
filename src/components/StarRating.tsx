import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStarHalf } from "@fortawesome/free-solid-svg-icons";

interface RateProps {
  score: number;
}

const Wrapper = styled.div`
  display: flex;
  align-items: center;

  .star:nth-child(odd) {
    margin-right: -27px;
  }

  .star:nth-child(even) {
    transform: scaleX(-1);
  }
`;

export default function StarRating({ score }: RateProps) {
  return (
    <Wrapper>
      {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((ele) =>
        ele <= score ? (
          <FontAwesomeIcon
            key={ele}
            className="star"
            icon={faStarHalf}
            size="xl"
            color="#fbcc14"
          />
        ) : (
          <FontAwesomeIcon
            key={ele}
            className="star"
            icon={faStarHalf}
            size="xl"
            color="#544f3c"
          />
        )
      )}
    </Wrapper>
  );
}
