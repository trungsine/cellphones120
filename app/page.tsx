import UserList from "@/components/UserList";
import styles from "./page.module.css";
import Header from "@/components/Header";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <h1>Hello World</h1>
        {/* <UserList /> */}
        <Header />
      </div>
    </main>
  );
}
