import { AddTask } from "@/components/AddTask";
import { auth } from "@/lib/auth";
import styles from "@/styles/task.module.css";

export default async function Task() {
  const session = await auth();

  return (
    <main className={styles.task}>
      <h1>Liste des taches</h1>
      <AddTask />
    </main>
  );
}
