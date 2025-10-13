import React, { useState } from "react";
import "./style.css";
// import { Link } from "react-router-dom";

interface FormData {
  nome: string;
  email: string;
  telefone: string;
  mensagem: string;
}

interface FormErrors {
  nome?: boolean;
  email?: boolean;
  telefone?: boolean;
  mensagem?: boolean;
}

export default function Contato() {
  const [formData, setFormData] = useState<FormData>({
    nome: "",
    email: "",
    telefone: "",
    mensagem: "",
  });

  const [status, setStatus] = useState<
    "idle" | "sending" | "success" | "error"
  >("idle");
  const [feedbackMessage, setFeedbackMessage] = useState("");

  const [formErrors, setFormErrors] = useState<FormErrors>({});

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));

    if (formErrors[name as keyof FormErrors]) {
      setFormErrors((prevErrors) => ({
        ...prevErrors,
        [name]: false,
      }));
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("sending");
    setFeedbackMessage("");
    setFormErrors({});

    let hasError = false;
    const newErrors: FormErrors = {};

    if (!formData.nome.trim()) {
      newErrors.nome = true;
      hasError = true;
    }
    if (!formData.email.trim()) {
      newErrors.email = true;
      hasError = true;
    }

    if (formData.email.trim() && !/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = true;
      hasError = true;
      setFeedbackMessage("Por favor, insira um e-mail válido.");
    }
    if (!formData.telefone.trim()) {
      newErrors.telefone = true;
      hasError = true;
    }
    if (!formData.mensagem.trim()) {
      newErrors.mensagem = true;
      hasError = true;
    }

    if (hasError) {
      setFormErrors(newErrors);
      setStatus("error");

      if (!feedbackMessage)
        setFeedbackMessage(
          "Por favor, preencha os campos obrigatórios destacados."
        );
      return;
    }

    const GOOGLE_SCRIPT_URL = import.meta.env.VITE_GOOGLE_SCRIPT_URL;

    try {
      await fetch(GOOGLE_SCRIPT_URL, {
        method: "POST",
        mode: "no-cors",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      setStatus("success");
      setFeedbackMessage(
        "Mensagem enviada com sucesso! Entraremos em contato em breve."
      );
      setFormData({ nome: "", email: "", telefone: "", mensagem: "" });
    } catch (error) {
      setStatus("error");
      setFeedbackMessage(
        "Houve um problema ao enviar sua mensagem. Tente novamente mais tarde."
      );
    }
  };

  return (
    <div className="form-page-container">
      <div className="form-wrapper">
        <h2 className="form-title">Entre em Contato</h2>
        <p className="form-subtitle">
          Preencha o formulário abaixo e nossa equipe responderá o mais rápido
          possível.
        </p>

        <form onSubmit={handleSubmit} noValidate>
          <div className="form-group">
            <label htmlFor="nome">Nome Completo</label>
            <input
              type="text"
              id="nome"
              name="nome"
              value={formData.nome}
              onChange={handleChange}
              required
              className={formErrors.nome ? "input-error" : ""}
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">E-mail</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className={formErrors.email ? "input-error" : ""}
            />
          </div>
          <div className="form-group">
            <label htmlFor="telefone">Telefone</label>
            <input
              type="tel"
              id="telefone"
              name="telefone"
              value={formData.telefone}
              onChange={handleChange}
              required
              className={formErrors.telefone ? "input-error" : ""}
            />
          </div>
          <div className="form-group">
            <label htmlFor="mensagem">Sua Mensagem</label>
            <textarea
              id="mensagem"
              name="mensagem"
              rows={5}
              value={formData.mensagem}
              onChange={handleChange}
              required
              className={formErrors.mensagem ? "input-error" : ""}
            ></textarea>
          </div>

          <button
            type="submit"
            className="submit-button"
            disabled={status === "sending"}
          >
            {status === "sending" ? "Enviando..." : "Enviar Mensagem"}
          </button>
        </form>

        {status === "success" && (
          <p className="feedback-message success">{feedbackMessage}</p>
        )}
        {status === "error" && (
          <p className="feedback-message error">{feedbackMessage}</p>
        )}
      </div>
    </div>
  );
}
