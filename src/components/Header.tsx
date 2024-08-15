import { css } from "@panda/css";
import { Link } from "react-router-dom";
import { useAtom } from "jotai";
import { Menu } from "lucide-react";

import KuLogo from "/info.jpeg";
import AnniLogo from "/40logo.png";
import { menuAtom } from "~/atoms";

function Header() {
  const [, setMenu] = useAtom(menuAtom);
  return (
    <header
      className={css({
        display: "flex",
        height: "70px",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "rgba(255, 255, 255, 0.8)",
        borderBottom: "1px solid #e9ecef",
        backdropFilter: "blur(20px)",
      })}
    >
      <div
        className={css({
          width: "100%",
          maxWidth: "1200px",
          padding: "16px 24px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        })}
      >
        <Link to="/" onClick={() => setMenu(false)}>
          <div
            className={css({
              display: "flex",
              alignItems: "center",
              gap: "8px",
            })}
          >
            <img
              className={css({
                height: "40px",
              })}
              src={KuLogo}
            />
            <img
              className={css({
                height: "40px",
              })}
              src={AnniLogo}
            />
            <div
              className={css({
                fontWeight: "500",
                fontSize: {
                  base: 18,
                  mdDown: 14,
                },
              })}
            >
              <p>고려대학교 정보대학 40주년</p>
              <p>Pioneering the Next Intelligence</p>
            </div>
          </div>
        </Link>
        <div
          className={css({
            display: "none",
            lgDown: {
              display: "inherit",
            },
          })}
        >
          <button onClick={() => setMenu((v) => !v)}>
            <Menu />
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;
