import { useState } from "react";
import { Button } from "../../UI/Button/Button";
import { Card } from "../../UI/Card/Card";
import "./account.css";
import img from "/public/image/Icon.png";
import cardImage1 from "/public/image/card/card-img1.png";
import cardImage2 from "/public/image/card/card-img2.png";
import cardImage3 from "/public/image/card/card-img3.png";
import cardImage4 from "/public/image/card/card-img4.png";

export function Account() {
  const [activeCard, setActiveCard] = useState<number>(0);

  const handleMouseEnter = (index: number) => {
    setActiveCard(index);
  };

  const handleMouseLeave = () => {
    setActiveCard(0);
  };

  const cardData = [
    {
      title: "The Business Account",
      text: "The account that’s powerful to the core. Day-to-day banking, from local IBANs to free Mastercards & instant payments, all included in your plan.",
      img: cardImage1,
    },
    {
      title: "Invoice Management",
      text: "Centralize invoices & receipts in one place, get paid faster & automate your outgoing payments.",
      img: cardImage2,
    },
    {
      title: "Expense & Spend Management",
      text: "Control team spending with budgets, automatic receipt collection & tailored access.",
      img: cardImage3,
    },
    {
      title: "Bookkeeping & Cash Flow",
      text: "Collaborate with your accountant, share tools & get a full, real-time cash flow overview.",
      img: cardImage4,
    },
  ];

  return (
    <section className="account">
      <img className="account-img" src={img} alt="img" />
      <div className="container main-container">
        <div className="account-main">
          <div className="account-content">
            <h1 className="account-title">The account that means business</h1>
            <p className="account-subtitle">
              Pay, get paid, invoice, bookkeep, manage expenses & oversee cash
              flow. All online in one smart app.
            </p>
            <Button text="Discover our offers" style="white-btn account-btn" />
            <p className="account-text">
              From €9/month excl. VAT. Try it free for 30 days with no
              obligations.
            </p>
          </div>
          <div className="account-card">
            {cardData.map((card, index) => (
              <Card
                key={index}
                title={card.title}
                text={card.text}
                img={card.img}
                style={activeCard === index ? "card-active" : ""}
                onMouseEnter={() => handleMouseEnter(index)}
                onMouseLeave={handleMouseLeave}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
