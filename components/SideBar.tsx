import { auth } from "@/lib/auth";
import styles from "@/styles/sidebar.module.css";
import Image from "next/image";
import { FaMoon } from "react-icons/fa6";
import { MdOutlineMenu, MdOutlineWbSunny } from "react-icons/md";
import { Login, Logout } from "./AuthBtn";

export async function SideBar() {
  const session = await auth();

  return (
    <>
      <input
        type="checkbox"
        name="checkbtn"
        className={styles.checkboxbtn}
        id="checkbtn"
      />
      <label className={styles.checkbtn} htmlFor="checkbtn">
        <MdOutlineMenu />
      </label>
      <nav className={styles.nav}>
        {!session ? (
          <div className={styles.login}>
            <Login />
          </div>
        ) : (
          <div className={styles.menu}>
            <div className={styles.header}>
              <Image
                src={session.user?.image || " "}
                width={80}
                height={80}
                alt="photo de profil"
              />
              <h3>{session.user?.name}</h3>
              <Logout />
            </div>
            <div className={styles.lien}>
              <div className={styles.test}>
                <input
                  type="checkbox"
                  className={styles.checkbox}
                  id="checkbox"
                />
                <label htmlFor="checkbox" className={styles.checkboxlabel}>
                  <MdOutlineWbSunny className={styles.famoon} />

                  <FaMoon className={styles.fasun} />

                  <span className={styles.ball}></span>
                </label>
              </div>
              <a href="/">Home</a>
              <a href="/task">Task</a>
              <a href="#">Note</a>
            </div>
          </div>
        )}
      </nav>
    </>
  );
}
