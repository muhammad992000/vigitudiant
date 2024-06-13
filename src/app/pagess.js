'use client';
import styles from './page.module.scss';
import Link from 'next/link';
import { Banner } from '../components/banner';
import Box from '../components/box';

export default function Home() {
  const vigitudiantSteps = [
    {
      etape: '1. Analyse Avancée des Données Existantes',
      description:
        'Vigitudiant exploite les données déjà collectées par les universités pour identifier les étudiants à risque de désistement.',
    },
    {
      etape: '2. Intelligence Artificielle Puissante',
      description:
        "Des algorithmes d'apprentissage automatique sophistiqués analysent en profondeur ces données pour identifier des modèles et des indicateurs prédictifs du désistement scolaire.",
    },
    {
      etape: '3. Interventions Ciblées et Personnalisées',
      description:
        'Sur la base des analyses, Vigitudiant propose des interventions individualisées pour chaque étudiant à risque, en tenant compte de ses besoins spécifiques et de sa situation.',
    },
  ];

  const detectionPrecoceData = [
    {
      titre: 'Détection Précoce',
      description:
        "Identification proactive des étudiants à risque avant qu'ils ne tombent dans le découragement ou qu'ils n'abandonnent leurs études.",
    },
    {
      titre: 'Interventions Personnalisées',
      description:
        'Mise en place de mesures de soutien adaptées aux besoins spécifiques et aux défis de chaque étudiant.',
    },
    {
      titre: 'Amélioration de la Rétention',
      description:
        'Réduction du taux de désistement scolaire en augmentant les chances de réussite des étudiants à risque.',
    },
    {
      titre: 'Données Actionnables',
      description:
        'Fourniture de données précieuses aux universités pour améliorer leurs politiques de soutien aux étudiants et optimiser leurs ressources.',
    },
  ];

  return (
    <main className={`${styles.main} `}>
      <Banner></Banner>
      <section className="mt-4">
        <div className="container">
          <div className="row d-flex justify-content-around">
            <h1 className={styles.title3}>comment fonctionne vigitudiant</h1>{' '}
            {vigitudiantSteps.map(step => (
              <Box
                key={step.etape}
                step={step.etape}
                description={step.description}></Box>
            ))}
          </div>
        </div>
      </section>
      <section className="mt-4">
        <div className="container">
          <div className="row d-flex justify-content-center">
            <h1 className={styles.title3}>avantages de vigitudiant</h1>{' '}
            {detectionPrecoceData.map(item => (
              <Box
                key={item.titre}
                titre={item.titre}
                description={item.description}></Box>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
