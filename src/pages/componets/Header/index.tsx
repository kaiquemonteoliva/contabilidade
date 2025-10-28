import { NavLink } from "react-router-dom";
import Logo from "./../../../assets/Logo_edit.jpeg";

import "./style.css";

export default function Header() {
  return (
    <>
      <header className="main-header">
        <div className="logo">
          <img src={Logo} alt="" />
        </div>
        <div className="main-title">
          <h1>MN & Santos</h1>
        </div>
        <nav className="main-nav">
          <ul>
            <li>
              <NavLink to="/" className="nav-link">
                início
              </NavLink>
            </li>
            <li>
              <NavLink to="/Services" className="nav-link">
                serviços
              </NavLink>
            </li>
            <li>
              <NavLink to="/AboutUs" className="nav-link">
                sobre nós
              </NavLink>
            </li>
            <li>
              <NavLink to="/Contact" className="nav-link">
                contato
              </NavLink>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}
