import Wrapper from "../components/Wrapper/Wrapper";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import { Outlet } from 'react-router-dom';
import Sidebar from "../components/Sidebar/Sidebar";
import styles from "./PrivatLayout.module.scss";

function PrivateLayout() {
  const {main, content} = styles;

  return (
    <Wrapper>
      <Header />
        <main className={main}>
          <Sidebar />
          <div className={content}>
            <Outlet />
          </div>
        </main>
      <Footer />
    </Wrapper>
  );
}

export default PrivateLayout;
