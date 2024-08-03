import { css } from "@panda/css";
import { SimpleReveal } from "simple-reveal";
import EventLogo from "~/components/EventLogo";
import RouteHeader from "~/components/RouteHeader";
import Typography from "~/components/Typography";
import { event } from "~/data/event";

function EventRoute() {
  return (
    <div>
      <RouteHeader title="정보대학 40주년 기념 행사 소개" />
      <EventLogoSection />
      <Section1 />
      <Section2 />
    </div>
  );
}

function EventLogoSection() {
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
          padding: "6rem 24px 0px",
          flexWrap: "wrap",
        })}
      >
        <EventLogo />
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
            <Typography.h1 ref={ref} className={cn()}>
              정보대학 40주년 기념 행사에 교우 여러분을 초청합니다
            </Typography.h1>
          )}
        />
        <SimpleReveal
          delay={300}
          render={({ ref, cn, style }) => (
            <Typography.h3 ref={ref} style={style} className={cn()}>
              행사 일시: 2024년 11월 22일 (금요일)
            </Typography.h3>
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
                  display: "flex",
                  flexDirection: "column",
                  gap: 2,
                }),
              )}
            >
              <Typography.h3>초청 및 Ticketing: 준비 중</Typography.h3>
            </div>
          )}
        />
        <SimpleReveal
          render={({ ref, cn }) => (
            <Typography.h2 ref={ref} className={cn()}>
              행사 식순
            </Typography.h2>
          )}
        />
        <SimpleReveal
          delay={300}
          render={({ ref, cn, style }) => (
            <div
              ref={ref}
              style={style}
              className={cn(css({ display: "flex" }))}
            >
              <div
                className={css({
                  width: "10px",
                  height: "100%",
                  backgroundColor: "#e6e6e6",
                  marginLeft: 4,
                  marginRight: 8,
                  borderRadius: "999px",
                  flexShrink: 0,
                })}
              />
              <div
                className={css({
                  display: "flex",
                  flexDirection: "column",
                  gap: 4,
                })}
              >
                {event.map(({ time, title, place, detail }, idx) => (
                  <div
                    key={idx}
                    className={css({
                      position: "relative",
                      _before: {
                        width: "26px",
                        height: "26px",
                        content: "''",
                        backgroundColor: "#d9d9d9",
                        borderRadius: "999px",
                        top: 2,
                        left: "-50px",
                        position: "absolute",
                      },
                    })}
                  >
                    <div className={css({ display: "flex", gap: 3 })}>
                      <Typography.p>{time}</Typography.p>

                      {place && (
                        <>
                          <div
                            className={css({
                              width: "2px",
                              backgroundColor: "rgba(0,0,0,0.2)",
                            })}
                          />
                          <Typography.p>{place}</Typography.p>
                        </>
                      )}
                    </div>
                    <Typography.h3>{title}</Typography.h3>
                    {detail?.map((item) => (
                      <Typography.p key={item}>{item}</Typography.p>
                    ))}
                  </div>
                ))}
              </div>
            </div>
          )}
        />
      </div>
    </section>
  );
}

function Section2() {
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
            <Typography.h1 ref={ref} className={cn()}>
              다양한 40주년 기념 이벤트가 준비되어 있습니다
            </Typography.h1>
          )}
        />
        <SimpleReveal
          render={({ ref, cn }) => (
            <Typography.h3 ref={ref} className={cn()}>
              40주년 고연전 주점 행사
            </Typography.h3>
          )}
        />
        <SimpleReveal
          render={({ ref, cn }) => (
            <Typography.h3 ref={ref} className={cn()}>
              AI 해커톤 (2024년 10월 22-23일)
            </Typography.h3>
          )}
        />
      </div>
    </section>
  );
}

export default EventRoute;
