import { Login } from "../../Auth/Login";
import { Register } from "../../Auth/Register";
import { useModal } from "../../Hook/useModal";
import { Modal } from "../../Modal/Modal";
import { Button } from "../../UI/Button/Button";
import "./sign.css";

export function Sign() {
  const {
    isOpen: isOpenRegister,
    openModal: openRegisterModal,
    closeModal: closeRegisterModal,
  } = useModal();
  const {
    isOpen: isOpenLogin,
    openModal: openLoginModal,
    closeModal: closeLoginModal,
  } = useModal();
  return (
    <section className="sign">
      <div className="container main-container">
        <div className="sign-content">
          <h2 className="sign-title">Sign up in minutes. Join the movement.</h2>
          <p className="sign-text">
            Qonto’s goal is to protect what’s most precious to entrepreneurs:
            their time, energy and focus. We are creating the future of business
            banking and finance, and we’d love you to join us.
          </p>
          <div className="sign-btn__group">
            <Button
              text="Open an account"
              style="white-btn"
              onClick={openRegisterModal}
            />
            <Button text="Book a demo" style="opacity-btn" />
          </div>
        </div>
      </div>
      {isOpenRegister && (
        <Modal onClose={closeRegisterModal}>
          <Register
            closeRegisterModal={closeRegisterModal}
            openLoginModal={openLoginModal}
          />
        </Modal>
      )}
      {isOpenLogin && (
        <Modal onClose={closeLoginModal}>
          <Login
            openRegisterModal={openRegisterModal}
            closeLoginModal={closeLoginModal}
          />
        </Modal>
      )}
    </section>
  );
}
