import { Carousel as ResponsiveCarousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import styled from "styled-components";

const CarouselItem = styled.div`
  height: 400px;
  position: relative;
  display: flex;
  align-items: center;
  color: white;

  div {
    position: absolute;
    top: 50%;
    left: 30%;
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
        <img src="../../public/img_shop_fashion.jpeg" alt="fashion" />
        <div>물빠진 청바지!</div>
      </CarouselItem>
      <CarouselItem>
        <img src="../../public/img_shop_digital.jpeg" alt="digital" />
        <div>물빠진 청바지!</div>
      </CarouselItem>
      <CarouselItem>
        <img src="../../public/img_shop_grocery.jpeg" alt="grocery" />
        <div>물빠진 청바지!</div>
      </CarouselItem>
    </ResponsiveCarousel>
  );
}
