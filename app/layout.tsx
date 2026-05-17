import "./globals.css";
import { SpeedInsights } from '@vercel/speed-insights/next';

export const viewport = {
  themeColor: "#0f172a",
};

export const metadata = {
  title: "Imposter Adda - Indian Edition",
  description: "A fun party game to find the imposter!",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0" />
      </head>
      <body>
        {children}
        <SpeedInsights />
      </body>
    </html>
  );
}
