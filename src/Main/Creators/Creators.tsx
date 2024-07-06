import { CreatorsCard } from "../../UI/CreatorsCard/CreatorsCard";
import { Rating } from "../Rating/Rating";
import "./creators.css";

import { Button } from "../../UI/Button/Button";
import { cardData } from "../data";

export function Creators() {
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
