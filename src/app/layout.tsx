import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "Dragon Garden Saipan - World's Rarest Fruits",
    template: "%s | Dragon Garden Saipan"
  },
  description: "Experience the world's rarest and most exotic fruits at Dragon Garden Saipan. A unique botanical paradise featuring extraordinary tropical fruits from around the globe.",
  keywords: ["Dragon Garden Saipan", "rare fruits", "exotic fruits", "tropical fruits", "Saipan garden", "botanical garden", "fruit cultivation", "rare plants"],
  authors: [{ name: "Dragon Garden Saipan" }],
  creator: "Dragon Garden Saipan",
  publisher: "Dragon Garden Saipan",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    siteName: 'Dragon Garden Saipan',
    title: 'Dragon Garden Saipan - World\'s Rarest Fruits',
    description: 'Experience the world\'s rarest and most exotic fruits at Dragon Garden Saipan. A unique botanical paradise featuring extraordinary tropical fruits from around the globe.',
    url: 'https://dragongardensaipan.com',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Dragon Garden Saipan - Rare Fruits Paradise',
      },
    ],
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Dragon Garden Saipan - World\'s Rarest Fruits',
    description: 'Experience the world\'s rarest and most exotic fruits at Dragon Garden Saipan.',
    images: ['/og-image.jpg'],
  },
  verification: {
    google: 'your-google-verification-code',
  },
  alternates: {
    canonical: 'https://dragongardensaipan.com',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="canonical" href="https://dragongardensaipan.com" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "TouristAttraction",
              "name": "Dragon Garden Saipan",
              "description": "Experience the world's rarest and most exotic fruits at Dragon Garden Saipan. A unique botanical paradise featuring extraordinary tropical fruits from around the globe.",
              "url": "https://dragongardensaipan.com",
              "image": "https://dragongardensaipan.com/og-image.jpg",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Saipan",
                "addressCountry": "Northern Mariana Islands"
              },
              "sameAs": [
                "https://facebook.com/dragongardensaipan",
                "https://instagram.com/dragongardensaipan"
              ]
            })
          }}
        />
      </head>
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}
