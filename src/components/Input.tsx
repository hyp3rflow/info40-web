import { css, cx } from "@panda/css";

interface InputProps extends React.ComponentPropsWithoutRef<"input"> {}

function Input(props: InputProps) {
  return (
    <input
      {...props}
      className={cx(
        css({
          padding: "24px",
          border: "1px solid #aaa",
          borderRadius: "18px",
        }),
        props.className,
      )}
    />
  );
}

export default Input;
