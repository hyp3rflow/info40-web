import { css } from "@panda/css";
import CommentCard from "./CommentCard";
import { SimpleReveal } from "simple-reveal";
import Pagination from "./Pagination";
import { useNavigate } from "react-router-dom";
import { useAtom, useAtomValue } from "jotai";
import {
  commentListAtom,
  commentListPageAtom,
  commentListTotalPageAtom,
} from "~/atoms/commentList";

function CommentSection() {
  const navigate = useNavigate();
  const comments = useAtomValue(commentListAtom);
  const [current, setCurrent] = useAtom(commentListPageAtom);
  const total = useAtomValue(commentListTotalPageAtom);
  return (
    <div
      className={css({
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 8,
      })}
    >
      <div
        className={css({
          width: "100%",
          display: "grid",
          gridTemplateColumns: {
            base: "1fr 1fr 1fr",
            lgDown: "1fr 1fr",
            mdDown: "1fr",
          },
          gap: 8,
          lgDown: {
            padding: "0 24px",
          },
          mdDown: {
            padding: 0,
          },
        })}
      >
        {comments.map((comment, idx) => (
          <SimpleReveal
            key={idx}
            delay={idx * 300}
            render={({ ref, cn, style }) => (
              <div ref={ref} className={cn()} style={style}>
                <CommentCard
                  author={comment.writer}
                  onClick={() => {
                    return;
                    navigate(`/comment/${comment.id}`);
                  }}
                >
                  {comment.head}
                </CommentCard>
              </div>
            )}
          />
        ))}
      </div>
      <Pagination current={current} total={total} onButtonClick={setCurrent} />
    </div>
  );
}

export default CommentSection;
