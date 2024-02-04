import React, { useState } from 'react';
import css from './navbar.module.scss';
import { Link } from 'react-router-dom';

const Navbar = ({ lang, langCode, isDesktop }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const l = lang.nav;
  const pathname = window.location.pathname.split('/');
  const url = pathname.splice(2, pathname.length).join('/'); // Full url for redirecting back with diff language

  return (
    <nav className={css['nav']}>
      Demo
    </nav>
  )
}

export default Navbar