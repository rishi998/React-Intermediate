import "./App.css";
// import { FaLinkedin, FaGithub } from "react-icons/fa";
export default function App() {
  return (
    <>
      <Navbar />
      <Body />
    </>
  );
}

function Navbar() {
  return (
    <div className="navbar">
      <p id="name">Rishi </p>
      <ul className="image-list">
        <li className="icon">
          <a href="#">About</a>
        </li>
        <li className="icon">
          <a href="">Experience</a>
        </li>
        <li className="icon">
          <a href="#">Projects</a>
        </li>
        <li className="icon">
          <a href="#">Contacts</a>
        </li>
      </ul>
      {/* <div className="social-handles">
        <ul className="image-list">
          <li>
            <img src="/twitter.png" alt="twitter" className="icon" />
          </li>
          <li>
            <img src="/github-sign.png" alt="github" className="icon" />
          </li>
          <li>
            <img src="/linkedin-logo.png" alt="linkedin" className="icon" />
          </li>
          <li>
            <img
              src="/programming-code-signs.png"
              alt="leetcode"
              className="icon"
            />
          </li>
          <li>
            <img src="/instagram.png" alt="instagram" className="icon" />
          </li>
        </ul>
      </div> */}
    </div>
  );
}
function Body() {
  return (
    <>
      <div className="body">
        <span className="circular-image body-part">
          <img src="/imagess.jpg" alt="myself" />
        </span>
        <span>
          <div className="body-text body-part">
            <h2>Hello, I'm</h2>
            <h1>Rishi</h1>
            <h3>Frontend Developer</h3>
            <div className="buttons">
              <a
                href="https://drive.google.com/file/d/1NMQ9isZ2CDlVJKpaXGONavC7o_ruFwIu/view"
                className="btn"
              >
                Download CV
              </a>
              <a href="#" className="btn">
                Contact Info
              </a>
            </div>
            <div className="social-icons">
              <a
                href="https://www.linkedin.com/in/rishi-mehto-ab9003244/"
                className="social-icon"
              >
                <img
                  src="/linkedin-logo.png"
                  alt="linkedin"
                  className="social"
                />
              </a>
              <a href="https://github.com/rishi998" className="social-icon">
                <img src="/github-sign.png" alt="github" className="social" />
              </a>
            </div>
          </div>
        </span>
      </div>
    </>
  );
}
