import "./Footer.css";
import { Link } from "react-router-dom";

const Icon = ({ children }) => (
  <span className="mkf-icon" aria-hidden="true">
    {children}
  </span>
);

const Footer = () => {
  return (
    <footer className="mkf-footer">
      <div className="mkf-container">
        <div className="mkf-grid">
          <div className="mkf-col mkf-col--about">
            <h3 className="mkf-brand">Merry Kids Academy</h3>
            <p className="mkf-text">
              Empowering children with modern education and Indian heritage
              through safe, nurturing classrooms.
            </p>

            <div className="mkf-newsletter">
              <h4 className="mkf-heading">Newsletter</h4>
              <p className="mkf-text">
                Subscribe for updates on admissions and campus events.
              </p>
              <div className="mkf-form">
                <input
                  className="mkf-input"
                  type="email"
                  placeholder="your.email@example.com"
                />
                <button className="mkf-btn" type="button">
                  Subscribe
                </button>
              </div>

              <div className="mkf-social" aria-label="Social links">
                <a className="mkf-socialBtn" href="#" aria-label="Facebook">
                  <svg
                    viewBox="0 0 24 24"
                    width="18"
                    height="18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M14 8.5V7.2c0-.7.4-1.2 1.3-1.2H17V3h-2.1C12.6 3 11 4.5 11 6.8v1.7H9v3h2V21h3v-9.5h2.7l.3-3H14Z"
                      fill="currentColor"
                    />
                  </svg>
                </a>
                <a className="mkf-socialBtn" href="#" aria-label="Instagram">
                  <svg
                    viewBox="0 0 24 24"
                    width="18"
                    height="18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M7.5 2h9A5.5 5.5 0 0 1 22 7.5v9A5.5 5.5 0 0 1 16.5 22h-9A5.5 5.5 0 0 1 2 16.5v-9A5.5 5.5 0 0 1 7.5 2Zm0 2A3.5 3.5 0 0 0 4 7.5v9A3.5 3.5 0 0 0 7.5 20h9a3.5 3.5 0 0 0 3.5-3.5v-9A3.5 3.5 0 0 0 16.5 4h-9Z"
                      fill="currentColor"
                    />
                    <path
                      d="M12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10Zm0 2a3 3 0 1 0 0 6 3 3 0 0 0 0-6Z"
                      fill="currentColor"
                    />
                    <path
                      d="M17.5 6.8a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z"
                      fill="currentColor"
                    />
                  </svg>
                </a>
                <a className="mkf-socialBtn" href="#" aria-label="WhatsApp">
                  <svg
                    viewBox="0 0 24 24"
                    width="18"
                    height="18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12 2a9.8 9.8 0 0 0-8.4 14.9L3 22l5.2-1.3A9.8 9.8 0 1 0 12 2Zm0 2a7.8 7.8 0 0 1 0 15.6c-1.3 0-2.6-.3-3.7-.9l-.3-.1-3 .8.8-2.9-.2-.3A7.8 7.8 0 0 1 12 4Z"
                      fill="currentColor"
                    />
                    <path
                      d="M16.7 13.9c-.3-.2-1.7-.8-2-1-.3-.1-.5-.2-.7.2-.2.3-.8 1-.9 1.1-.2.2-.3.2-.6.1-1.7-.8-2.8-2.2-3.1-2.6-.3-.3 0-.5.2-.7l.4-.5c.1-.2.2-.3.3-.5.1-.2 0-.4 0-.5-.1-.2-.7-1.6-1-2.2-.3-.6-.6-.5-.7-.5h-.6c-.2 0-.5.1-.8.4-.3.3-1 1-1 2.4 0 1.4 1 2.7 1.2 2.9.1.2 2 3.1 4.9 4.3.7.3 1.2.5 1.6.6.7.2 1.3.2 1.8.1.6-.1 1.7-.7 2-1.4.2-.7.2-1.3.2-1.4 0-.2-.2-.3-.4-.4Z"
                      fill="currentColor"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          <div className="mkf-col">
            <h4 className="mkf-heading">Quick Links</h4>
            <ul className="mkf-links" aria-label="Quick links">
              <li>
                <Link className="mkf-link" to="/">
                  Home
                </Link>
              </li>
              <li>
                <Link className="mkf-link" to="/gallery">
                  Gallery
                </Link>
              </li>
            </ul>
          </div>

          <div className="mkf-col">
            <h4 className="mkf-heading">Classes / Services</h4>
            <ul className="mkf-links" aria-label="Classes and services">
              <li>
                <Link className="mkf-link" to="/classes">
                  Classes
                </Link>
              </li>
              <li>
                <Link className="mkf-link" to="/facilities">
                  Facilities
                </Link>
              </li>
            </ul>
          </div>

          <div className="mkf-col">
            <h4 className="mkf-heading">Contact</h4>
            <ul className="mkf-contact" aria-label="Contact information">
              <li className="mkf-contactRow">
                <Icon>
                  <svg
                    viewBox="0 0 24 24"
                    width="18"
                    height="18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M4 7.5A3.5 3.5 0 0 1 7.5 4h9A3.5 3.5 0 0 1 20 7.5v9a3.5 3.5 0 0 1-3.5 3.5h-9A3.5 3.5 0 0 1 4 16.5v-9Z"
                      stroke="currentColor"
                      strokeWidth="1.8"
                    />
                    <path
                      d="m6.5 7.8 5.1 3.8c.3.2.5.3.8.3s.5-.1.8-.3l5.1-3.8"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </Icon>
                <span className="mkf-text">Email: admissions@merrykids.in</span>
              </li>
              <li className="mkf-contactRow">
                <Icon>
                  <svg
                    viewBox="0 0 24 24"
                    width="18"
                    height="18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M6.6 3h2.2c.5 0 1 .3 1.1.8l.9 3c.1.4 0 .8-.3 1.1L9.2 9.2c.7 1.3 2 2.6 3.3 3.3l1.3-1.3c.3-.3.7-.4 1.1-.3l3 .9c.5.2.8.6.8 1.1v2.2c0 .6-.4 1.1-1 1.2-7.2 1.3-13-4.5-11.7-11.7.1-.6.6-1 1.2-1Z"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      strokeLinejoin="round"
                    />
                  </svg>
                </Icon>
                <span className="mkf-text">Phone: +91 98765 43210</span>
              </li>
              <li className="mkf-contactRow">
                <Icon>
                  <svg
                    viewBox="0 0 24 24"
                    width="18"
                    height="18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12 22s7-4.4 7-11a7 7 0 1 0-14 0c0 6.6 7 11 7 11Z"
                      stroke="currentColor"
                      strokeWidth="1.8"
                    />
                    <path
                      d="M12 13.2a2.2 2.2 0 1 0 0-4.4 2.2 2.2 0 0 0 0 4.4Z"
                      stroke="currentColor"
                      strokeWidth="1.8"
                    />
                  </svg>
                </Icon>
                <span className="mkf-text">
                  Address: 21 Education Lane, Delhi, India
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mkf-bottom">
          <p>
            © {new Date().getFullYear()} Merry Kids Academy. All rights
            reserved.
          </p>
          <p className="mkf-bottomSub">
            Designed for modern school operations, mobile-friendly, and secure
            for production.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
