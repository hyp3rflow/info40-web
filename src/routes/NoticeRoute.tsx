import { css } from "@panda/css";
import RouteHeader from "~/components/RouteHeader";

function NoticeRoute() {
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
      <RouteHeader title="공지사항" />
    </section>
  );
}

export default NoticeRoute;
