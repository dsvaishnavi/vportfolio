
const Footer = () => {
  return (
    <footer id="contact" className="footer">
      <div className="footer-container">
        <div className="footer-top">
          <div className="footer-brand">
            <h3 className="footer-name">Vaishnavi Dhawade</h3>
            <p className="footer-role">Computer Engineer & Full Stack Developer</p>
          </div>
          <div className="footer-socials">
            <a href="https://github.com/dsvaishnavi" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <i className="fab fa-github"></i>
            </a>
            <a href="https://linkedin.com/in/vaishnavi-dhawade" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <i className="fab fa-linkedin"></i>
            </a>
            <a href="mailto:vaishnavidhawade1@gmail.com" aria-label="Email">
              <i className="fas fa-envelope"></i>
            </a>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Vaishnavi Dhawade. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
