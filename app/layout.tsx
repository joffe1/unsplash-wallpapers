import "../styles/globals.css";
import ReactQueryWrapper from "./ReactQueryWrapper";
import Header from "../components/Header";
import Footer from "../components/Footer";

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <head>
        <title>Unsplash Wallpapers</title>
      </head>
      <body className="flex flex-col h-screen justify-between">
        <Header />
        <ReactQueryWrapper>
          <div className="flex-grow">{children}</div>
        </ReactQueryWrapper>
        <Footer />
      </body>
    </html>
  );
};

export default RootLayout;
