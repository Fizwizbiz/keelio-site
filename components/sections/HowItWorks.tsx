import Icon from "@/components/ui/Icon";
const steps = [
  [
    "On part de votre quotidien.",
    "Nous définissons les appels à prendre en charge, les informations à transmettre et les situations qui doivent vous revenir.",
  ],
  [
    "On configure. Vous testez.",
    "Voix, consignes et agenda : nous préparons votre assistant. Vous essayez les scénarios et validez son comportement avant la mise en service.",
  ],
  [
    "Vous avancez, il répond.",
    "L’assistant suit les règles convenues. Les comptes rendus d’appels vous permettent de suivre les demandes et d’ajuster l’accueil.",
  ],
];
export default function HowItWorks() {
  return (
    <section
      id="fonctionnement"
      className="process-section"
      aria-labelledby="process-title"
    >
      <div className="container">
        <div className="section-heading">
          <div>
            <p className="eyebrow">
              Simple pour vous. Soigné dans les détails.
            </p>
            <h2 id="process-title" className="section-title">
              Un assistant à votre image.
              <br />
              Un démarrage accompagné.
            </h2>
          </div>
          <a href="#contact" className="text-link">
            Discutons de votre besoin <Icon name="arrow" />
          </a>
        </div>
        <div className="steps-grid">
          {steps.map(([title, description], i) => (
            <article className="step" key={title}>
              <div className="step-top">
                <span>0{i + 1}</span>
                <div />
                <Icon
                  name={i === 0 ? "message" : i === 1 ? "settings" : "phone"}
                />
              </div>
              <h3>{title}</h3>
              <p>{description}</p>
            </article>
          ))}
        </div>
        <div className="control-banner">
          <span className="control-icon">
            <Icon name="shield" />
          </span>
          <div>
            <h3>L’automatisation, avec un cadre clair.</h3>
            <p>
              Vous validez les informations, les accès et les actions
              autorisées. Les demandes hors périmètre suivent le scénario défini
              avec vous.
            </p>
          </div>
          <a href="/politique-confidentialite">
            Confidentialité <Icon name="arrow" />
          </a>
        </div>
      </div>
    </section>
  );
}
