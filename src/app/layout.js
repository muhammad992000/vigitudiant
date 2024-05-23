
import { Navbar } from "./composants/navar";
import "./globals.css";



export const metadata = {
  title: "Vigitudiant",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Navbar></Navbar>
      <body >{children}</body>
      <footer>footer</footer>
    </html>
  );
}
