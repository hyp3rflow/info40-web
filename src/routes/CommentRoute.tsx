import { css } from "@panda/css";
import RouteHeader from "~/components/RouteHeader";
import Typography from "~/components/Typography";
import { ChevronLeft } from "lucide-react";
import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { GuestBook } from "~/atoms/commentList";

function CommentRoute() {
  const params = useParams();
  const id = Number(params.id);
  const [post, setPost] = useState<GuestBook>();

  useEffect(() => {
    if (Number.isNaN(id)) return;
    (async () => {
      const url = new URL(`https://kuanniversary.xyz/api/v1/guest-book/${id}`);
      const response = await fetch(url);
      setPost((await response.json()) as GuestBook);
    })();
  }, [id]);

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
            <Typography.p>{post?.head}</Typography.p>
            <Typography.p>{post?.content}</Typography.p>
            <div className={css({ textAlign: "right" })}>
              <Typography.figcaption>by {post?.writer}</Typography.figcaption>
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
            <Typography.p>댓글 {post?.comments?.length}개</Typography.p>
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
