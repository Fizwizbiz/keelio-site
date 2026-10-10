import Icon from "@/components/ui/Icon";
export default function QuoteCTA() {
  return (
    <section
      className="offer-section light-section"
      id="offre"
      aria-labelledby="offre-title"
    >
      <div className="container offer-grid">
        <div>
          <p className="eyebrow">Une offre adaptée à votre entreprise</p>
          <h2 id="offre-title" className="section-title">
            Le bon accueil.
            <br />
            Au bon périmètre.
          </h2>
          <p className="section-copy">
            Votre volume d’appels et vos besoins déterminent la solution. Nous
            les étudions avec vous pour établir une proposition claire.
          </p>
        </div>
        <div className="offer-card">
          <div className="offer-heading">
            <span>VOTRE ASSISTANT KEELIO</span>
            <strong>
              Sur devis
              <span>Configuration et accompagnement personnalisés</span>
            </strong>
          </div>
          <ul>
            <li>
              <Icon name="check" /> Un scénario d’accueil adapté à votre
              activité
            </li>
            <li>
              <Icon name="check" /> Les connexions convenues à vos outils
            </li>
            <li>
              <Icon name="check" /> Une phase de test avant mise en service
            </li>
            <li>
              <Icon name="check" /> Les conditions d’utilisation détaillées dans
              le devis
            </li>
          </ul>
          <a href="#contact" className="button button-dark">
            Recevoir une proposition <Icon name="arrow" />
          </a>
          <p>La demande de démo ne vous engage pas.</p>
        </div>
      </div>
    </section>
  );
}
