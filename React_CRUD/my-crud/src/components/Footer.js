import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      style={{
        position: "fixed",
        bottom: "0",
        left: "0",
        width: "100%",
        backgroundColor: "#343a40",
        padding: "20px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <p style={{ margin: "0", marginRight: "10px", color: "white" }}>
        &#169; {currentYear} Created by Sarang
      </p>
      <div style={{ marginLeft: "20px" }}>
        <a
          href="https://github.com/example"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faGithub} style={{ marginRight: "10px" }} />
        </a>
        <a
          href="https://leetcode.com/example"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faLinkedin} />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
