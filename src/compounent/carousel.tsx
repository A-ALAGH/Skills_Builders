import Slider from 'react-slick';
import image1 from '../assets/unseen-studio-s9CC2SKySJM-unsplash.jpg'
import image2 from '../assets/unseen-studio-s9CC2SKySJM-unsplash.jpg'
import image3 from '../assets/vasily-koloda-8CqDvPuo_kI-unsplash.jpg'

function Carousel() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div>
      <h2> Single Item</h2>
      <Slider {...settings}>
        <div>
          <img src={image1} alt="placeholder" />
        </div>
        <div>
          <img src={image2} alt="placeholder" />
        </div>
        <div>
          <img src={image3} alt="placeholder" />
        </div>
      </Slider>
    </div>
  );
}

export default Carousel;