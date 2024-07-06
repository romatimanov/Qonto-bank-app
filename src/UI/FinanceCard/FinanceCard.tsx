import "./financeCard.css";

type FinanceCardProps = {
  title: string;
  text: string;
  icon: string;
  subtitle: string;
};

export const FinanceCard = ({
  title,
  text,
  icon,
  subtitle,
}: FinanceCardProps): JSX.Element => {
  return (
    <article className="finance-card">
      <div className="finance-card__header">
        <p className="finance-card__header-text">{title}</p>
      </div>
      <div className="finance-card__body">
        <img className="finance-card__image" src={icon} alt="icon" />
        <h3 className="finance-card__title">{text}</h3>
        <p className="finance-card__text">{subtitle}</p>
      </div>
    </article>
  );
};
