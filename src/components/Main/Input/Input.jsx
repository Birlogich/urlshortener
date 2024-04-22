import { InputButton } from "../../UI/InputButton";
import styles from "./input.module.scss";
import { useForm } from "react-hook-form";
import { createShortLink } from "../../../store/slice/linkSlice";
import { useDispatch, useSelector } from "react-redux";

export const Input = () => {
  const dispatch = useDispatch();
  const { status } = useSelector((state) => state.links);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    mode: "onSubmit",
  });
  const onSubmit = (data) => {
    dispatch(createShortLink(data.link));
    reset();
  };

  const expression =
    /(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,})/gi;
  const regex = new RegExp(expression);

  const validationOptions = {
    ...register("link", {
      required: "Link is required",
      pattern: {
        value: regex,
        message: "Please enter a valid link",
      },
    }),
  };

  return (
    <div className={styles.container}>
      <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
        <input
          {...validationOptions}
          type="text"
          placeholder="Shorten a link here"
        />
        {errors.link && <p className={styles.error}>{errors?.link?.message}</p>}
        {status === "rejected" && (
          <p className={styles.error}>Unprocessable Content</p>
        )}
        <InputButton title={"Shorten It!"} copied={false} />
      </form>
    </div>
  );
};
