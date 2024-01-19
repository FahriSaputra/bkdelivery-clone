import styles from "./page.module.css";
import Crown from "@/components/pages/home/crown/crown";
import OurMenus from "@/components/pages/home/ourMenus/ourMenus";

export default function Home() {
  return (
    <main className={`${styles.main} mainWithBackground`}>
      <div className={styles.content}>
        <Crown />

        <p className={styles.title}>Our Menus</p>

        <OurMenus />
      </div>
    </main>
  );
}
