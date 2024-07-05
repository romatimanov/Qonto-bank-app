import "./creatorsCard.css";

type CreatorsCardProps = {
  title: string;
  text: string;
  img: string;
  arrow?: string;
  className?: string;
  color: string;
};

export function CreatorsCard({
  title,
  text,
  img,
  arrow,
  className,
  color,
}: CreatorsCardProps): JSX.Element {
  return (
    <div className={`creators-card ${className}`}>
      <div className="creators-card__image">
        <img className="creators-card__img" src={img} alt="photo" />
      </div>
      <div className="creators-card__body" style={{ backgroundColor: color }}>
        <div className="creators-title__group">
          <h3 className="creators-card__title">{title}</h3>
          {arrow && <img src={arrow} alt="arrow" />}
        </div>
        <p className="creators-card__text">{text}</p>
      </div>
    </div>
  );
}
