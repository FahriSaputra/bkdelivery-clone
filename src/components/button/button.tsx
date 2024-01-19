import { ButtonHTMLAttributes, PropsWithChildren } from "react";
import styles from "./button.module.css";

const Button = (
  props: PropsWithChildren<ButtonHTMLAttributes<HTMLButtonElement>>
) => {
  return (
    <button {...props} className={styles.container}>
      {props.children}
    </button>
  );
};

export default Button;
