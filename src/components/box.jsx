import styles from '../componentsstyles/box.module.scss';
export default function Box({ titre, description }) {
  return (
    <article className={`${styles.Box} col-md-3 `}>
      <h3>{titre}</h3>
      <p>{description}</p>
    </article>
  );
}
