import { css } from "@panda/css";
import RouteHeader from "~/components/RouteHeader";
import CommentSection from "~/components/CommentSection";
import { SimpleReveal } from "simple-reveal";
import { Link } from "react-router-dom";

function CommentListRoute() {
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
            padding: "3rem 24px",
            gap: 8,
          })}
        >
          <div
            className={css({
              maxWidth: "1200px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
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
                <Link
                  to="/write"
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
                </Link>
              )}
            />
          </div>
          <div
            className={css({
              maxWidth: "1200px",
            })}
          >
            <CommentSection />
          </div>
        </div>
      </section>
    </div>
  );
}

export default CommentListRoute;
