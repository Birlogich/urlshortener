import { Link } from "react-router-dom";
import facebook from "../../../images/icon-facebook.svg?react";
import twitter from "../../../images/icon-twitter.svg?react";
import pinterest from "../../../images/icon-pinterest.svg?react";
import instagram from "../../../images/icon-instagram.svg?react";
import styles from "./footer.module.scss";
import React from "react";

export const Footer = () => {
  return (
    <div className={styles.footer}>
      <p>Shortly</p>
      <div>
        <div>
          <p>Features</p>
          <Link title="Link Shortening" to="">
            Link Shortening
          </Link>
          <Link title="Branded Links" to="">
            Branded Links
          </Link>
          <Link title="Analytics" to="">
            Analytics
          </Link>
        </div>
        <div>
          <p>Resources</p>
          <Link title="Blog" to="">
            Blog
          </Link>
          <Link title="Developers" to="">
            Developers
          </Link>
          <Link title="Support" to="">
            Support
          </Link>
        </div>
        <div>
          <p>Company</p>
          <Link title="About" to="">
            About
          </Link>
          <Link title="Our Team" to="">
            Our Team
          </Link>
          <Link title="Careers" to="">
            Careers
          </Link>
          <Link title="Contact" to="">
            Contact
          </Link>
        </div>
      </div>
      <div>
        <Link to="https://www.facebook.com/" target="_blank">
          <img src={facebook} alt="" />
        </Link>
        <Link to="https://www.twitter.com/" target="_blank">
          <img src={twitter} alt="" />
        </Link>
        <Link to="https://www.pinterest.com/" target="_blank">
          <img src={pinterest} alt="" />
        </Link>
        <Link to="https://www.instagram.com/" target="_blank">
          <img src={instagram} alt="" />
        </Link>
      </div>
    </div>
  );
};
