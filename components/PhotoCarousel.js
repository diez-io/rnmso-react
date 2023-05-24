import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import Image from 'next/image';

export default function PhotoCarousel({ items }) {
  return (
    <Carousel
      showArrows={false}
      showIndicators={false}
      showStatus={false}
      infiniteLoop
      dynamicHeight={false}
      showThumbs
      renderThumbs={() =>
        items.map((image, index) => (
          <Image key={index} src={image} alt="" width={100} height={100} />
        ))
      }
      className="gallery"
    >
      {items.map((item, i) => (
        <img key={`image_${i}`} src={item} alt="" />
      ))}
    </Carousel>
  );
}
