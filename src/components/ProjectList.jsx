import "../styles/ProjectList.css";

function ProjectList() {
  return (
    <div className="project-list">
      {/* PERSONAL PORTFOLIO Section */}
      <section className="project-section personal-portfolio">
        <h2 className="section-title">PERSONAL PORTFOLIO & Resume</h2>
        <h4 className="section-subtitle">
          For a more detailed look at what I do, my skills, and the technologies
          I use, check my CV or my Dual development/production site
        </h4>
        <div className="button-grid">
          <a
            href="https://standardresume.co/r/deuFz-PeFdit0VJZ3rQ1Q"
            target="_blank"
            rel="noopener noreferrer"
            className="project-button"
          >
            Current CV / Resume
          </a>
          <a
            href="https://atlis-portfolio.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="project-button"
          >
            ATLIS WEBSITE
          </a>
        </div>
      </section>

      {/* DEVELOPER RESOURCES Section */}
      <section className="project-section dev-resources">
        <h2 className="section-title">DEVELOPER RESOURCES</h2>
        <h4 className="section-subtitle">
          Collection of simple but super useful tools and resources created for
          frontend developers
        </h4>
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

      {/* MISCELLANEOUS & WEBCLONES Section */}
      <section className="project-section misc-webclones">
        <h2 className="section-title">MISCELLANEOUS & WEBCLONES</h2>
        <h4 className="section-subtitle">
          Some extra projects I worked on to level up my skillset and practise
          with common web development tools
        </h4>
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
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="project-button"
          >
            TODO APP W/ Authentication (FULLSTACK)
          </a>
          <a
            href="https://react-pokedex-atlisky.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="project-button"
          >
            POKEMON API DEX
          </a>
        </div>
      </section>

      {/* CODING MUSIC Section */}
      <section className="project-section coding-music">
        <h2 className="section-title">CODING MUSIC</h2>
        <h4 className="section-subtitle">
          Ambient & Lo-Fi, ideal for working. Below is music I produced for this
          purpose over the years, and some curated playlists
        </h4>
        <div className="button-grid">
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="project-button"
          >
            Atlis (My Discography)
          </a>
          <a
            href="https://open.spotify.com/playlist/2HOAMKK6EifQ86uAL1SD9p?si=d55458e826db4ee8"
            target="_blank"
            rel="noopener noreferrer"
            className="project-button"
          >
            THE VSCODE TEMPLE (SPOTIFY)
          </a>
          <a
            href="https://youtube.com/playlist?list=PLjPEzfN0Dw2hD3zl9m1URBkqu1QH4CW8G&si=u8MuiogdMXD__pKF"
            target="_blank"
            rel="noopener noreferrer"
            className="project-button"
          >
            FANTASY PLAYLIST (YOUTUBE)
          </a>
        </div>
      </section>

      {/* CONTACT Section */}
      <section className="project-section contact">
        <h2 className="section-title">CONTACT</h2>
        <h4 className="section-subtitle">
          Find my code on Github, or reach out via LinkedIn / Email if you'd
          like
        </h4>
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
