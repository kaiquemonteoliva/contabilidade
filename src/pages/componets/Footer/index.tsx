import "./style.css";

export default function Footer() {
  return (
    <>
      <footer className="main-footer">
        <p>&copy; {new Date().getFullYear()} Todos os direitos reservados.</p>
      </footer>
    </>
  );
}
