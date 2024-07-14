import { css } from "@panda/css";
import RouteHeader from "~/components/RouteHeader";

function FormRoute() {
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
    </section>
  );
}

export default FormRoute;
