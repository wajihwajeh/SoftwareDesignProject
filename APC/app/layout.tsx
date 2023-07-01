import "../styles/globals.css";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Asian Petroleum Company",
  openGraph: {
    title: "Asian Petroleum Company",
    description:
      "Asian Petroleum Company",
  
  },

};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="scroll-smooth antialiased [font-feature-settings:'ss01']">
        {children}
      </body>
    </html>
  );
}
