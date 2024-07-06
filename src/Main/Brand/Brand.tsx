import "./brand.css";
import Slider from "react-slick";
import brand1 from "/public/image/brand/brand1.png";
import brand2 from "/public/image/brand/brand2.png";
import brand3 from "/public/image/brand/brand3.png";
import brand4 from "/public/image/brand/brand4.png";
import brand5 from "/public/image/brand/brand5.png";
import cardImage1 from "/public/image/photo6.png";
import cardImage2 from "/public/image/photo7.png";
import arrow from "/public/image/arrow.png";
import photoIcon1 from "/public/image/photo-icon.png";
import photoIcon2 from "/public/image/photo-icon1.png";

export function Brand() {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    adaptiveHeight: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 400,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
    ],
  };

  return (
    <section className="brand">
      <div className="container main-container">
        <div className="brand-body">
          <h2 className="brand-title">
            Loved & trusted. 450,000 times and counting
          </h2>
          <Slider {...settings} className="brand-slider">
            <div>
              <img src={brand1} alt="brand" />
            </div>
            <div>
              <img src={brand2} alt="brand" />
            </div>
            <div>
              <img src={brand3} alt="brand" />
            </div>
            <div>
              <img src={brand4} alt="brand" />
            </div>
            <div>
              <img src={brand5} alt="brand" />
            </div>
          </Slider>
          <div className="brand-card__content">
            <div className="brand-card">
              <div className="brand-card__image">
                <img className="brand-card__img" src={cardImage1} alt="brand" />
                <img className="brand-card__icon" src={photoIcon1} alt="icon" />
              </div>
              <div className="brand-card__body">
                <div className="brand-card__main">
                  <h3 className="brand-card__title">
                    Your questions answered within minutes.
                  </h3>
                  <p className="brand-card__text">
                    When it comes to customer service, the reviews and ratings
                    of our 450,000+ clients do the talking for us. We answer our
                    customers in 5 languages, 7 days a week.
                  </p>
                </div>
                <a href="#" className="brand-card__link">
                  Learn more <img src={arrow} alt="arrow" />
                </a>
              </div>
            </div>
            <div className="brand-card">
              <div className="brand-card__image">
                <img className="brand-card__img" src={cardImage2} alt="brand" />
                <img className="brand-card__icon" src={photoIcon2} alt="icon" />
              </div>
              <div className="brand-card__body">
                <div className="brand-card__main">
                  <h3 className="brand-card__title">
                    Your account is secure and safe.
                  </h3>
                  <p className="brand-card__text">
                    Qonto is a licensed Payment Institution so your funds are
                    fully safeguarded by law. Your account and operations are
                    protected by 3D-Secure and Strong Customer Authentication
                    technologies.
                  </p>
                </div>
                <a href="#" className="brand-card__link">
                  Learn more <img src={arrow} alt="arrow" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
