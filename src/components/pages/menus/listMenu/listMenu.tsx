import MenuBox from "../menuBox/menuBox";
import styles from "./listMenu.module.css";

const ListMenu = () => {
  return (
    <div className={styles.menusWrapper}>
      {[1, 2, 3, 4, 5, 6].map((value) => (
        <MenuBox key={value} />
      ))}
    </div>
  );
};

export default ListMenu;
