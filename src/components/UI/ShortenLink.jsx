import { useDispatch } from "react-redux";
import styles from "../styles/shortenlink.module.scss";
import { InputButton } from "./InputButton";
import { motion, AnimatePresence } from "framer-motion";
import { IoClose } from "react-icons/io5";
import { deleteLink } from "../../store/slice/linkSlice";

export const ShortenLink = ({
  shortLink,
  link,
  dataActive,
  copyToClipboard,
}) => {
  const dispatch = useDispatch();

  const deleteExistLink = (link) => {
    dispatch(deleteLink(link));
  };

  return (
    <AnimatePresence>
      {(link !== undefined || shortLink !== undefined) && (
        <motion.div
          className={styles.shortenlink}
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          data-active={dataActive}
        >
          <button
            className={styles.close}
            onClick={() => deleteExistLink(link)}
          >
            <IoClose />
          </button>

          <div>
            <p>{link}</p>
          </div>
          <div>
            <p>{shortLink}</p>
            <InputButton
              title={dataActive ? "Copied!" : "Copy"}
              onClick={() => copyToClipboard(shortLink)}
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
