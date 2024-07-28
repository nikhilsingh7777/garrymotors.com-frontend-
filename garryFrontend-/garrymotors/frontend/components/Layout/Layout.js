// components/Layout/Layout.js
import { useRouter } from 'next/router';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';

const Layout = ({ children }) => {
  const router = useRouter();
  const showHeaderFooter = !['/Login', '/Homeadmin'].includes(router.pathname);

  return (
    <>
      {showHeaderFooter && <Navbar />}
      <main>{children}</main>
      {showHeaderFooter && <Footer />}
    </>
  );
};

export default Layout;
