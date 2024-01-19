"use client";

import Image from "next/image";
import styles from "./header.module.css";
import Link from "next/link";
import { useState } from "react";

const MENU_ITEM = [
  {
    href: "/",
    title: "Home",
  },
  {
    href: "/menus",
    title: "Order",
    subTitle: "Delivery",
  },
  {
    href: "/news",
    title: "Promotions",
    subTitle: "Get Fresh",
  },
  {
    href: "/large-order",
    title: "Large Order",
    subTitle: "Exclusive",
  },
  {
    href: "/rewards",
    title: "Crowns",
    subTitle: "Reward",
  },
  {
    href: "/coupons",
    title: "Kupon",
    subTitle: "Just For You",
  },
];

const Header = () => {
  const [showOverlay, setShowOverlay] = useState(false);

  const toogleOverlay = () => {
    setShowOverlay((prevValue) => !prevValue);
  };

  return (
    <>
      <div className={styles.container}>
        <div className={styles.humburger} onClick={toogleOverlay}>
          <Image
            src={
              showOverlay
                ? "https://bkdelivery.co.id/static/website/img/menu-close1x.a753256ab0d1.png"
                : "https://bkdelivery.co.id/static/website/img/BK_TopMenu1x.958354c1f2d2.png"
            }
            alt="hamburger-menu"
            width={25}
            height={25}
          />
        </div>

        <Link className={styles.logo} href={"/"}>
          <Image
            src="https://bkdelivery.co.id/static/website/img/BK-NewLogo-1x.2bd4c88032ad.png"
            alt="bk-logo"
            height={40}
            width={40}
          />
        </Link>

        <Link className={styles.cart} href={"/cart/preview"}>
          <Image
            src="https://bkdelivery.co.id/static/website/img/BK_TopCart1x.5b5f4dd7b2a4.png"
            alt="hamburger-menu"
            width={25}
            height={25}
          />
        </Link>
      </div>

      <div className={`${styles.overlay} ${showOverlay && styles.overlayOpen}`}>
        <nav className={styles.nav}>
          <ul className={styles.menuWrapper}>
            {MENU_ITEM?.map(({ href, title, subTitle }) => (
              <li key={href}>
                <Link className={styles.menuItem} href={"/"}>
                  {subTitle && (
                    <p className={styles.menuSubTitle}>{subTitle}</p>
                  )}
                  {title}
                </Link>
              </li>
            ))}

            <li className={styles.divider} />

            <li>
              <Link href="/orders" className={styles.menuProfile}>
                My Account
              </Link>
            </li>

            <li>
              <Link href="/accounts/logout" className={styles.menuProfile}>
                Logout
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
};

export default Header;
