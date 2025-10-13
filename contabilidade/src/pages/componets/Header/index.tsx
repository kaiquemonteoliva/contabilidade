import { Link } from "react-router-dom";
import Logo from "./../../../assets/logo_cont.png";

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
              <Link to="/" className="nav-link active">
                início
              </Link>
            </li>
            <li>
              <Link to="/servicos" className="nav-link">
                serviços
              </Link>
            </li>
            <li>
              <Link to="/sobre" className="nav-link">
                sobre nós
              </Link>
            </li>
            <li>
              <Link to="/Contato" className="nav-link">
                contato
              </Link>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}
