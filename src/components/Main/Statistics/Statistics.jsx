import styles from "./statistics.module.scss";
import statisticsData from "../../../data";
import { StatisticsItem } from "../../UI/StatisticsItem";
import { useSelector } from "react-redux";
import { ShortenLink } from "../../UI/ShortenLink";
import { useState } from "react";

export const Statistics = () => {
  const [copiedValue, setCopiedValue] = useState("");
  const { items } = useSelector((state) => state.links);

  const copyToClipboard = (link) => {
    window.navigator.clipboard.writeText(link).then(() => {
      setCopiedValue(link);
    });
  };

  return (
    <div className={styles.statistics}>
      <div>
        {items && (
          <div style={{ display: "flex", flexDirection: "column" }}>
            {items.map((item, idx) => (
              <ShortenLink
                {...item}
                key={idx}
                dataActive={item.shortLink === copiedValue}
                copyToClipboard={copyToClipboard}
              />
            ))}
          </div>
        )}
        <h2>Advanced Statistics</h2>
        <h3>
          Track how your links are performing across the web with our advanced
          statistics dashboard.
        </h3>
        {statisticsData.map((item, idx) => {
          return <StatisticsItem {...item} key={idx} />;
        })}
      </div>
    </div>
  );
};
