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
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      })}
    >
      <video
        autoPlay
        playsInline
        muted
        loop
        className={css({
          width: "100%",
          height: "20rem",
          objectFit: "cover",
          filter: "brightness(70%)",
        })}
      >
        <source
          src="https://bucket-dw9769.s3.ap-northeast-2.amazonaws.com/background.mp4"
          type="video/mp4"
        />
      </video>
      <SimpleReveal
        render={({ ref, cn }) => (
          <p
            ref={ref}
            className={cn(
              css({
                position: "relative",
                width: "100%",
                maxWidth: "1200px",
                padding: "24px",
                display: "flex",

                fontSize: {
                  base: 38,
                  lgDown: 32,
                  mdDown: 28,
                },
                fontWeight: 800,
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
