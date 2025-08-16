import React from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="footer">
      <p>&copy; 2025 LearnOn. All Rights Reserved.</p>
      <div className="footer__links">
        {["About", "Privacy Policy", "Contact"].map((item) => (
          <Link
            key={item}
            href={`/${item.toLowerCase().replace(" ", "-")}`}
            className="footer__link"
            scroll={false}
          >
            {item}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Footer;