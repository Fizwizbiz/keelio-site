import Brand from "@/components/ui/Brand";
import Icon from "@/components/ui/Icon";
import AudioPlayer from "@/components/ui/AudioPlayer";
export default function Hero() {
  return (
    <section className="hero" aria-labelledby="hero-title">
      <div className="hero-lines" aria-hidden="true">
        <svg viewBox="0 0 1400 850" preserveAspectRatio="xMidYMid slice">
          <path d="M650-120C1000 60 650 280 1100 440S1280 850 1500 950M700-150C1100 80 690 270 1170 450S1360 850 1560 960M740-180C1170 50 750 290 1240 450S1420 800 1620 970" />
        </svg>
      </div>
      <div className="container hero-grid">
        <div className="hero-copy">
          <p className="eyebrow hero-eyebrow">
            <span className="status-dot" /> Assistant vocal IA pour les
            entreprises
          </p>
          <h1 id="hero-title">
            <span>Vos appels</span> <span>méritent une</span>{" "}
            <em>vraie réponse.</em>
          </h1>
          <p className="hero-description">
            Vous êtes occupé. Vos clients ont besoin de vous. Keelio accueille
            leurs appels, répond à leurs questions et organise vos rendez-vous,
            même après la fermeture.
          </p>
          <div className="hero-actions">
            <a href="#contact" className="button button-primary">
              Découvrir Keelio pour mon entreprise <Icon name="arrow" />
            </a>
            <a href="#demo" className="text-link">
              <Icon name="play" /> Écouter la démo
            </a>
          </div>
          <div className="hero-assurance">
            <span>
              <Icon name="check" /> Démo sans engagement
            </span>
            <span>
              <Icon name="check" /> Configuré pour votre métier
            </span>
          </div>
        </div>
        <div className="hero-demo" id="demo">
          <div className="demo-topline">
            <span>LAISSEZ-LE VOUS RÉPONDRE</span>
            <span className="demo-number">01 / ÉCOUTER</span>
          </div>
          <div className="demo-card">
            <div className="demo-card-heading">
              <Brand compact />
              <span>
                Votre accueil, augmenté.<small>Assistant vocal Keelio</small>
              </span>
              <span className="demo-badge">Démo</span>
            </div>
            <AudioPlayer src="/demo-conversation.mp3" />
            <div className="demo-description">
              <span className="tiny-icon">
                <Icon name="phone" />
              </span>
              <p>
                Découvrez la voix et le déroulement d’un échange avec un
                assistant Keelio.
              </p>
            </div>
          </div>
          <div className="demo-outcome">
            <span className="outcome-icon">
              <Icon name="calendar" />
            </span>
            <div>
              <strong>De l’appel au rendez-vous.</strong>
              <p>Un accueil qui fait avancer la conversation.</p>
            </div>
            <Icon name="arrow" />
          </div>
          <p className="demo-caption">
            Un exemple à écouter. Votre assistant sera adapté à votre activité.
          </p>
        </div>
      </div>
      <div className="container hero-bottom">
        <span>PLUS DE DISPONIBILITÉ. MOINS D’INTERRUPTIONS.</span>
        <a href="#solution">
          Découvrez une autre façon de répondre{" "}
          <span aria-hidden="true">↓</span>
        </a>
      </div>
    </section>
  );
}
