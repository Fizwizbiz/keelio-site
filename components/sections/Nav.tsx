"use client";
import { useEffect, useRef, useState } from "react";
import Brand from "@/components/ui/Brand";
import Icon from "@/components/ui/Icon";
const links = [
  ["La solution", "/#solution"],
  ["Pour votre métier", "/#metiers"],
  ["Comment ça marche", "/#fonctionnement"],
  ["FAQ", "/#faq"],
];
export default function Nav() {
  const [open, setOpen] = useState(false);
  const toggle = useRef<HTMLButtonElement>(null);
  useEffect(() => {
    function close(e: KeyboardEvent) {
      if (e.key === "Escape" && open) {
        setOpen(false);
        toggle.current?.focus();
      }
    }
    window.addEventListener("keydown", close);
    return () => window.removeEventListener("keydown", close);
  }, [open]);
  return (
    <header className="site-header">
      <div className="container nav-inner">
        <a className="brand-link" href="/" aria-label="Keelio, accueil">
          <Brand />
        </a>
        <nav className="desktop-nav" aria-label="Navigation principale">
          {links.map(([label, href]) => (
            <a key={href} href={href}>
              {label}
            </a>
          ))}
        </nav>
        <a href="/#contact" className="button button-small nav-cta">
          <span className="nav-cta-long">Parlons de votre projet</span>
          <span className="nav-cta-short">Parlons-en</span>{" "}
          <Icon name="arrow" />
        </a>
        <button
          ref={toggle}
          className={open ? "menu-toggle is-open" : "menu-toggle"}
          type="button"
          aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen(!open)}
        >
          <span />
          <span />
        </button>
      </div>
      {open && (
        <nav
          id="mobile-menu"
          className="mobile-nav"
          aria-label="Navigation mobile"
        >
          {links.map(([label, href]) => (
            <a key={href} href={href} onClick={() => setOpen(false)}>
              {label}
              <Icon name="arrow" />
            </a>
          ))}
          <a href="/#contact" onClick={() => setOpen(false)}>
            Demander ma démo <Icon name="arrow" />
          </a>
        </nav>
      )}
    </header>
  );
}
