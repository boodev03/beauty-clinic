import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Loading } from "@/components/loading";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Beauty Clinic - Thẩm Mỹ Viện Cao Cấp",
  description: "Dịch vụ thẩm mỹ cao cấp, an toàn và chuyên nghiệp tại Việt Nam",
  openGraph: {
    title: "Beauty Clinic - Thẩm Mỹ Viện Cao Cấp",
    description:
      "Dịch vụ thẩm mỹ cao cấp, an toàn và chuyên nghiệp tại Việt Nam",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Loading />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
