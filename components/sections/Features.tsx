import Icon from "@/components/ui/Icon";
export default function Features() {
  return (
    <section
      id="solution"
      className="solution-section light-section"
      aria-labelledby="solution-title"
    >
      <div className="container">
        <div className="section-heading">
          <div>
            <p className="eyebrow">Votre temps est précieux</p>
            <h2 id="solution-title" className="section-title">
              À vos clients, l’attention.
              <br />À vous, la concentration.
            </h2>
          </div>
          <p className="section-copy">
            Un appel pendant un rendez-vous. Une demande après la fermeture.
            Keelio prend en charge les échanges courants pour vous laisser
            avancer.
          </p>
        </div>
        <div className="features-grid">
          <article className="feature-card feature-main">
            <div className="feature-icon">
              <Icon name="phone" />
            </div>
            <p className="feature-kicker">01 — ACCUEILLIR</p>
            <h3>
              Votre entreprise a toujours
              <br />
              une voix accueillante.
            </h3>
            <p>
              Un assistant vocal IA présente votre entreprise et répond à partir
              des informations que vous lui confiez : horaires, prestations et
              questions fréquentes.
            </p>
            <div className="call-flow" aria-label="Exemple de fonctionnement">
              <span>
                <Icon name="phone" /> Un client appelle
              </span>
              <span className="flow-line" />
              <span className="flow-answer">
                <span className="status-dot" /> Keelio prend le relais
              </span>
            </div>
            <span className="feature-footnote">
              Disponibilité 24 h/24, selon votre configuration.
            </span>
          </article>
          <article className="feature-card">
            <div className="feature-icon">
              <Icon name="calendar" />
            </div>
            <p className="feature-kicker">02 — ORGANISER</p>
            <h3>
              Des rendez-vous.
              <br />
              Moins d’allers-retours.
            </h3>
            <p>
              Keelio consulte les disponibilités de l’agenda connecté et peut
              créer, déplacer ou annuler un rendez-vous selon vos règles.
            </p>
            <div className="calendar-preview" aria-hidden="true">
              <div>
                <span>LUN</span>
                <span>MAR</span>
                <span>MER</span>
                <span>JEU</span>
                <span>VEN</span>
              </div>
              <div>
                <span>12</span>
                <span>13</span>
                <span className="selected-day">14</span>
                <span>15</span>
                <span>16</span>
              </div>
              <p>
                <Icon name="check" /> Un créneau dans l’agenda
              </p>
            </div>
          </article>
          <article className="feature-card">
            <div className="feature-icon">
              <Icon name="message" />
            </div>
            <p className="feature-kicker">03 — TRANSMETTRE</p>
            <h3>
              Le bon contexte,
              <br />
              pour la suite.
            </h3>
            <p>
              Les coordonnées et le motif de la demande sont collectés. Un
              compte rendu vous aide à reprendre les échanges qui nécessitent
              votre attention.
            </p>
            <div className="summary-preview">
              <span>EXEMPLE DE RÉCAPITULATIF</span>
              <p>
                <i /> Demande de devis
              </p>
              <p>
                <Icon name="check" /> Coordonnées recueillies
              </p>
              <p>
                <Icon name="check" /> Besoin à préciser avec l’équipe
              </p>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
