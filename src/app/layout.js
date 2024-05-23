import BasicExample from '../components/navar';
import styles from './globals.scss';
import 'bootstrap/dist/css/bootstrap.css';

export const metadata = {
  title: 'Vigitudiant',
  description: '',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={styles.body}>{children}</body>
      <footer>footer</footer>
    </html>
  );
}
