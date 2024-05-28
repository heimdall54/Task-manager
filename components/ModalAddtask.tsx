"use client";
import styles from "@/styles/modaaddtask.module.css";
import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";

function ModalAddtask() {
  const searchParams = useSearchParams();
  const modal = searchParams.get("modal");
  const pathname = usePathname();

  console.log(modal);

  return (
    <>
      {modal && (
        <div className={styles.modal}>
          <h1>Creation d&apos;une task</h1>
          <form>
            <label htmlFor="title">Title</label>
            <input type="text" id="title" />
            <label htmlFor="finirle">A finir avant le</label>
            <input type="date" id="finirle" />
            <label htmlFor="content">contenu</label>
            <textarea cols={20} rows={20} id="content" />
            <div className={styles.zonebtn}>
              <button className={styles.btn + " " + styles.validate}>
                Crée cette task
              </button>
              <Link href={pathname}>
                <button
                  type="button"
                  className={styles.btn + " " + styles.close}
                >
                  Close Modal
                </button>
              </Link>
            </div>
          </form>
        </div>
      )}
    </>
  );
}

export default ModalAddtask;
