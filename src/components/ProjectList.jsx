import "../styles/ProjectList.css";

function ProjectList() {
  return (
    <div className="project-list">
      {/* PERSONAL PORTFOLIO Section */}
      <section className="project-section personal-portfolio">
        <h2 className="section-title">PERSONAL PORTFOLIO & Resume</h2>
        <div className="button-grid">
          <a
            href="https://atlis-portfolio.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="project-button"
          >
            ATLIS WEBSITE
          </a>
          <a
            href="https://standardresume.co/r/deuFz-PeFdit0VJZ3rQ1Q"
            target="_blank"
            rel="noopener noreferrer"
            className="project-button"
          >
            Current CV / Resume
          </a>
        </div>
      </section>

      {/* DEVELOPER RESOURCES Section */}
      <section className="project-section dev-resources">
        <h2 className="section-title">DEVELOPER RESOURCES</h2>
        <div className="button-grid">
          <a
            href="https://vscode-shortcuts-cheatsheet.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="project-button"
          >
            VSCODE SHORTCUTS CHEATSHEET
          </a>
          <a
            href="https://colour-palette-tool.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="project-button"
          >
            Curated Web Themes // Palette tool
          </a>
          <a
            href="https://cyber-css-v1.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="project-button"
          >
            CYBER.CSS
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
            Atlis
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

      {/* MISCELLANEOUS & WEBCLONES Section */}
      <section className="project-section misc-webclones">
        <h2 className="section-title">MISCELLANEOUS & WEBCLONES</h2>
        <div className="button-grid">
          <a
            href="https://gym-app-react-atlisky.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="project-button"
          >
            WORKOUT PLANNER
          </a>
          <a
            href="https://inspected-clone-2.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="project-button"
          >
            INSPECTED
          </a>
          <a
            href="https://ableton-react-clone.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="project-button"
          >
            ABLETON
          </a>
          <a
            href="https://amazon-javascript-multipage.netlify.app/"
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
            href="https://github.com/Atlis-Ky"
            target="_blank"
            rel="noopener noreferrer"
            className="project-button"
          >
            GITHUB
          </a>
          <a
            href="https://www.linkedin.com/in/kyle-smith-2905282b6/"
            target="_blank"
            rel="noopener noreferrer"
            className="project-button"
          >
            LINKEDIN
          </a>
          <a href="mailto:kylesmith97@outlook.com" className="project-button">
            EMAIL
          </a>
        </div>
      </section>
    </div>
  );
}

export default ProjectList;
