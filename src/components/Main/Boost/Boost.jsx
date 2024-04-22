import { ActionButton } from "../../UI/ActionButton";
import styles from "./boost.module.scss";

export const Boost = () => {
  return (
    <div className={styles.boost}>
      <h2>Boost your links today</h2>
      <ActionButton title={"Get Started"} />
    </div>
  );
};
