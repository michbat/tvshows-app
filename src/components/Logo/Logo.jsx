import styles from "./styles.module.css";

export const Logo = ({ img, title, subtitle }) => {
  return (
    <>
      <div className={styles.container}>
        <img className={styles.image} src={img} alt={title} />
        <div className={styles.title}>{title}</div>
      </div>
      <div className={styles.subtitle}>{subtitle}</div>
    </>
  );
};
