import "../styles/ProjectList.css";

function ProjectList() {
  return (
    <div className="project-list">
      {/* DEVELOPER RESOURCES Section */}
      <section className="project-section dev-resources">
        <h2 className="section-title">DEVELOPER RESOURCES</h2>
        <div className="button-grid">
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="project-button"
          >
            VSCODE SHORTCUTS
          </a>
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="project-button"
          >
            PALETTE THEME TOOL
          </a>
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="project-button"
          >
            CYBER.CSS
          </a>
        </div>
      </section>

      {/* PERSONAL PORTFOLIO Section */}
      <section className="project-section personal-portfolio">
        <h2 className="section-title">PERSONAL PORTFOLIO</h2>
        <div className="button-grid">
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="project-button"
          >
            ATLIS WEBSITE
          </a>
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="project-button"
          >
            STANDARD RESUME CV
          </a>
        </div>
      </section>

      {/* CODING MUSIC Section */}
      <section className="project-section coding-music">
        <h2 className="section-title">CODING MUSIC</h2>
        <div className="button-grid">
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="project-button"
          >
            THIS IS ATLIS (SPOTIFY)
          </a>
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="project-button"
          >
            THE VSCODE TEMPLE (SPOTIFY)
          </a>
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="project-button"
          >
            FANTASY PLAYLIST (YOUTUBE)
          </a>
        </div>
      </section>

      {/* MISC & WEBCLONES Section */}
      <section className="project-section misc-webclones">
        <h2 className="section-title">MISC & WEBCLONES</h2>
        <div className="button-grid">
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="project-button"
          >
            WORKOUT PLANNER
          </a>
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="project-button"
          >
            INSPECTED
          </a>
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="project-button"
          >
            ABLETON
          </a>
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="project-button"
          >
            AMAZON W/ BASKET
          </a>
        </div>
      </section>

      {/* CONTACT Section */}
      <section className="project-section contact">
        <h2 className="section-title">CONTACT</h2>
        <div className="button-grid">
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="project-button"
          >
            GITHUB
          </a>
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="project-button"
          >
            LINKEDIN
          </a>
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="project-button"
          >
            EMAIL
          </a>
        </div>
      </section>
    </div>
  );
}

export default ProjectList;
