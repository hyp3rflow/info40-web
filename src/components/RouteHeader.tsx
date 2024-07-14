import { css } from "@panda/css";
import { SimpleReveal } from "simple-reveal";

interface RouteHeaderProps {
  title: string;
}
function RouteHeader({ title }: RouteHeaderProps) {
  return (
    <div
      className={css({
        width: "100%",
        position: "relative",
        height: "20rem",
        display: "flex",
        alignItems: "flex-end",
        justifyContent: "center",
      })}
    >
      <img
        src="/main-compressed.jpg"
        className={css({
          width: "100%",
          height: "20rem",
          objectFit: "cover",

          position: "absolute",
          filter: "brightness(80%)",
        })}
      />
      <SimpleReveal
        render={({ ref, cn }) => (
          <p
            ref={ref}
            className={cn(
              css({
                position: "relative",
                width: "100%",
                maxWidth: "1200px",
                padding: "48px 16px",
                display: "flex",

                fontSize: {
                  base: 42,
                  lgDown: 32,
                  mdDown: 24,
                },
                fontWeight: 800,

                color: "white",
              }),
            )}
          >
            {title}
          </p>
        )}
      />
    </div>
  );
}

export default RouteHeader;
