import MenuBox from "../menuBox/menuBox";
import styles from "./ourMenus.module.css";

const OurMenus = () => {
  return (
    <div className={styles.menusWrapper}>
      {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((value) => (
        <MenuBox key={value} />
      ))}
    </div>
  );
};

export default OurMenus;
