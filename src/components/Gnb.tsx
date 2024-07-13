import { css } from "@panda/css";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";

const menus = [
  {
    content: "행사 소개",
    href: "/event",
  },
  {
    content: "공지사항",
    href: "/notice",
  },
  {
    content: "교우 게시판",
    href: "/comment",
  },
  {
    content: "정보대학 기부",
    href: "https://give.korea.ac.kr/front/give/actKupGive.do",
  },
  {
    content: "고대교우회",
    href: "https://www.kuaa.or.kr/index.do",
  },
];

function Gnb() {
  return (
    <div
      className={css({
        display: "flex",
        justifyContent: "center",
        backgroundColor: "#8B0029",
      })}
    >
      <div
        className={css({
          width: "100%",
          maxWidth: "1200px",
          color: "white",
          padding: "16px",

          display: "none",
          justifyContent: "space-between",

          lg: {
            display: "flex",
          },
        })}
      >
        <div
          className={css({
            display: "flex",
            alignItems: "center",
            gap: "42px",

            fontWeight: "700",
          })}
        >
          {menus.map(({ content, href }) => {
            return (
              <Link to={href}>
                <div
                  className={css({ display: "flex", alignItems: "flex-start" })}
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
          })}
        >
          <Link to="/form">
            <p>신청하기</p>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Gnb;
