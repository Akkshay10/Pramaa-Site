import './globals.css'
import AmbientBackground from '../components/AmbientBackground'

export const metadata = {
  title: 'Pramaa Solutions',
  description: 'Practical automation and custom platforms.'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body>
        <AmbientBackground />
        {children}
      </body>
    </html>
  )
}
