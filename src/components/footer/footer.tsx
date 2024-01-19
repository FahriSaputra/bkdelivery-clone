import Image from "next/image";
import Link from "next/link";
import styles from "./footer.module.css";

const SOCIAL_MEDIA = [
  {
    icon: "https://bkdelivery.co.id/static/website/img/Footer-FB1x.722220d65dae.png",
    href: "https://www.facebook.com/burgerkingindonesia/",
  },
  {
    icon: "https://bkdelivery.co.id/static/website/img/Footer-IG1x.f835d32a42b6.png",
    href: "https://www.facebook.com/burgerkingindonesia/",
  },
  {
    icon: "https://bkdelivery.co.id/static/website/img/Footer-TW1x.a7fc098003f1.png",
    href: "https://twitter.com/burgerking_id",
  },
  {
    icon: "https://bkdelivery.co.id/static/website/img/Footer-YT1x.e2c5cc228dff.png",
    href: "https://www.youtube.com/channel/UC-F_fh9CRDwhJrY_ibHae-g",
  },
];

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerWrapper}>
        <p className={styles.brandTitle}>BURGER KING® DELIVERY</p>

        <div className={styles.service}>
          <Link href={"tel:1500025"} className={styles.phone}>
            <Image
              alt="phone"
              src="https://bkdelivery.co.id/static/website/img/Footer-Phone1x.4bb5b96c80cd.png"
              width={24}
              height={24}
              className={styles.phoneIcon}
            />

            <span className={styles.callCenter}>15000 25</span>
          </Link>

          <Link href="mailto:testemail.com" className={styles.email}>
            <Image
              src="https://bkdelivery.co.id/static/website/img/footer-email1x.0dc312afa145.png"
              alt="email"
              width={24}
              height={24}
              className={styles.emailIcon}
            />

            <span>guestservice@burgerking.co.id</span>
          </Link>

          <span className={styles.socialMedia}>
            {SOCIAL_MEDIA?.map(({ href, icon }) => (
              <Link href={href} key={href}>
                <Image alt="image" src={icon} width={24} height={24} />
              </Link>
            ))}
          </span>
        </div>

        <div className={styles.aboutBrandContainer}>
          <div className={styles.aboutBrand}>
            <span>
              <Link href="/about-us">About Us</Link>
            </span>
            <span>
              <Link href="/privacy-policy ">Kebijakan Privasi</Link>
            </span>
            <span>
              <Link href="/terms-and-conditions">Syarat dan Ketentuan</Link>
            </span>
          </div>

          <span className={styles.copyright}>
            TM & © 2024 Burger King Corporation. Used Under License. All rights
            reserved.
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
