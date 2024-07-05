import "./card.css";

type CardProps = {
  title: string;
  text: string;
  img: string;
  style: string;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
};

export function Card({
  title,
  text,
  img,
  style,
  onMouseEnter,
  onMouseLeave,
}: CardProps) {
  return (
    <div
      className={`card ${style}`}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <div className="card-header">
        <h2 className="card-title">{title}</h2>
      </div>
      <div className="card-content">
        <p className="card-text">{text}</p>
        <div className="card-image">
          <img src={img} alt="" />
        </div>
      </div>
    </div>
  );
}
