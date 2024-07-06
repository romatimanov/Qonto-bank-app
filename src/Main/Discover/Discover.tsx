import { Button } from "../../UI/Button/Button";
import "./discover.css";
import image from "/public/image/section-card.png";
import image1 from "/public/image/section-card1.png";
import image2 from "/public/image/section-card2.png";

export function Discover() {
  return (
    <section className="discover">
      <img className="discover-img discover-img__one" src={image} alt="card" />
      <img className="discover-img discover-img__two" src={image1} alt="card" />
      <img
        className="discover-img  discover-img__three"
        src={image2}
        alt="card"
      />
      <Button text="Discover our cards" style="opacity-btn" />
    </section>
  );
}
