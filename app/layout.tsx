import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Team Timezone Coordinator — Find Optimal Meeting Times Instantly',
  description: 'Calculates best meeting times for distributed teams considering work hours, preferences, and meeting fatigue. Perfect for remote team leads and project managers.'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="161abbd1-2a89-4ec3-9c3b-175c6a802893"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  )
}
