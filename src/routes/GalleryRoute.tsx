import { css } from "@panda/css";
import RouteHeader from "~/components/RouteHeader";
import CommentSection from "~/components/CommentSection";
import { SimpleReveal } from "simple-reveal";
import Typography from "~/components/Typography";

function GalleryRoute() {
  return (
    <div>
      <RouteHeader title="추억 갤러리" />
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
              <Typography.h1 ref={ref} className={cn()}>
                정보대학 교우 여러분의
                <br />
                소중한 추억이 담긴 사진을 공유해주세요
              </Typography.h1>
            )}
          />
          <SimpleReveal
            render={({ ref, cn }) => (
              <div
                ref={ref}
                className={cn(
                  css({
                    display: "flex",
                    justifyContent: "center",
                    padding: "24px 24px",
                    borderRadius: 16,
                    backgroundColor: "#f2f2f2",
                  }),
                )}
              >
                <Typography.p>
                  이메일로 추억이 담긴 사진을 보내주시면 갤러리에
                  추가해드립니다.
                </Typography.p>
              </div>
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

export default GalleryRoute;
