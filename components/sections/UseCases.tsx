"use client";
import { useState } from "react";
import Icon from "@/components/ui/Icon";
const cases = [
  {
    label: "Artisans & services",
    title: "Sur le terrain, pas au téléphone.",
    copy: "Pendant une intervention, votre accueil continue. Keelio recueille la demande, les coordonnées et les informations utiles pour préparer votre rappel.",
    request: "« Je voudrais un devis pour une installation. »",
    items: [
      "Qualifier le type de demande",
      "Recueillir les coordonnées",
      "Préparer un rappel par votre équipe",
    ],
    tag: "Vous gardez la main sur les devis.",
  },
  {
    label: "Salons & instituts",
    title: "Toute votre attention à la personne en face de vous.",
    copy: "Pendant une prestation, Keelio renseigne sur les horaires et les services. Avec un agenda compatible connecté, il accompagne la prise de rendez-vous.",
    request: "« Avez-vous un créneau cette semaine ? »",
    items: [
      "Présenter les prestations renseignées",
      "Vérifier les créneaux disponibles",
      "Organiser ou déplacer un rendez-vous",
    ],
    tag: "Votre agenda suit vos règles.",
  },
  {
    label: "Agences & TPE",
    title: "Un premier contact qui fait avancer les choses.",
    copy: "Prospect, client ou demande de suivi : Keelio identifie le besoin et rassemble les informations pour que votre équipe puisse prendre la suite.",
    request: "« J’aimerais parler de mon projet avec vous. »",
    items: [
      "Comprendre le motif de l’appel",
      "Recueillir le contexte du projet",
      "Organiser la prochaine étape",
    ],
    tag: "Vous décidez des demandes à traiter.",
  },
];
export default function UseCases() {
  const [selected, setSelected] = useState(0);
  return (
    <section
      id="metiers"
      className="usecases-section light-section"
      aria-labelledby="metiers-title"
    >
      <div className="container usecases-grid">
        <div>
          <p className="eyebrow">Votre métier. Votre façon de faire.</p>
          <h2 id="metiers-title" className="section-title">
            Il apprend votre activité.
            <br />
            Pas l’inverse.
          </h2>
          <p className="section-copy">
            Votre ton, vos horaires, vos prestations et vos limites :
            l’assistant est configuré autour de votre entreprise.
          </p>
          <div
            className="case-tabs"
            role="tablist"
            aria-label="Exemples par métier"
          >
            {cases.map((item, i) => (
              <button
                type="button"
                key={item.label}
                role="tab"
                id={"case-tab-" + i}
                aria-controls={"case-panel-" + i}
                aria-selected={selected === i}
                tabIndex={selected === i ? 0 : -1}
                onClick={() => setSelected(i)}
                onKeyDown={(e) => {
                  if (
                    [
                      "ArrowDown",
                      "ArrowRight",
                      "ArrowUp",
                      "ArrowLeft",
                      "Home",
                      "End",
                    ].includes(e.key)
                  ) {
                    e.preventDefault();
                    const next =
                      e.key === "Home"
                        ? 0
                        : e.key === "End"
                          ? cases.length - 1
                          : (selected +
                              (["ArrowDown", "ArrowRight"].includes(e.key)
                                ? 1
                                : -1) +
                              cases.length) %
                            cases.length;
                    setSelected(next);
                    document.getElementById("case-tab-" + next)?.focus();
                  }
                }}
              >
                {item.label}
                <Icon name="arrow" />
              </button>
            ))}
          </div>
        </div>
        {cases.map((active, index) => (
          <div
            key={active.label}
            hidden={selected !== index}
            className="case-panel"
            id={"case-panel-" + index}
            role="tabpanel"
            aria-labelledby={"case-tab-" + index}
            tabIndex={0}
          >
            <span className="case-label">
              EXEMPLE D’USAGE <span>0{index + 1}</span>
            </span>
            <h3>{active.title}</h3>
            <p>{active.copy}</p>
            <blockquote>
              <Icon name="phone" />
              {active.request}
            </blockquote>
            <ul>
              {active.items.map((item) => (
                <li key={item}>
                  <Icon name="check" />
                  {item}
                </li>
              ))}
            </ul>
            <div className="case-foot">
              <Icon name="settings" />
              {active.tag}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
