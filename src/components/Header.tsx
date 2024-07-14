import { css } from "@panda/css";
import { Link } from "react-router-dom";
import { useAtom } from "jotai";
import { Menu } from "lucide-react";

import kuLogo from "/ku-logo.svg";
import kuSimpleLogo from "/ku.svg";
import { menuAtom } from "~/atoms/gnb";

function Header() {
  const [, setMenu] = useAtom(menuAtom);
  return (
    <header
      className={css({
        display: "flex",
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
          padding: "16px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        })}
      >
        <Link to="/">
          <div
            className={css({
              display: "flex",
              alignItems: "center",
              gap: "8px",
            })}
          >
            <img
              className={css({
                display: "inherit",
                lg: {
                  display: "none",
                },
              })}
              src={kuSimpleLogo}
            />
            <img
              className={css({
                display: "none",
                lg: {
                  display: "inherit",
                },
              })}
              src={kuLogo}
            />
            <div
              className={css({
                fontWeight: "700",
                fontSize: {
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
