import styles from '../componentsstyles/banner.module.scss';
import Link from 'next/link';

export function Banner() {
  return (
    <header className={styles.header}>
      <div className="container">
        <div className="row d-flex justify-content-center">
          <div className="col-8">
            <h1>bienvenue sur Vigitudiant</h1>
            <p>
              Vigitudiant est une plateforme innovante qui utilise
              l'intelligence artificielle (IA) pour identifier les étudiants
              universitaires camerounais à risque de désistement. En analysant
              des données académiques, comportementales et financières,
              IntelliSupport permet aux universités et aux conseillers
              académiques de mettre en place des interventions ciblées et
              précoces, améliorant ainsi la rétention des étudiants et
              contribuant à leur réussite.
            </p>
            <div>
              <button>
                <Link className={styles.link} href={`dashboard`}>
                  dashboard
                </Link>
              </button>
              <button>get started</button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
