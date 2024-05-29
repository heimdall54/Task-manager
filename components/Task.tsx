import styles from "@/styles/addtask.module.css";

export type TaskProps = {
  id: Number;
  title: string;
  content: string;
  date: Date;
  status: string;
};

export const TaskComp = (props: TaskProps) => {
  return (
    <div className={styles.content + " " + styles.task}>
      <h3>titre de test</h3>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ducimus, illo
        quidem! Ex, quo, accusamus, nihil quasi exercitationem enim ipsum fuga
        neque nemo nam hic deleniti maiores quae similique recusandae modi.
      </p>
      <span>03/10/2024</span>
    </div>
  );
};
