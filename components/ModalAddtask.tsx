"use client";
import { navigateToTask } from "@/lib/navigate";
import styles from "@/styles/modaaddtask.module.css";
import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";
import { SubmitHandler, useForm } from "react-hook-form";

type Inputs = {
  title: string;
  content: string;
  date: Date;
};

function ModalAddtask() {
  const searchParams = useSearchParams();
  const modal = searchParams.get("modal");
  const pathname = usePathname();
  const {
    handleSubmit,
    register,
    reset,
    formState: { errors },
  } = useForm();

  console.log(modal);

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    console.log(data);
    reset();
    navigateToTask();
  };

  return (
    <>
      {modal && (
        <div className={styles.modal}>
          <h1>Creation d&apos;une task</h1>
          <form onSubmit={handleSubmit(onSubmit)}>
            <label htmlFor="title">Title</label>
            <input type="text" id="title" {...register("title")} />
            <label htmlFor="finirle">A finir avant le</label>
            <input type="date" id="finirle" {...register("date")} />
            <label htmlFor="content">contenu</label>
            <textarea
              cols={20}
              rows={20}
              id="content"
              {...register("content")}
            />
            <div className={styles.zonebtn}>
              <button
                type="submit"
                className={styles.btn + " " + styles.validate}
              >
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
