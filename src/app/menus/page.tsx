"use client";

import ListMenu from "@/components/pages/menus/listMenu/listMenu";
import styles from "./page.module.css";
import Button from "@/components/button/button";
import Image from "next/image";
import { useState } from "react";
import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";

const CATEGORIES = [
  {
    href: "/menus?categories=bk-app-exclusive",
    title: "BK APP EXCLUSIVE",
  },
  {
    href: "/menus?categories=promo-hari-ini",
    title: "Promo Hari Ini",
  },
  {
    href: "/menus?categories=new-cheese-dunk-limited-time-offer",
    title: "New! Cheese Dunk [Limited Time Offer]",
  },
  {
    href: "/menus?categories=new-king-fusion-nutella-limited-time-offer",
    title: "New! King Fusion Nutella® [Limited Time Offer]",
  },
  {
    href: "/menus?categories=heinz-mexican-whopper",
    title: "Heinz® Mexican Whopper",
  },
  {
    href: "/menus?categories=gold-collection",
    title: "Gold Collection",
  },
  {
    href: "/menus?categories=cheese-whopper",
    title: "Cheese Whopper®",
  },
  {
    href: "/menus?categories=cheeseburger-favorite",
    title: "Cheeseburger Favorite",
  },
  {
    href: "/menus?categories=kings-chicken-rasa-baru",
    title: "King's Chicken [ Rasa Baru ]",
  },
  {
    href: "/menus?categories=kids-meal",
    title: "Kids Meal",
  },
  {
    href: "/menus?categories=side-dessert",
    title: "Side & Dessert",
  },
  {
    href: "/menus?categories=beverages",
    title: "Beverages",
  },
  {
    href: "/menus?categories=king-deals",
    title: "King Deals",
  },
];

const Menus = () => {
  const [activeSearch, setActiveSearch] = useState(false);

  const toogleActiveSearch = () => {
    setActiveSearch((prev) => !prev);
  };

  const queryParams = useSearchParams();

  const activeCategory = () => {
    const targetHref = queryParams.get("categories");
    if (!targetHref) return CATEGORIES[0];

    return CATEGORIES.find((category) => category.href.includes(targetHref));
  };

  return (
    <main className="mainWithBackground">
      <div className="content">
        <div className={styles.wrapper}>
          <div className={styles.actionWrapper}>
            <Button
              className={styles.actionButton}
              onClick={toogleActiveSearch}
            >
              <Image
                src={
                  activeSearch
                    ? "https://bkdelivery.co.id/static/website/img/search-back-putih.png?4557464df5fe"
                    : "https://bkdelivery.co.id/static/website/img/search-putih.png?4557464df5fe"
                }
                alt="search"
                width={16}
                height={16}
              />
            </Button>

            {activeSearch ? (
              <input placeholder="Search menu..." className={styles.input} />
            ) : (
              <div className={styles.dropdown}>
                <p>BK APP EXCLUSIVE</p>

                <div className={styles.segitiga} />
              </div>
            )}

            <div className={styles.categoriesWrapper}>
              <div style={{ display: "flex", marginBottom: 24 }}>
                <input
                  className={`${styles.input} ${styles.inputDesktop}`}
                  placeholder="Search menu..."
                />
                <button className={styles.searchButton}>
                  <Image
                    src="https://bkdelivery.co.id/static/website/img/search-putih.png?4557464df5fe"
                    alt="search"
                    width={16}
                    height={16}
                  />
                </button>
              </div>

              <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                {CATEGORIES?.map(({ href, title }) => (
                  <div
                    className={`${styles.category} ${
                      activeCategory()?.href === href && styles.activeCategory
                    }`}
                    key={title}
                  >
                    <Link href={href}>{title}</Link>
                  </div>
                ))}

                <span className={styles.note}>
                  * Harga belum termasuk pajak
                </span>
              </div>
            </div>
          </div>

          <ListMenu />
        </div>
      </div>
    </main>
  );
};

export default Menus;
