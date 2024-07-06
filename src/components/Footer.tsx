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
            whiteSpace: "pre",
            color: "#777777",
          })}
        >
          {`홈페이지 이용약관 | 개인정보 처리방침
[02841] 서울특별시 성북구 안암로 145 고려대학교 서울캠퍼스(자연계) 우정정보관 102호
학부: 02-3290-4132, 4133
대학원: 02-3290-4137, 4138
email: cscoi@korea.ac.kr (대표계정/학부)
email: infograd@korea.ac.kr (대학원)`}
        </div>
      </div>
    </footer>
  );
}

export default Footer;
