import ServiceCard from "../componets/ServiceCards";
import "./style.css";

export default function Service() {
  return (
    <div className="services-container">
      <h1 className="services-title">Serviços</h1>
      <div className="services-grid">
        <ServiceCard title="Abertura de Empresa">
          <p>Nós cuidamos de toda a burocracia para abrir seu CNPJ.</p>
        </ServiceCard>

        <ServiceCard title="Imposto de Renda">
          <p>Não caia na malha fina. Deixe com a gente.</p>
        </ServiceCard>

        <ServiceCard title="Consultoria">
          <ul>
            <li>Análise Financeira</li>
            <li>Redução de Custos</li>
          </ul>
        </ServiceCard>
      </div>
    </div>
  );
}
