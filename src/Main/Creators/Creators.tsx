import { CreatorsCard } from "../../UI/CreatorsCard/CreatorsCard";
import { Rating } from "../Rating/Rating";
import "./creators.css";
import cardImage1 from "/public/image/photo/photo1.png";
import cardImage2 from "/public/image/photo/photo2.png";
import cardImage3 from "/public/image/photo/photo3.png";
import cardImage4 from "/public/image/photo/photo4.png";
import cardImage5 from "/public/image/photo/photo5.png";
import arrow from "/public/image/arrow.png";
import { Button } from "../../UI/Button/Button";

export function Creators() {
  const cardData = [
    {
      title: "Company Creators",
      text: "Open an account and deposit your initial share capital. All at once. All online.",
      img: cardImage1,
      color: "#1D1D1B",
    },
    {
      title: "Self-employed",
      text: "For freelancers and sole proprietors. Because when you fly solo, efficiency matters.",
      img: cardImage2,
      color: "#EFE9FE",
      arrow: arrow,
    },
    {
      title: "Micro-enterprises",
      text: "With your books in good order, you can focus on growing your business.",
      img: cardImage3,
      color: "#DFF9F0",
      arrow: arrow,
    },
    {
      title: "SMEs",
      text: "Delegate finance tasks to your team while keeping full visibility and control.",
      img: cardImage4,
      color: "#FDFFD0",
      arrow: arrow,
    },
    {
      title: "Associations",
      text: "Manage donations, membership fees and expenses. All with a few taps of your finger.",
      img: cardImage5,
      color: "#FFEADD",
      arrow: arrow,
    },
  ];
  return (
    <section className="creators">
      <div className="container main-container">
        <Rating />
        <div className="creators-content">
          <h2 className="creators-title">
            Whatever your size, sector or stage of growth
          </h2>
          <div className="creators-card__content">
            {cardData.map((item, index) => (
              <CreatorsCard
                key={index}
                className={`creator-card ${
                  index === 0 ? "creator-card--large" : ""
                }`}
                title={item.title}
                text={item.text}
                img={item.img}
                color={item.color}
                arrow={item.arrow}
              />
            ))}
          </div>
          <div className="creators-btn">
            <Button text="Get Started" style="black-btn" />
          </div>
        </div>
      </div>
    </section>
  );
}
