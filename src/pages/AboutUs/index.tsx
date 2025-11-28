import { useEffect, useState } from "react";
import "./style.css";
import ServiceCard from "../../pages/componets/ServiceCards";

export default function AboutUs() {
  const [aboutText, setAboutText] = useState("Carregando...");

  useEffect(() => {
    const fetchContent = async () => {
      try {
        const GOOGLE_SCRIPT_URL = import.meta.env.VITE_GOOGLE_SCRIPT_URL;
        const response = await fetch(GOOGLE_SCRIPT_URL);
        const data = await response.json();

        if (data.content && data.content.sobre_nos) {
          setAboutText(data.content.sobre_nos);
        }
      } catch (error) {
        console.error("Erro ao carregar conteúdo", error);
      }
    };

    fetchContent();
  }, []);

  return (
    <>
      <main>
        <section className="about-us">
          <h3 className="section-title">Sobre nós</h3>
          <div className="services-grid">
            <ServiceCard title="Quem somos">
              <p style={{ whiteSpace: "pre-line" }}>{aboutText}</p>
            </ServiceCard>
          </div>
        </section>
      </main>
    </>
  );
}
