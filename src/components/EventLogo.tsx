import { css } from "@panda/css";

export default function EventLogo() {
  return (
    <div
      className={css({
        display: "flex",
        alignItems: "center",
        gap: 8,
        flexWrap: "wrap",
      })}
    >
      <img src="/40logo.png" width="150px" />
      <div
        className={css({
          fontWeight: 500,
          fontSize: {
            base: 42,
            lgDown: 36,
            mdDown: 22,
          },
        })}
      >
        <p>고려대학교 정보대학 설립 40주년</p>
        <p>Pioneering the Next Intelligence</p>
      </div>
    </div>
  );
}
