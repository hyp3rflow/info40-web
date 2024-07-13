import { css } from "@panda/css";
import CommentSection from "~/components/CommentSection";

function FormRoute() {
  return (
    <section
      className={css({
        display: "flex",
        justifyContent: "center",
        flex: 1,
      })}
    >
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

export default FormRoute;
