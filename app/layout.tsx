import '../styles/globals.css';
import ReactQueryWrapper from './ReactQueryWrapper';
import { Header, Footer } from './components';
import Head from './head';

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html>
      <Head />
      <body className="flex h-screen flex-col justify-between">
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
