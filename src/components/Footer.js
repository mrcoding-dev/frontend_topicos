import React from "react";
import Link from "next/link";
import Section from "components/Section";

function Footer(props) {
  return (
    <Section
      color={props.color}
      size={props.size}
      backgroundImage={props.backgroundImage}
      backgroundImageOpacity={props.backgroundImageOpacity}
      className="footer"
    >
      <div className="FooterComponent__container container">
        <div className="brand left">
          <Link href="/">
            <a>
              <img src={props.logo} alt="Logo" />
            </a>
          </Link>
        </div>
        <div className="links right">
          <Link href="/about">
            <a />
          </Link>
          <Link href="/faq">
            <a />
          </Link>
          <Link href="/contact">
            <a />
          </Link>
          <a
            target="_blank"
            href="https://medium.com"
            rel="noopener noreferrer"
          />
        </div>
        <div className="social right">
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="icon">
              <i className="fab fa-twitter" />
            </span>
          </a>
          <Link href="#">
            <a target="_blank" rel="noopener noreferrer">
              <span className="icon">
                <i className="fab fa-facebook-f" />
              </span>
            </a>
          </Link>
          <Link href="#">
            <a target="_blank" rel="noopener noreferrer">
              <span className="icon">
                <i className="fab fa-instagram" />
              </span>
            </a>
          </Link>
        </div>
        <div className="copyright left">
          {props.copyright}
          <Link href="#">
            <a />
          </Link>
          <Link href="#">
            <a />
          </Link>
        </div>
      </div>
    </Section>
  );
}

export default Footer;
