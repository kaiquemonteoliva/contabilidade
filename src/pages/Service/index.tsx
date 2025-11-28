import { useEffect, useState } from "react";
import ServiceCard from "../componets/ServiceCards";
import "./style.css";

interface ServiceItem {
  titulo: string;
  descricao: string;
  lista: string;
}

export default function Service() {
  const [services, setServices] = useState<ServiceItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const GOOGLE_SCRIPT_URL = import.meta.env.VITE_GOOGLE_SCRIPT_URL;
        const response = await fetch(GOOGLE_SCRIPT_URL);
        const data = await response.json();
        setServices(data.services || []);
      } catch (error) {
        console.error("Erro ao buscar serviços", error);
      } finally {
        setLoading(false);
      }
    };

    fetchServices();
  }, []);

  return (
    <div className="services-container">
      <h1 className="section-title">Nossos Serviços</h1>

      {loading ? (
        <p>Carregando serviços...</p>
      ) : (
        <div className="cards-grid">
          {services.map((service, index) => (
            <ServiceCard key={index} title={service.titulo}>
              {service.descricao && <p>{service.descricao}</p>}

              {service.lista && (
                <ul>
                  {service.lista.split(";").map((item, i) => (
                    <li key={i}>{item.trim()}</li>
                  ))}
                </ul>
              )}
            </ServiceCard>
          ))}
        </div>
      )}
    </div>
  );
}
