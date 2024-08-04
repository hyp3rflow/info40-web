import { css } from "@panda/css";
import RouteHeader from "~/components/RouteHeader";
import Typography from "~/components/Typography";
import { ChevronLeft } from "lucide-react";
import { Link } from "react-router-dom";

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
            padding: "3rem 24px 0px",
            gap: 8,
          })}
        >
          <Link
            to="/comment"
            className={css({ display: "flex", alignItems: "center", gap: 2 })}
          >
            <ChevronLeft />
            <Typography.p>교우 게시판 돌아가기</Typography.p>
          </Link>
          <div
            className={css({
              backgroundColor: "#f2f2f2",
              padding: 8,
              borderRadius: 12,
            })}
          >
            <Typography.p>정보대학 40주년 행사 너무 기대됩니다.</Typography.p>
            <Typography.p>
              많은 교우분들을 뵐 수 있었으면 좋겠어요!
            </Typography.p>
            <div className={css({ textAlign: "right" })}>
              <Typography.figcaption>by 유승은</Typography.figcaption>
            </div>
          </div>
          <div
            className={css({
              backgroundColor: "#f2f2f2",
              borderRadius: 12,
              padding: 8,
              display: "flex",
              flexDirection: "column",
              gap: 6,
            })}
          >
            <Typography.p>댓글 0개</Typography.p>
            <textarea
              className={css({
                backgroundColor: "white",
                width: "100%",
                minHeight: "100px",
                borderRadius: 12,
              })}
            />
            <div
              className={css({
                display: "flex",
                flexWrap: "wrap",
                gap: 4,
                alignItems: "center",
                justifyContent: "space-between",
              })}
            >
              <Typography.figcaption>
                댓글은 관리자의 확인 후 게재됩니다.
              </Typography.figcaption>
              <button
                className={css({
                  padding: "16px 24px",
                  backgroundColor: "#8B0029",
                  color: "white",
                  borderRadius: "999px",
                })}
              >
                댓글 작성하기
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default CommentRoute;
