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
          <p>
            [02841] 서울특별시 성북구 안암로 145 고려대학교 서울캠퍼스(자연계)
            우정정보관 102호
          </p>
          <p>
            02-3290-4135{" "}
            <span>
              <a href="mailto:cscoi@korea.ac.kr">cscoi@korea.ac.kr</a>
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
