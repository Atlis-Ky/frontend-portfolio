import "../styles/Header.css";

function Header() {
  return (
    <header className="header text-center mb-4 mt-2">
      <h1 className="mb-2">
        <span style={{ color: "var(--main-accent)" }}>ATLIS-KY</span> PROJECTS
      </h1>
      <div className="tech-bar">
        <span className="tech-item">React</span>
        <span className="tech-separator">•</span>
        <span className="tech-item">Next.js</span>
        <span className="tech-separator">•</span>
        <span className="tech-item">JavaScript</span>
        <span className="tech-separator">•</span>
        <span className="tech-item">TypeScript</span>
        <span className="tech-separator">•</span>
        <span className="tech-item">CSS & Tailwind</span>
        <span className="tech-separator">•</span>
        <span className="tech-item">Bootstrap 5</span>
        <span className="tech-separator">•</span>
        <span className="tech-item">Vitest</span>
        <span className="tech-separator">•</span>
        <span className="tech-item">Node.js</span>
        <span className="tech-separator">•</span>
        <span className="tech-item">Vite</span>
        <span className="tech-separator">•</span>
        <span className="tech-item">API</span>
      </div>
    </header>
  );
}

export default Header;
