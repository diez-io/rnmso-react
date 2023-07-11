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
        items.map((item, index) => (
          <Image key={`image_${item.id}`} src={`https://rnmso.ru${item.image}`} alt="" width={100} height={100} />
        ))
      }
      className="gallery"
    >
      {items.map((item) => (
        <Image key={`image_${item.id}`} src={`https://rnmso.ru${item.image}`} alt="" />
      ))}
    </Carousel>
  );
}
