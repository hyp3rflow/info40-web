import { css } from "@panda/css";
import { Link } from "react-router-dom";

const menus = [
  {
    content: "행사 소개",
    href: "",
  },
  {
    content: "공지사항",
    href: "",
  },
  {
    content: "교우 게시판",
    href: "",
  },
  {
    content: "교우회 기부",
    href: "",
  },
  {
    content: "고대교우회",
    href: "",
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

          display: "flex",
          justifyContent: "space-between",
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
                <p>{content}</p>
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
          <button>
            <p>로그인</p>
          </button>
          <button>
            <p>회원가입</p>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Gnb;
