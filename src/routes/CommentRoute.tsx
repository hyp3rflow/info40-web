import { css } from "@panda/css";
import RouteHeader from "~/components/RouteHeader";
import CommentSection from "~/components/CommentSection";
import { SimpleReveal } from "simple-reveal";

function CommentRoute() {
  return (
    <div>
      <RouteHeader title="교우 게시판" />
      <section
        className={css({
          display: "flex",
          justifyContent: "center",
          flex: 1,
        })}
      >
        <div
          className={css({
            width: "100%",
            maxWidth: "1200px",
            display: "flex",
            flexDirection: "column",
            padding: "6rem 24px 0px",
            gap: 8,
          })}
        >
          <SimpleReveal
            render={({ ref, cn }) => (
              <p
                ref={ref}
                className={cn(
                  css({ fontSize: 32, fontWeight: 800, padding: "24px" }),
                )}
              >
                정보대학 교우 여러분의 소중한 추억을 남겨주세요
              </p>
            )}
          />
          <SimpleReveal
            render={({ ref, cn }) => (
              <button
                ref={ref}
                className={cn(
                  css({
                    width: "fit-content",
                    padding: "24px 24px",
                    borderRadius: 16,
                    fontSize: 18,
                    fontWeight: 600,
                    backgroundColor: "#8B0029",
                    color: "white",
                  }),
                )}
              >
                방명록 작성하기
              </button>
            )}
          />
        </div>
      </section>
      <section
        className={css({
          display: "flex",
          justifyContent: "center",
          flex: 1,
        })}
      >
        <div
          className={css({
            width: "100%",
            maxWidth: "1200px",
            display: "flex",
            flexDirection: "column",
            padding: "6rem 24px",
            gap: 8,
          })}
        >
          <CommentSection />
        </div>
      </section>
    </div>
  );
}

export default CommentRoute;
