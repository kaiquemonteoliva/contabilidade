import ServiceCard from "../componets/ServiceCards";
import "./style.css";
// import { Link } from "react-router-dom";

export default function AboutUs() {
  return (
    <>
      {/*Seção de Serviços */}
      <main>
        <section className="about-us">
          <h3 className="section-title">Sobre nós</h3>
          <div className="services-grid">
            <ServiceCard title="Quem somos">
              <p>
                Contando com profissionais com mais de 30 anos de experiência em
                serviços contábeis e sólida vivência em instituições
                financeiras, a MN & Santos - Serviços Contábeis oferece um
                serviço diferenciado e de alta qualidade para o seu negócio.
                Nossa equipe é formada por profissionais especializados em
                diversas áreas, com uma abordagem focada no crescimento da sua
                empresa. Atuamos em todos os regimes tributários e portes de
                negócios, de MEI a grandes empresas, com soluções personalizadas
                e eficientes. Entendemos que uma contabilidade estratégica vai
                muito além do cumprimento de obrigações fiscais. Por isso,
                estamos sempre atualizados com as últimas mudanças na legislação
                para garantir que você tenha a melhor orientação para tomada de
                decisões financeiras. Com a MN & Santos, você tem acesso a um
                parceiro de negócios confiável, que oferece um serviço rápido,
                ágil e, acima de tudo, humano. Nossos serviços * Contabilidade
                gerencial: Análise de resultados, DRE, balanço patrimonial. *
                Fiscal e tributário: Apuração de impostos, escrituração fiscal e
                SPED. * Societário: Abertura, alteração e encerramento de
                empresas. * Consultoria financeira: Controle de contas a receber
                e a pagar. Nós cuidamos da contabilidade para você focar no que
                realmente importa: o sucesso do seu negócio. Entre em contato
                para saber como podemos te ajudar a alcançar seus objetivos.
              </p>
            </ServiceCard>
          </div>
        </section>
      </main>
    </>
  );
}
