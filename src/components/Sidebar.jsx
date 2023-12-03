import AppNav from "./AppNav";
import Logo from "./Logo";
import PopularDest from "./PopularDestinations";
import styles from "./Sidebar.module.css";
import { Outlet } from "react-router-dom";

function Sidebar() {
  const year = new Date().getFullYear();
  return (
    <div className={styles.sidebar}>
      <Logo />
      <AppNav />
      <Outlet />
      {/* <div>
      <PopularDest />
      </div> */}
      <footer className={styles.footer}>
        <p className={styles.copyright}>&copy; Copyright {year} Vyasa Inc.</p>
      </footer>
    </div>
  );
}

export default Sidebar;
