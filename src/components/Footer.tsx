import { css } from "@panda/css";
import kuLogo from "/ku-logo.svg";

function Footer() {
  return (
    <footer
      className={css({
        display: "flex",
        justifyContent: "center",
        backgroundColor: "#E0E0E0",
      })}
    >
      <div
        className={css({
          width: "100%",
          maxWidth: "1200px",
          padding: "40px 16px",

          display: "flex",
          gap: "24px",

          mdDown: {
            flexDirection: "column",
          },
        })}
      >
        <div>
          <img
            className={css({
              filter: "grayscale(100%)",
              opacity: "50%",
            })}
            src={kuLogo}
          />
        </div>
        <div
          className={css({
            whiteSpace: "pre-line",
            color: "#777777",
          })}
        >
          <p>홈페이지 이용약관 | 개인정보 처리방침</p>
          <p>
            [02841] 서울특별시 성북구 안암로 145 고려대학교 서울캠퍼스(자연계)
            우정정보관 102호
          </p>
          <p>학부: 02-3290-4132, 4133</p>
          <p>대학원: 02-3290-4137, 4138</p>
          <p>
            <a href="mailto:cscoi@korea.ac.kr">cscoi@korea.ac.kr</a>{" "}
            (대표계정/학부)
          </p>
          <p>
            <a href="mailto:infograd@korea.ac.kr">infograd@korea.ac.kr</a>{" "}
            (대학원)
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
