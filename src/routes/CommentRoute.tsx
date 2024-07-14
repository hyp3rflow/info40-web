import { css } from "@panda/css";
import RouteHeader from "~/components/RouteHeader";
import CommentSection from "~/components/CommentSection";

function CommentRoute() {
  return (
    <section
      className={css({
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        flex: 1,
        gap: 16,
      })}
    >
      <RouteHeader title="교우 게시판" />
      <div
        className={css({
          maxWidth: "1200px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 8,
        })}
      >
        <p className={css({ fontSize: 32, fontWeight: 800 })}>
          정보대학 선후배분들이나 동기분들께 하시고 싶은 말씀을 남겨주세요
        </p>
        <button
          className={css({
            width: "fit-content",
            padding: "16px 24px",
            borderRadius: 16,
            fontSize: 18,
            fontWeight: 600,
            backgroundColor: "#8B0029",
            color: "white",
          })}
        >
          방명록 작성하기
        </button>
      </div>
      <div
        className={css({
          maxWidth: "1200px",
        })}
      >
        <CommentSection />
      </div>
    </section>
  );
}

export default CommentRoute;