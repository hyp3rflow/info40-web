import { css } from "@panda/css";
import { Construction } from "lucide-react";

function Header() {
  return (
    <header
      className={css({
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#e5de00",
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
          gap: 4,
        })}
      >
        <Construction />
        <p>
          현재 개발 진행 중인 웹사이트로 행사 내용과 세부 사항은 변경될 수
          있습니다.
        </p>
      </div>
    </header>
  );
}

export default Header;
