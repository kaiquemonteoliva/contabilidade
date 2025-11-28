import React, { useState, useEffect } from "react";
import "./style.css";

interface ServiceItem {
  titulo: string;
  descricao: string;
}

export default function Admin() {
  const [formData, setFormData] = useState({
    titulo: "",
    descricao: "",
    lista: "",
  });

  const [services, setServices] = useState<ServiceItem[]>([]);
  const [aboutTextAdmin, setAboutTextAdmin] = useState("");
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const GOOGLE_SCRIPT_URL = import.meta.env.VITE_GOOGLE_SCRIPT_URL;

  const fetchData = async () => {
    try {
      const response = await fetch(GOOGLE_SCRIPT_URL);
      const data = await response.json();

      if (data.services) setServices(data.services);
      if (data.content && data.content.sobre_nos)
        setAboutTextAdmin(data.content.sobre_nos);
    } catch (error) {
      console.error("Erro ao carregar dados", error);
    }
  };

  useEffect(() => {
    if (isAuthenticated) {
      fetchData();
    }
  }, [isAuthenticated]);

  const handleLogin = () => {
    const ps = import.meta.env.VITE_ADMIN_PS;
    if (password === ps) {
      setIsAuthenticated(true);
    } else {
      alert("Senha incorreta");
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const payload = { ...formData, action: "create_service" };

    await fetch(GOOGLE_SCRIPT_URL, {
      method: "POST",
      mode: "no-cors",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    alert("Serviço cadastrado!");
    setFormData({ titulo: "", descricao: "", lista: "" });
    setLoading(false);
    setTimeout(fetchData, 1000);
  };

  const handleDelete = async (tituloParaDeletar: string) => {
    if (
      !window.confirm(`Tem certeza que deseja deletar "${tituloParaDeletar}"?`)
    )
      return;

    setLoading(true);

    const payload = {
      action: "delete_service",
      titulo: tituloParaDeletar,
    };

    await fetch(GOOGLE_SCRIPT_URL, {
      method: "POST",
      mode: "no-cors",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    alert("Serviço deletado com sucesso!");
    setLoading(false);
    setTimeout(fetchData, 1000);
  };

  const handleSaveAbout = async () => {
    if (!window.confirm("Deseja atualizar o texto 'Sobre Nós'?")) return;

    setLoading(true);

    const payload = {
      action: "update_content",
      chave: "sobre_nos",
      texto: aboutTextAdmin,
    };

    await fetch(GOOGLE_SCRIPT_URL, {
      method: "POST",
      mode: "no-cors",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    alert("Texto atualizado com sucesso!");
    setLoading(false);
  };

  if (!isAuthenticated) {
    return (
      <div style={{ padding: "5rem", textAlign: "center", color: "white" }}>
        <h2>Área Restrita</h2>
        <input
          type="password"
          placeholder="Senha"
          onChange={(e) => setPassword(e.target.value)}
          style={{ padding: "10px", marginTop: "10px" }}
        />
        <button
          onClick={handleLogin}
          style={{ padding: "10px", marginLeft: "10px" }}
        >
          Entrar
        </button>
      </div>
    );
  }

  return (
    <div
      className="services-container"
      style={{
        paddingTop: "2rem",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <h2 className="section-title">Painel Administrativo</h2>

      <div
        style={{
          marginBottom: "4rem",
          width: "100%",
          maxWidth: "500px",
          borderTop: "1px solid #333",
          paddingTop: "2rem",
        }}
      >
        <h3 style={{ color: "gold", textAlign: "center" }}>
          Editar "Sobre Nós"
        </h3>
        <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
          <textarea
            rows={10}
            value={aboutTextAdmin}
            onChange={(e) => setAboutTextAdmin(e.target.value)}
            style={{ padding: "10px" }}
          />
          <button
            onClick={handleSaveAbout}
            disabled={loading}
            style={{
              padding: "10px",
              background: "#4CAF50",
              color: "white",
              cursor: "pointer",
              border: "none",
              fontWeight: "bold",
            }}
          >
            {loading ? "Salvando..." : "Atualizar Texto"}
          </button>
        </div>
      </div>

      <div
        style={{
          marginBottom: "4rem",
          width: "100%",
          maxWidth: "500px",
          borderTop: "1px solid #333",
          paddingTop: "2rem",
        }}
      >
        <h3 style={{ color: "gold", textAlign: "center" }}>
          Adicionar Novo Serviço
        </h3>
        <form
          onSubmit={handleSubmit}
          style={{ display: "flex", flexDirection: "column", gap: "1rem" }}
        >
          <input
            type="text"
            placeholder="Título do Serviço"
            value={formData.titulo}
            onChange={(e) =>
              setFormData({ ...formData, titulo: e.target.value })
            }
            required
            style={{ padding: "10px" }}
          />
          <textarea
            placeholder="Descrição"
            value={formData.descricao}
            onChange={(e) =>
              setFormData({ ...formData, descricao: e.target.value })
            }
            style={{ padding: "10px" }}
          />
          <textarea
            placeholder="Itens da lista (separe por ;)"
            value={formData.lista}
            onChange={(e) =>
              setFormData({ ...formData, lista: e.target.value })
            }
            style={{ padding: "10px" }}
          />
          <button
            type="submit"
            disabled={loading}
            style={{
              padding: "10px",
              background: "gold",
              cursor: "pointer",
              border: "none",
              fontWeight: "bold",
            }}
          >
            {loading ? "Processando..." : "Salvar Serviço"}
          </button>
        </form>
      </div>

      <div
        style={{
          width: "100%",
          maxWidth: "600px",
          borderTop: "1px solid #333",
          paddingTop: "2rem",
          paddingBottom: "4rem",
        }}
      >
        <h3
          style={{ color: "white", textAlign: "center", marginBottom: "1rem" }}
        >
          Gerenciar Serviços Existentes
        </h3>

        {services.length === 0 && (
          <p style={{ color: "#999", textAlign: "center" }}>
            Nenhum serviço encontrado.
          </p>
        )}

        <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
          {services.map((service, index) => (
            <div
              key={index}
              style={{
                background: "#222",
                padding: "15px",
                borderRadius: "5px",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                border: "1px solid #444",
              }}
            >
              <span style={{ color: "white", fontWeight: "bold" }}>
                {service.titulo}
              </span>

              <button
                onClick={() => handleDelete(service.titulo)}
                style={{
                  background: "#ff4444",
                  color: "white",
                  border: "none",
                  padding: "8px 15px",
                  borderRadius: "4px",
                  cursor: "pointer",
                }}
              >
                Deletar
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
