import Navbar from "./components/NavBar";
import "./globals.scss";

export const metadata = {
  title: "Yu Gi Oh Collection set",
  description:
    "This is an application for view, organize your collection of Yu Gi Oh card. With most different aspect and data over your card.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <head>
        <meta charSet="utf8" />
        <meta name="author" content="antozr" />
      </head>
      <body className="body">
        {children}
        <Navbar />
      </body>
    </html>
  );
}
