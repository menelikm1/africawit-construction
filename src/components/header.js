import React from 'react';
import { Link, useStaticQuery, graphql } from 'gatsby';
import {
    navLinks,
    navLinkItem,
    navLinkText,
    siteTitle
} from "./header.module.css"

const Header = () => {
    // getting data from data layer using graphql
    const data = useStaticQuery(graphql`
        query {
            site {
                siteMetadata {
                    title
                }
            }
        }
    `)
  return (
    <header className={siteTitle}> {data.site.siteMetadata.title}
      <nav>
        <ul className={navLinks}>
          <li className={navLinkItem}>
            <Link to="/" className={navLinkText}>Home</Link>
          </li>
          <li className={navLinkItem}>
            <Link to="/about" className={navLinkText}>About</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header