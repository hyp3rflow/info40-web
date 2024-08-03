import React from "react";
import { css, cx } from "@panda/css";

type TypographyProps = React.ComponentPropsWithoutRef<"p">;
const h1 = React.forwardRef<HTMLParagraphElement, TypographyProps>(
  (props, ref) => {
    return (
      <p
        {...props}
        ref={ref}
        className={cx(
          css({
            fontWeight: "700",
            textWrap: "balance",
            fontSize: {
              base: 48,
              lgDown: 42,
              mdDown: 36,
            },
          }),
          props.className,
        )}
      />
    );
  },
);
const h2 = React.forwardRef<HTMLParagraphElement, TypographyProps>(
  (props, ref) => {
    return (
      <p
        {...props}
        ref={ref}
        className={cx(
          css({
            lineHeight: 1.5,
            fontWeight: "700",
            textWrap: "balance",
            fontSize: {
              base: 42,
              lgDown: 38,
              mdDown: 32,
            },
          }),
          props.className,
        )}
      />
    );
  },
);
const h3 = React.forwardRef<HTMLParagraphElement, TypographyProps>(
  (props, ref) => {
    return (
      <p
        {...props}
        ref={ref}
        className={cx(
          css({
            lineHeight: 1.5,
            fontWeight: "600",
            textWrap: "balance",
            fontSize: {
              base: 32,
              lgDown: 28,
              mdDown: 24,
            },
          }),
          props.className,
        )}
      />
    );
  },
);
const p = React.forwardRef<HTMLParagraphElement, TypographyProps>(
  (props, ref) => {
    return (
      <p
        {...props}
        ref={ref}
        className={cx(
          css({
            fontWeight: "600",
            lineHeight: 1.5,
            fontSize: { base: 26, lgDown: 22, mdDown: 18 },
          }),
          props.className,
        )}
      />
    );
  },
);
const figcaption = React.forwardRef<
  HTMLElement,
  React.ComponentPropsWithoutRef<"figcaption">
>((props, ref) => {
  return (
    <figcaption
      {...props}
      ref={ref}
      className={cx(
        css({
          fontWeight: "600",
          lineHeight: 1.5,
          fontSize: { base: 22, lgDown: 18, mdDown: 16 },
        }),
        props.className,
      )}
    />
  );
});

export default { h1, h2, h3, p, figcaption };
