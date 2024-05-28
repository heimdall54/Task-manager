"use client";

import styles from "@/styles/addtask.module.css";
import Link from "next/link";
import { BsPlusLg } from "react-icons/bs";

export const AddTask = () => {
  return (
    <Link href="?modal=true" className={styles.addtask}>
      <h3>Nouvelle task</h3>
      <BsPlusLg className={styles.plus} />
    </Link>
  );
};
