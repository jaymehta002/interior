import "./globals.css";
import NavigationBar from "@/components/Navbar";
import { Inter } from 'next/font/google';
import Footer from "@/components/Footer";
import { constructMetadata } from "@/lib/utils";
import AppLayout from "@/components/ui/Pageanimation";
import SmoothScroll from "@/components/ui/Smoothscrolling";

export const metadata = constructMetadata()

const inter = Inter({ style: 'normal', subsets: ['latin'] })

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={inter.className}
      >
          <NavigationBar></NavigationBar>
        <SmoothScroll>
        <AppLayout>
          {children}

        </AppLayout>
          <Footer></Footer>
        </SmoothScroll>
      </body>
    </html>
  );
}
