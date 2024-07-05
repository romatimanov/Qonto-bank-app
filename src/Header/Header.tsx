import logo from "../../public/image/logo.png";
import { Button } from "../UI/Button/Button";
import "./header.css";
export function Header() {
  return (
    <header className="header">
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
            <button className="header-btn">Sign in</button>
            <Button text="Open an account" style="white-btn" />
          </div>
        </div>
      </div>
    </header>
  );
}
