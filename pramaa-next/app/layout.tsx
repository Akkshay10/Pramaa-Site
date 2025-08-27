import './globals.css'

export const metadata = {
  title: 'Pramaa Solutions',
  description: 'Practical automation and custom platforms.'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
