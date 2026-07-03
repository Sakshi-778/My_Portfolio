import { FaLinkedin, FaGithub, FaTwitter, FaFacebook } from "react-icons/fa";
import "./Footer.css";

function Footer() {
  return (
    <footer className="container">
      <div className="footer-content">
        <p>&copy; 2026 Sakshi. All Rights are Reserved</p>
      </div>

      <div className="social-icons">
        <button>
          <FaLinkedin />
        </button>
        <button>
          <FaGithub />
        </button>
        <button>
          <FaTwitter />
        </button>
        <button>
          <FaFacebook />
        </button>
      </div>
    </footer>
  );
}

export default Footer;
