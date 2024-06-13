import BasicExample from '../components/navbar';
import './global.css';
import 'bootstrap/dist/css/bootstrap.css';
import { Facultes } from '../components/facultes';

export const metadata = {
  title: 'Vigitudiant',
  description: '',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {<BasicExample></BasicExample>}

        {children}
      </body>
    </html>
  );
}
