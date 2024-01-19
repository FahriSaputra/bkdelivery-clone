import Button from "@/components/button/button";
import styles from "./crown.module.css";
import Image from "next/image";

const Crown = () => {
  return (
    <div className={styles.crown}>
      <p>
        Get exclusive benefits now as a BK Member!{" "}
        <span>
          <Image
            src="https://bkdelivery.co.id/static/website/img/crown1x.4a9100c3c538.png"
            alt="crown"
            width={14}
            height={14}
          />
        </span>
      </p>
      <Button>LOGIN</Button>
    </div>
  );
};

export default Crown;
