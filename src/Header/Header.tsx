import logo from "../../public/image/logo.png";
import { Button } from "../UI/Button/Button";
import "./header.css";
import { Modal } from "../Modal/Modal";
import { Register } from "../Auth/Register";
import { Login } from "../Auth/Login";
import { useModal } from "../Hook/useModal";
import arrow from "/public/image/arrow.png";
import { useEffect, useRef } from "react";

export function Header() {
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

  const mobileMenuRef = useRef<HTMLDivElement>(null);

  const handleMobileMenu = () => {
    const menu = document.querySelector(".header-mobile");
    const text = document.querySelector(".header-mobile__list");
    menu?.classList.add("header-mobile__active");
    text?.classList.add("header-mobile__list-active");
  };

  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (
        mobileMenuRef.current &&
        !mobileMenuRef.current.contains(event.target as Node)
      ) {
        const menu = mobileMenuRef.current;
        const text = document.querySelector(".header-mobile__list");
        menu?.classList.remove("header-mobile__active");
        text?.classList.remove("header-mobile__list-active");
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);

  return (
    <header className="header">
      <div
        className="header-mobile"
        onClick={handleMobileMenu}
        ref={mobileMenuRef}
      >
        <img className="header-mobile__icon" src={arrow} alt="arrow" />
        <ul className="header-mobile__list">
          <li className="header-mobile__item">
            <a href="#" className="header-mobile__link">
              Solutions
            </a>
          </li>
          <li className="header-mobile__item">
            <a href="#" className="header-mobile__link">
              Product
            </a>
          </li>
          <li className="header-mobile__item">
            <a href="#" className="header-mobile__link">
              Resources
            </a>
          </li>
          <li className="header-mobile__item">
            <a href="#" className="header-mobile__link">
              Pricing
            </a>
          </li>
        </ul>
      </div>
      <div className="container">
        <div className="header-main">
          <div className="header-content">
            <a href="#">
              <img src={logo} alt="logo" />
            </a>
            <nav className="header-nav">
              <ul className="header-list">
                <li className="header-item">
                  <a href="#" className="header-link">
                    Solutions
                  </a>
                </li>
                <li className="header-item">
                  <a href="#" className="header-link">
                    Product
                  </a>
                </li>
                <li className="header-item">
                  <a href="#" className="header-link">
                    Resources
                  </a>
                </li>
                <li className="header-item">
                  <a href="#" className="header-link">
                    Pricing
                  </a>
                </li>
              </ul>
            </nav>
          </div>
          <div className="header-btn__group">
            <button className="header-btn" onClick={openLoginModal}>
              Sign in
            </button>
            <Button
              text="Open an account"
              style="white-btn"
              onClick={openRegisterModal}
            />
          </div>
        </div>
      </div>
      {isOpenRegister && (
        <Modal onClose={closeRegisterModal}>
          <Register />
        </Modal>
      )}
      {isOpenLogin && (
        <Modal onClose={closeLoginModal}>
          <Login />
        </Modal>
      )}
    </header>
  );
}
