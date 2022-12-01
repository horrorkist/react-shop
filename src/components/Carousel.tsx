import { Carousel as ResponsiveCarousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const CarouselItem = styled.div`
  height: 700px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;

  img {
    height: 100%;
    object-fit: cover;
  }
`;

const BannerText = styled.div`
  position: absolute;
  max-width: 1360px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 20px;

  .banner-text {
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    h2 {
      font-size: 2.5rem;
      font-weight: 700;
      margin-bottom: 10px;
    }
  }
`;

const BannerButton = styled.button`
  background-color: ${(props) =>
    props.theme.isDark ? props.theme.baseColor : props.theme.baseDark};
  color: ${(props) => (props.theme.isDark ? props.theme.text : "white")};
  border: none;
  padding: 15px 15px;
  border-radius: 5px;
  cursor: pointer;
  margin-top: 20px;
  font-size: 1rem;
  font-weight: 700;
  transition: all 0.3s ease-in-out;
  display: flex;
  justify-content: center;
  align-items: center;

  span {
    margin-right: 10px;
  }

  &:hover {
    background-color: black;
  }
`;

export default function Carousel() {
  return (
    <ResponsiveCarousel
      autoPlay
      infiniteLoop
      interval={3000}
      ariaLabel="Image Slider"
      showThumbs={false}
      showStatus={false}
    >
      <CarouselItem>
        <img src="/img_shop_fashion.jpeg" alt="fashion" />
        <BannerText>
          <div className="banner-text">
            <h2>물빠진 청바지!</h2>
            <h4>이제 막 도착한 패션 청바지를 구경해 보세요.</h4>
          </div>
          <Link to="fashion">
            <BannerButton>
              <span>바로가기</span>
              <FontAwesomeIcon icon={faArrowRight} />
            </BannerButton>
          </Link>
        </BannerText>
      </CarouselItem>
      <CarouselItem>
        <img src="/img_shop_digital.jpeg" alt="digital" />
        <BannerText>
          <div className="banner-text">
            <h2>신속한 업무처리!</h2>
            <h4>다양한 디지털 상품을 둘러보세요.</h4>
          </div>
          <Link to="digital">
            <BannerButton>
              <span>바로가기</span>
              <FontAwesomeIcon icon={faArrowRight} />
            </BannerButton>
          </Link>
        </BannerText>
      </CarouselItem>
      <CarouselItem>
        <img src="/img_shop_grocery.jpeg" alt="grocery" />
        <BannerText>
          <div className="banner-text">
            <h2>신선한 식품!</h2>
            <h4>농장 직배송으로 더욱 신선한 식료품을 만나보세요.</h4>
          </div>
          <Link to="grocery">
            <BannerButton>
              <span>바로가기</span>
              <FontAwesomeIcon icon={faArrowRight} />
            </BannerButton>
          </Link>
        </BannerText>
      </CarouselItem>
    </ResponsiveCarousel>
  );
}
