import { type ReactNode } from "react";
import "./style.css";

interface ServiceCardProps {
  title: string;
  children: ReactNode;
}

export default function ServiceCard({ title, children }: ServiceCardProps) {
  return (
    <div className="service-card">
      <h4 className="card-title">{title}</h4>
      <div className="card-content">{children}</div>
    </div>
  );
}
