import styles from "./menuBox.module.css";
import Image from "next/image";

const MenuBox = () => {
  return (
    <div className={styles.menuBox}>
      <Image
        src="https://media-order.bkdelivery.co.id/thumb/product_photo/2023/11/7/584yfrkeppr2ycwjivr5uj_product_list.jpg"
        alt="product"
        width={100}
        height={100}
        className={styles.productImage}
      />

      <div className={styles.detailWrapper}>
        <p className={styles.productName}>App Exc 1pc Ayam + Nasi</p>
        <p className={styles.price}>
          Rp.20,000 <span className={styles.originalPrice}>28,636</span>
        </p>
      </div>
    </div>
  );
};

export default MenuBox;
