import type { Metadata, Viewport } from "next";
import { Bricolage_Grotesque, Instrument_Sans } from "next/font/google";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { ThemeProvider } from "@/components/theme-provider";
import { site } from "@/lib/site";
import "./globals.css";

const bricolage = Bricolage_Grotesque({
  variable: "--font-bricolage",
  subsets: ["latin"],
  display: "swap",
});

const instrument = Instrument_Sans({
  variable: "--font-instrument",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} — Développeur fullstack orienté data`,
    template: `%s · ${site.name}`,
  },
  description: site.description,
  keywords: site.keywords,
  authors: [{ name: site.name, url: site.github }],
  creator: site.name,
  category: "technology",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: site.url,
    siteName: site.name,
    title: `${site.name} — Développeur fullstack orienté data`,
    description: site.description,
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} — Développeur fullstack orienté data`,
    description: site.description,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  manifest: "/manifest.webmanifest",
  appleWebApp: {
    capable: true,
    title: "William Mbongue",
    statusBarStyle: "black-translucent",
  },
  formatDetection: {
    telephone: false,
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  colorScheme: "dark light",
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: "#1C1917" },
    { media: "(prefers-color-scheme: light)", color: "#F5F5F4" },
  ],
};

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: site.name,
  url: site.url,
  email: `mailto:${site.email}`,
  jobTitle: "Développeur fullstack",
  description: site.description,
  knowsAbout: [
    "Next.js",
    "React",
    "TypeScript",
    "Laravel",
    "PostgreSQL",
    "Python",
    "SQL",
    "Data analysis",
  ],
  sameAs: [site.github, site.linkedin].filter(Boolean),
  address: {
    "@type": "PostalAddress",
    addressCountry: "CM",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="fr"
      suppressHydrationWarning
      className={`${bricolage.variable} ${instrument.variable}`}
    >
      <body id="top" className="flex min-h-dvh flex-col">
        <a href="#contenu" className="skip-link">
          Aller au contenu
        </a>
        <ThemeProvider>
          <Header />
          <main id="contenu" className="flex-1">
            {children}
          </main>
          <Footer />
        </ThemeProvider>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
      </body>
    </html>
  );
}
