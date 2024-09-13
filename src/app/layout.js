import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Thoughtspire - Inspiring Ideas, Empowering Minds",
  description: "Thoughtspire is your go-to platform for insightful articles, innovative ideas, and empowering resources designed to spark inspiration and creativity.",
  keywords: "Thoughtspire, inspiration, ideas, creativity, innovation, blogs, resources, articles",
  author: "Thoughtspire Team",
  icons: {
    icon: "./favicon1.png", 
  },
};


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="container">
          <Navbar />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
