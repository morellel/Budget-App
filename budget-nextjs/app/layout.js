import './CSS/globals.css'
import {Navigation} from "@/components/Navigation";

export const metadata = { //metadata object definition
    // metadata tags
    title: 'Emma Morell\'s Budget App.',
    description: 'Created by Emma Morell',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
      <Navigation /> {/*imported from components folder, putting it here ensures it remains consistent through app*/}
      {children} {/*Represents the content rendered in the rootLayout component (see the definition above).
                    Allows you to nest other components and content in the shared layout.*/}
      </body>
    </html>
  )
}
