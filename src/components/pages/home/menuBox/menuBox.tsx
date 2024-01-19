import Link from "next/link";
import styles from "./menuBox.module.css";
import Image from "next/image";
import Button from "../../../button/button";

const MenuBox = () => {
  return (
    <div className={styles.box}>
      <Link href="/">
        <Image
          src="https://media-order.bkdelivery.co.id/thumb/group_photo/2023/3/15/znilxvdnwuyurvfmej3lft_product_list.jpg"
          alt="image"
          width={100}
          height={100}
          className={styles.boxImage}
        />

        <div className={styles.detailWrapper}>
          <p className={styles.boxTitle}>BK APP EXCLUSIVE</p>
          <Button>Order</Button>
        </div>
      </Link>
    </div>
  );
};

export default MenuBox;
