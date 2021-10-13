import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";
export function Navbar() {
  const links = [
    { to: "/", title: "Home" },
    { to: "/students", title: "Students" },
    { to: "/login", title: "Login" }
  ];
  return (
    <div className={styles.navbar}>
      {links.map((item) => {
        return (
          <div key={item.to}>
            <Link to={item.to}>{item.title}</Link>
          </div>
        );
      })}
    </div>
  );
}
