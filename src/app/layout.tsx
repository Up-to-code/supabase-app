import { AppWripeer } from "@/providers";
import "./globals.scss";
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <AppWripeer>{children}</AppWripeer>
      </body>
    </html>
  );
}
