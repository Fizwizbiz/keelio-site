import Brand from "@/components/ui/Brand";
import Icon from "@/components/ui/Icon";
export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-top">
          <div>
            <a href="/" className="brand-link" aria-label="Keelio, accueil">
              <Brand />
            </a>
            <p>
              La voix de votre entreprise.
              <br />
              Même quand vous êtes déjà occupé.
            </p>
          </div>
          <div className="footer-column">
            <span>EXPLORER</span>
            <a href="/#solution">L’assistant vocal IA</a>
            <a href="/#metiers">Les cas d’usage</a>
            <a href="/#fonctionnement">La mise en place</a>
            <a href="/#offre">L’offre sur devis</a>
          </div>
          <div className="footer-column">
            <span>ON EN PARLE ?</span>
            <a href="mailto:contact@keelio.fr" className="footer-email">
              contact@keelio.fr <Icon name="arrow" />
            </a>
            <p>
              Un projet, une question,
              <br />
              une nouvelle façon de répondre.
            </p>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} Keelio</span>
          <nav aria-label="Informations légales">
            <a href="/mentions-legales">Mentions légales</a>
            <a href="/politique-confidentialite">Confidentialité</a>
            <a href="/cgv">Conditions générales de vente</a>
          </nav>
          <a href="#main-content">Retour en haut ↑</a>
        </div>
      </div>
    </footer>
  );
}
