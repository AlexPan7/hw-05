import { useMemo, useEffect } from "react";
import { Outlet, useLocation, useParams } from "react-router-dom";

import Wrapper from "../components/Wrapper/Wrapper";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";

function PublicLayout() {
  const titles = useMemo(() => ({
    '/': 'Home',
    '/about': 'About',
    '/contact': 'Contact',
    '/blog': 'Blog',
    '/login': 'Login',
    '/registration': 'Registration'
  }), []);

  const location = useLocation();
  const params = useParams();

  useEffect(() => {
    const { pathname } = location;
    let title = titles[pathname];
    
    if (title === undefined && pathname.startsWith('/posts/')) {
      title = 'Post';
    }
    
    document.title = `WORKOUT-${title}`;
  }, [location, titles, params]);

  return (
    <Wrapper>
      <Header />
      <Outlet />
      <Footer />
    </Wrapper>
  );
}

export default PublicLayout;
