import "./rating.css";
import star from "/public/image/mobile-brand/star.png";
import apple from "/public/image/mobile-brand/apple.png";
import google from "/public/image/mobile-brand/google.png";
import grenStar from "/public/image/mobile-brand/green-star.png";
export function Rating() {
  return (
    <div className="rating">
      <h2 className="rating-title">
        Loved & trusted. 450,000 times and counting.
      </h2>
      <div className="rating-group">
        <div className="rating-group__content">
          <div className="rating-count">
            <p className="rating-text">4.8</p>
            <img src={star} alt="star" />
          </div>
          <div className="rating-brand">
            <img src={apple} alt="apple" />
            <p className="rating-brand__text">on App Store</p>
          </div>
        </div>
        <div className="rating-group__content">
          <div className="rating-count">
            <p className="rating-text">4.8</p>
            <img src={star} alt="star" />
          </div>
          <div className="rating-brand">
            <img src={google} alt="google" />
            <p className="rating-brand__text">on Play Store</p>
          </div>
        </div>
        <div className="rating-group__content">
          <div className="rating-count">
            <p className="rating-text">4.8</p>
            <img src={star} alt="star" />
          </div>
          <div className="rating-brand">
            <img src={grenStar} alt="grenStar" />
            <p className="rating-brand__text">on Trustpilot</p>
          </div>
        </div>
      </div>
    </div>
  );
}
