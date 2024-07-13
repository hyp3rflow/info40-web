import { css } from "@panda/css";
import CommentCard from "./CommentCard";
import { SimpleReveal } from "simple-reveal";

function CommentSection() {
  return (
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
      })}
    >
      <CommentColumn />
      <CommentColumn />
      <CommentColumn />
    </div>
  );
}

function CommentColumn() {
  return (
    <div
      className={css({
        display: "flex",
        flexDirection: "column",
        gap: 8,
        width: "100%",
      })}
    >
      {[...Array(5)].map((_, idx) => (
        <SimpleReveal
          key={idx}
          delay={idx * 500}
          render={({ ref, cn, style }) => (
            <div ref={ref} className={cn()} style={style}>
              <CommentCard author="유승은">
                정보대학 40주년 행사 너무 기대됩니다. 많은 동문분들을 뵐 수
                있었으면 좋겠어요!
              </CommentCard>
            </div>
          )}
        />
      ))}
    </div>
  );
}

export default CommentSection;
