import "./finance.css";
import { financeCardData } from "../data";
import { FinanceCard } from "../../UI/FinanceCard/FinanceCard";
import { Button } from "../../UI/Button/Button";
import { useModal } from "../../Hook/useModal";
import { Modal } from "../../Modal/Modal";
import { Register } from "../../Auth/Register";

export function Finance() {
  const {
    isOpen: isOpenRegister,
    openModal: openRegisterModal,
    closeModal: closeRegisterModal,
  } = useModal();
  return (
    <section className="finance">
      <div className="container main-container">
        <div className="finance-body">
          <h1 className="finance-title">All your finance modules in one app</h1>
          <div className="modules-content">
            <button className="finance-modules modules-active">
              Business Account & Cards
            </button>
            <div className="finance-modules__group">
              <button className="finance-modules">Invoice Management</button>
              <button className="finance-modules">
                Expense & Spend Management
              </button>
              <button className="finance-modules">
                Bookkeeping & Cash Flow
              </button>
            </div>
          </div>
          <div className="finance-card__group">
            {financeCardData.map((item, index) => (
              <FinanceCard
                key={index}
                title={item.title}
                text={item.text}
                icon={item.icon}
                subtitle={item.subtitle}
              />
            ))}
          </div>
          <Button
            text="Open an account"
            style="black-btn"
            onClick={openRegisterModal}
          />
        </div>
      </div>
      {isOpenRegister && (
        <Modal onClose={closeRegisterModal}>
          <Register />
        </Modal>
      )}
    </section>
  );
}
