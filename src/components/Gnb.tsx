import { css, cx } from "@panda/css";
import { Link } from "react-router-dom";
import { useAtom } from "jotai";
import { ArrowUpRight } from "lucide-react";
import { menuAtom } from "~/atoms";

const menus = [
  {
    content: "행사 소개",
    href: "/event",
  },
  {
    content: "정보대학 현황 및 발전 방향",
    href: "/history",
  },
  {
    content: "정보대학 기부 Challenge",
    href: "/donate",
    badge: true,
  },
  {
    content: "교우 게시판",
    href: "/comment",
  },
  {
    content: "추억 갤러리",
    href: "/gallery",
  },
];

function Gnb() {
  const [menu, setMenu] = useAtom(menuAtom);
  return (
    <div
      data-state={menu}
      className={css({
        display: "flex",

        justifyContent: "center",
        backgroundColor: "#8B0029",

        lgDown: {
          display: "none",
          "&[data-state=true]": { display: "flex" },
        },
      })}
    >
      <div
        className={css({
          width: "100%",
          maxWidth: "1200px",
          color: "white",
          padding: "16px 24px",

          display: "flex",
          justifyContent: "space-between",

          lgDown: {
            flexDirection: "column",
            minHeight: "calc(100vh - 70px)",
            justifyContent: "initial",
            gap: "24px",
          },
        })}
      >
        <div
          className={css({
            display: "flex",
            alignItems: "center",
            gap: "36px",
            fontWeight: "700",

            lgDown: {
              gap: "24px",
              fontSize: "24px",
              alignItems: "flex-start",
              flexDirection: "column",
            },
          })}
        >
          {menus.map(({ content, href, badge }) => {
            return (
              <Link
                className={cx(
                  css({
                    lgDown: {
                      width: "100%",
                    },
                  }),
                  badge &&
                    css({
                      animation: "blink 1.5s ease infinite",
                      animationDelay: "1s",
                    }),
                )}
                to={href}
                onClick={() => setMenu(false)}
              >
                <div
                  className={css({
                    display: "flex",
                    alignItems: "flex-start",
                  })}
                >
                  <p>{content}</p>
                  {!href.startsWith("/") && (
                    <ArrowUpRight
                      width="16px"
                      height="16px"
                      className={css({ alignSelf: "flex-start" })}
                    />
                  )}
                </div>
              </Link>
            );
          })}
        </div>
        <div
          className={css({
            display: "flex",
            alignItems: "center",
            gap: "42px",
            fontWeight: "600",
            animation: "blink 1.5s ease infinite",
            animationDelay: "1s",
            lgDown: {
              fontSize: "24px",
            },
          })}
        >
          <Link to="/form" onClick={() => setMenu(false)}>
            <div className={css({ display: "flex", gap: 1 })}>
              <p>교우회 등록하기</p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Gnb;
