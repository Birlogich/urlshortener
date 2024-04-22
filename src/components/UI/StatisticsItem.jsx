import styles from "../styles/statisticsItem.module.scss";

export const StatisticsItem = ({ image, title, subtitle }) => {
  return (
    <div className={styles.statisticsItem}>
      <p>{title}</p>
      <p>{subtitle}</p>
      <img src={image} />
      <div></div>
    </div>
  );
};
