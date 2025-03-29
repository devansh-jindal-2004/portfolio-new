import { Toaster } from "react-hot-toast";
import "./globals.css";

export const metadata = {
  title: "Devansh's Portfolio",
  description: "Web and Mobile developer",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`antialiased`}
      >
        <Toaster />
        {children}
      </body>
    </html>
  );
}
