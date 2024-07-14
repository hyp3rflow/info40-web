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
      <RouteHeader title="등록하기" />
    </section>
  );
}

export default FormRoute;
