import "./style.css";
import { Link } from "react-router-dom";

export default function HomePage() {
  return (
    <>
      <div className="home-page">
        {/*Seção Principal (Hero) */}
        <main>
          <section className="hero-section">
            <div className="hero-content">
              <h2 className="hero-title">
                Inteligência Financeira para o seu Negócio Decolar
              </h2>
              <p className="hero-subtitle">
                Deixe a burocracia conosco e foque no que realmente importa: o
                crescimento da sua empresa.
              </p>
              <Link to="/Contato" className="cta-button">
                Fale com um Especialista
              </Link>
            </div>
          </section>

          {/*Seção de Serviços */}
          <section className="services-section">
            <h3 className="section-title">Nossos Serviços</h3>
            <div className="services-grid">
              <div className="service-card">
                <h4>Planejamento Tributário</h4>
                <p>
                  Otimize sua carga tributária com estratégias legais e
                  eficientes.
                </p>
              </div>
              <div className="service-card">
                <h4>Abertura de Empresa</h4>
                <p>
                  Inicie seu negócio sem complicações. Cuidamos de todo o
                  processo para você.
                </p>
              </div>
              <div className="service-card">
                <h4>Contabilidade Consultiva</h4>
                <p>
                  Análises e relatórios que servem como ferramenta para sua
                  tomada de decisão.
                </p>
              </div>
              <div className="service-card">
                <h4>BPO Financeiro</h4>
                <p>
                  Terceirize a gestão financeira da sua empresa e ganhe mais
                  tempo e eficiência.
                </p>
              </div>
            </div>
          </section>
        </main>

        {/* Rodapé */}
        <footer className="main-footer">
          <p>&copy; {new Date().getFullYear()} Todos os direitos reservados.</p>
        </footer>
      </div>
    </>
  );
}
