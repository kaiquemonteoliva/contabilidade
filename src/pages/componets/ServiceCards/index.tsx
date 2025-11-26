import React, { type ReactNode } from "react";
import "./style.css";

// Definimos o que o componente aceita receber
interface ServiceCardProps {
  title: string;
  children: ReactNode; // 'children' é o termo padrão do React para "o conteúdo de dentro"
}

export default function ServiceCard({ title, children }: ServiceCardProps) {
  return (
    <div className="service-card">
      <h4 className="card-title">{title}</h4>
      <div className="card-content">{children}</div>
    </div>
  );
}
