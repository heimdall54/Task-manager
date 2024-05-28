import { auth } from "@/lib/auth";
import styles from "@/styles/page.module.css";

export default async function Home() {
  const session = await auth();

  return (
    <main className={styles.main}>
      <h1>Presentation du project</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga quaerat hic eos nostrum rem? Qui, doloremque sit minus totam facere iusto magnam cupiditate assumenda quasi distinctio, praesentium quis, consectetur dicta.
      Quaerat, odio hic expedita recusandae, ipsam, veritatis reprehenderit temporibus aliquid impedit laboriosam nisi assumenda asperiores qui. Odio laudantium aliquid quos minima, illo ad voluptate natus quis cum officia consectetur quas!
      Provident commodi iste autem, maxime temporibus dolor. Tempora atque quis quasi sequi. Voluptate cupiditate iste doloribus, sint cumque maxime sed veniam consectetur quas beatae neque maiores quos, repudiandae omnis laboriosam!</p>
    </main>
  );
}
