'use client';
import etudiants from '../libs/data';
import styles from '../componentsstyles/facultes.module.scss';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
export function Facultes() {
  const pathname = usePathname();
  const facultes = [
    {
      faculte: 'Faculté des Lettres et Sciences Humaines ',
      sigleFaculte: 'FLSH',
    },
    {
      faculte: 'Faculté des Sciences Economiques et de Gestion ',
      sigleFaculte: 'FSEG',
    },
    {
      faculte: 'Facultés des Sciences Juridiques et Politiques ',
      sigleFaculte: 'FSJP',
    },
    {
      faculte: 'Faculté des Sciences ',
      sigleFaculte: 'FS',
    },
    {
      faculte: 'Faculté de Médecine ',
      sigleFaculte: 'FM',
    },
    {},
  ];
  console.log(pathname);

  return (
    <section className={`${styles.facultes} container`}>
      <h1>facultes</h1>
      <section>
        {' '}
        {facultes.map(faculte => (
          <article className={`${styles.faculte}   `}>
            <Link
              className={`${styles.link} ${
                pathname == `/facultes/${faculte.sigleFaculte}` ? styles.active : ''
              } `}
              href={`/facultes/${faculte.sigleFaculte}`}>
              {' '}
              {faculte.faculte}
            </Link>
          </article>
        ))}
      </section>
    </section>
  );
}
