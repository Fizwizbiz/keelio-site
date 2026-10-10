const items = [
  [
    "Qu’est-ce qu’un assistant vocal IA ?",
    "C’est un assistant qui échange avec vos clients par téléphone. Keelio utilise les informations et les règles définies avec vous pour répondre aux questions courantes, recueillir une demande et organiser des rendez-vous dans un agenda connecté.",
  ],
  [
    "Est-ce que je conserve mon numéro professionnel ?",
    "Le fonctionnement prévu repose sur un renvoi d’appel depuis votre numéro actuel vers le numéro de l’assistant. Nous définissons avec vous les situations dans lesquelles il prend le relais et vérifions les modalités de renvoi avec votre téléphonie.",
  ],
  [
    "Quels outils peut-on connecter ?",
    "Keelio peut gérer les rendez-vous dans Google Calendar et le suivi de contacts et d’appels dans Google Sheets. Pour un autre agenda ou logiciel métier, nous vérifions la compatibilité et le périmètre avant de vous faire une proposition.",
  ],
  [
    "Que se passe-t-il si l’assistant ne sait pas répondre ?",
    "Nous définissons les limites de l’assistant avec vous. Pour une demande hors périmètre, le scénario peut prévoir de recueillir les informations nécessaires afin que votre équipe reprenne le contact. Les modalités sont validées pendant les tests.",
  ],
  [
    "Combien coûte Keelio ?",
    "Le tarif est établi sur devis, selon le volume d’appels, les scénarios et les connexions nécessaires. La proposition précise la configuration, les frais récurrents, les éventuels coûts d’usage et les conditions de service. La demande de démonstration est sans engagement.",
  ],
  [
    "Comment se passe la mise en place ?",
    "Nous cadrons votre besoin, configurons l’assistant et les connexions convenues, puis testons les scénarios avec vous. Le calendrier dépend du périmètre et de la disponibilité des informations et accès nécessaires ; il est précisé dans votre proposition.",
  ],
];
export default function FAQ() {
  return (
    <section
      className="faq-section light-section"
      id="faq"
      aria-labelledby="faq-title"
    >
      <div className="container faq-grid">
        <div>
          <p className="eyebrow">Tout simplement</p>
          <h2 id="faq-title" className="section-title">
            Les bonnes questions.
            <br />
            Des réponses claires.
          </h2>
          <p className="section-copy">
            Un besoin particulier ?<br />
            <a className="inline-link" href="#contact">
              Parlons-en ensemble.
            </a>
          </p>
        </div>
        <div className="faq-list">
          {items.map(([question, answer], i) => (
            <details key={question} className="faq-item">
              <summary>
                <span className="faq-number">0{i + 1}</span>
                <h3>{question}</h3>
                <span className="faq-toggle" aria-hidden="true">
                  +
                </span>
              </summary>
              <p>{answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
