import { css } from "@panda/css";
import { SimpleReveal } from "simple-reveal";
import RouteHeader from "~/components/RouteHeader";

function EventRoute() {
  return (
    <div>
      <RouteHeader title="정보대학 40주년 기념 행사 소개" />
      <EventLogo />
      <Section1 />
    </div>
  );
}

function EventLogo() {
  return (
    <section
      className={css({
        display: "flex",
        justifyContent: "center",
        flex: 1,
      })}
    >
      <div
        className={css({
          width: "100%",
          maxWidth: "1200px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "6rem 24px",
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
    </section>
  );
}

function Section1() {
  return (
    <section
      className={css({
        display: "flex",
        justifyContent: "center",
        flex: 1,
      })}
    >
      <div
        className={css({
          width: "100%",
          maxWidth: "1200px",
          display: "flex",
          flexDirection: "column",
          padding: "6rem 24px",
          gap: 8,
        })}
      >
        <SimpleReveal
          render={({ ref, cn }) => (
            <h1
              ref={ref}
              className={cn(
                css({
                  fontWeight: "700",
                  fontSize: {
                    base: 48,
                    lgDown: 42,
                    mdDown: 36,
                  },
                }),
              )}
            >
              정보대학 40주년 기념 행사에 교우 여러분을 초청합니다
            </h1>
          )}
        />
        <SimpleReveal
          render={({ ref, cn }) => (
            <h2
              ref={ref}
              className={cn(
                css({
                  fontWeight: "700",
                  fontSize: {
                    base: 36,
                    lgDown: 32,
                    mdDown: 28,
                  },
                }),
              )}
            >
              행사 일시: 2024년 11월 22일 (금요일)
            </h2>
          )}
        />
        <SimpleReveal
          delay={300}
          render={({ ref, cn, style }) => (
            <div
              ref={ref}
              style={style}
              className={cn(
                css({
                  fontWeight: "600",
                  lineHeight: 1.5,
                  fontSize: {
                    base: 26,
                    lgDown: 24,
                    mdDown: 22,
                  },
                  display: "flex",
                  flexDirection: "column",
                  gap: 2,
                }),
              )}
            >
              <p>초청 및 Ticketing: 준비 중</p>
            </div>
          )}
        />
        <SimpleReveal
          render={({ ref, cn }) => (
            <h2
              ref={ref}
              className={cn(
                css({
                  fontWeight: "700",
                  fontSize: {
                    base: 36,
                    lgDown: 32,
                    mdDown: 28,
                  },
                }),
              )}
            >
              행사 식순
            </h2>
          )}
        />
        <SimpleReveal
          delay={300}
          render={({ ref, cn, style }) => (
            <div
              ref={ref}
              style={style}
              className={cn(
                css({
                  fontWeight: "600",
                  lineHeight: 1.5,
                  fontSize: {
                    base: 26,
                    lgDown: 24,
                    mdDown: 22,
                  },
                  display: "flex",
                  flexDirection: "column",
                  gap: 2,
                }),
              )}
            >
              <div
                className={css({
                  display: "grid",
                  gridTemplateColumns: "auto 1fr",
                  gap: 4,
                  "& > aside": {
                    textAlign: "right",
                  },
                })}
              >
                <aside>4:00</aside>
                <p>기념 식수세미나 (우정정보관 앞 정원)</p>
                <aside>4:30 ~ 5:30</aside>
                <p>기념 세미나 (하나스퀘어)</p>
                <aside>6:00 ~ 7:00</aside>
                <div>
                  <p>기념 행사 (하나스퀘어)</p>
                  <div>
                    <p>총장 축사</p>
                    <p>정보대 연혁 보고 및 발전 방향 발표</p>
                    <p>감사패/공로패 시상</p>
                    <p>여흥의 시간</p>
                  </div>
                </div>
                <aside>7:00 ~</aside>
                <p>Standing buffet</p>
              </div>
            </div>
          )}
        />
      </div>
    </section>
  );
}

export default EventRoute;
