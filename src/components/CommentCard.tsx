import { css, cx } from "@panda/css";
import { forwardRef } from "react";

interface CommentCardProps extends React.ComponentPropsWithRef<"div"> {
  author: string;
}

const CommentCard = forwardRef(function ({
  className,
  children,
  author,
  ...props
}: CommentCardProps) {
  return (
    <div
      className={cx(
        css({
          backgroundColor: "rgba(247, 247, 247, 0.9)",
          padding: 8,
          borderRadius: 16,
          width: "100%",
          fontWeight: 600,
          fontSize: "1.125rem",
          display: "flex",
          flexDirection: "column",
          gap: 4,
        }),
        className,
      )}
      {...props}
    >
      <p>{children}</p>
      <p className={css({ textAlign: "right" })}>by {author}</p>
    </div>
  );
});

export default CommentCard;
