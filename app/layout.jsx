import { Toaster } from "react-hot-toast";
import "./globals.css";
import SideBar from "@/components/SideBar/SideBar";

export const metadata = {
  title: "Devansh's Portfolio",
  description: "Web and Mobile developer",
  icons: {
    icon: "./my-avatar.png", // Path to your favicon
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="antialiased">
        <Toaster />
        <div className="flex flex-col xl:flex-row bg-black px-3 sm:px-20 lg:px-40 gap-5 xl:gap-6 py-5 md:py-16 min-h-screen justify-center pb-20">
          {/* Sidebar (Fixed) */}
          <div className="w-full xl:w-fit xl:sticky xl:top-5 self-start">
            <SideBar />
          </div>
          
          {/* Scrollable Content */}
          <div className="flex-1 overflow-y-auto">{children}</div>
        </div>
      </body>
    </html>
  );
}
