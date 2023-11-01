
import './globals.scss'


export const metadata = {
  title: 'Yu Gi Oh Collection set',
  description: 'This is an application for view, organize your collection of Yu Gi Oh card. With most different aspect and data over your card.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body className="body">{children}</body>
    </html>
  )
}
