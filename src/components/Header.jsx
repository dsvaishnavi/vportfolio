const Header = () => {
  return (
    <header className="custom-header">
      <div className="header-inner">
        {/* Navigation */}
        <nav className="header-nav">
          <a href="#home" className="nav-link" aria-label="Home">
            <i className="fas fa-home"></i>
          </a>
          <a href="#about" className="nav-link" aria-label="About">
            <i className="fas fa-user"></i>
          </a>
          <a href="#education" className="nav-link" aria-label="Education">
            <i className="fas fa-graduation-cap"></i>
          </a>
          <a href="#skills" className="nav-link" aria-label="Skills">
            <i className="fas fa-code"></i>
          </a>
          <a href="#projects" className="nav-link" aria-label="Projects">
            <i className="fas fa-project-diagram"></i>
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
