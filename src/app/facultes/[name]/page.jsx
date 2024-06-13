'use client';
import styles from './page.module.scss';
import { usePathname } from 'next/navigation';
import { etudiantsARisque } from '../../../libs/data';
import { useParams } from 'next/navigation';
import { useRouter } from 'next/router';

export default function Facult() {
  const router = useRouter();
  console.log(router);
  return (
    <div className={`${styles.page} container `}>
      <div className="row">
        <div className="col-md-3"></div>
        <div className="col-md-9">ff</div>
      </div>
    </div>
  );
}
