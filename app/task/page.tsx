import { AddTask } from "@/components/AddTask";
import { TaskComp } from "@/components/Task";
import { auth } from "@/lib/auth";
import styles from "@/styles/task.module.css";

export default async function Task() {
  const session = await auth();

  const data = [
    {
      id: 1,
      title: "titre 1",
      content: ` Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ducimus, illo
      quidem! Ex, quo, accusamus, nihil quasi exercitationem enim ipsum fuga
      neque nemo nam hic deleniti maiores quae similique recusandae modi.`,
      date: "05/12/2024",
      status: "attente",
    },
    {
      id: 2,
      title: "titre 2",
      content: ` Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ducimus, illo
      quidem! Ex, quo, accusamus, nihil quasi exercitationem enim ipsum fuga
      neque nemo nam hic deleniti maiores quae similique recusandae modi.`,
      date: "02/12/2024",
      status: "attente",
    },
    {
      id: 3,
      title: "titre 3",
      content: ` Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ducimus, illo
      quidem! Ex, quo, accusamus, nihil quasi exercitationem enim ipsum fuga
      neque nemo nam hic deleniti maiores quae similique recusandae modi.`,
      date: "04/12/2024",
      status: "attente",
    },
    {
      id: 4,
      title: "titre 4",
      content: ` Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ducimus, illo
      quidem! Ex, quo, accusamus, nihil quasi exercitationem enim ipsum fuga
      neque nemo nam hic deleniti maiores quae similique recusandae modi.`,
      date: "08/12/2024",
      status: "attente",
    },
  ];

  return (
    <main className={styles.task}>
      <h1>Liste des taches</h1>
      <div className={styles.tasklist}>
        {data.map((task) => (
          <TaskComp
            key={task.id}
            id={task.id}
            title={task.title}
            content={task.content}
            date={Date.parse(task.date)}
            status={task.status}
          />
        ))}
        <AddTask />
      </div>
    </main>
  );
}
