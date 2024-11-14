import { css } from "@panda/css";
import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import { SimpleReveal } from "simple-reveal";
import EventLogo from "~/components/EventLogo";
import RouteHeader from "~/components/RouteHeader";
import Typography from "~/components/Typography";
import { events, images, schedule } from "~/data/event";

function EventRoute() {
  return (
    <div>
      <RouteHeader title="" />
      <EventLogoSection />
      <Section1 />
      <Section2 />
      <EventSection />
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
          padding: "6rem 24px",
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
        backgroundColor: "#8B0029",
        flex: 1,
        position: "relative",
      })}
    >
      <img
        className={css({
          width: "100%",
          height: "100%",
          position: "absolute",
          filter: "opacity(10%)",
          objectFit: "cover",
        })}
        src="/informatics.jpeg"
      />
      <div
        className={css({
          width: "100%",
          maxWidth: "1200px",
          display: "flex",
          flexDirection: "column",
          padding: "6rem 24px",
          gap: 8,
          zIndex: 2,
        })}
      >
        <SimpleReveal
          render={({ ref, cn }) => (
            <Typography.h1 ref={ref} className={cn(css({ color: "white" }))}>
              정보대학 40주년 기념 행사에 교우 여러분을 초청합니다
            </Typography.h1>
          )}
        />
        <SimpleReveal
          delay={300}
          render={({ ref, cn, style }) => (
            <Typography.h3
              ref={ref}
              style={style}
              className={cn(css({ color: "white" }))}
            >
              행사 일시: 2024년 11월 22일 (금요일)
            </Typography.h3>
          )}
        />
        <div
          className={css({
            flex: 1,
            display: "flex",
            flexDirection: "column",
            gap: 8,
            backgroundColor: "#f6f7f8f6",
            padding: "24px 28px",
            borderRadius: 24,
          })}
        >
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
                  {schedule.map(({ time, title, place, detail }, idx) => (
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
      </div>
    </section>
  );
}

function EventSection() {
  return (
    <section
      className={css({
        display: "flex",
        justifyContent: "center",
        backgroundColor: "#8B0029",
        flex: 1,
        position: "relative",
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
          color: "white",
        })}
      >
        <div className={css({ width: "100%" })}>
          <Typography.h1>고연전 주점 행사 기념사진</Typography.h1>
        </div>
        <div
          className={css({
            display: "flex",
            gap: 8,
            overflowX: "scroll",
            marginX: "-20px",
          })}
        >
          {images.map((src) => (
            <img
              key={src}
              src={src}
              className={css({
                objectFit: "cover",
                aspectRatio: "auto",
                maxHeight: "500px",
                borderRadius: 8,
              })}
            />
          ))}
        </div>
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
              다양한 기념 이벤트가 진행되었습니다
            </Typography.h1>
          )}
        />
        <ul
          className={css({
            listStyle: "disc outside",
            display: "flex",
            flexDirection: "column",
            gap: 2,
          })}
        >
          {events.map((event) => (
            <SimpleReveal
              render={({ ref, cn }) => (
                <li ref={ref} key={event.title} className={cn()}>
                  <div
                    className={css({
                      display: "flex",
                      flexDirection: "column",
                      gap: 2,
                    })}
                  >
                    <div className={css({ display: "flex", gap: 2 })}>
                      <Typography.h3 key={event.title}>
                        {event.title}
                      </Typography.h3>
                      {event.time && <Typography.p>{event.time}</Typography.p>}
                    </div>
                    {event.place &&
                      (event.placeHref ? (
                        <a
                          href={event.placeHref}
                          className={css({
                            display: "flex",
                            textDecoration: "underline",
                          })}
                        >
                          <Typography.p>{event.place}</Typography.p>
                          <ArrowUpRight />
                        </a>
                      ) : (
                        <Typography.p>{event.place}</Typography.p>
                      ))}
                    {event.description && (
                      <Typography.p
                        className={css({
                          "& > a": {
                            textDecoration: "underline",
                          },
                        })}
                        dangerouslySetInnerHTML={{ __html: event.description }}
                      />
                    )}
                    {event.lecturer && (
                      <div className={css({ display: "flex", gap: 4 })}>
                        <img
                          src={event.lecturer.image}
                          width="150"
                          className={css({ borderRadius: 12 })}
                        />
                        <div>
                          <Link to={event.lecturer.link}>
                            <div className={css({ display: "flex" })}>
                              <Typography.p
                                className={css({ textDecoration: "underline" })}
                              >
                                {event.lecturer.ko}
                              </Typography.p>
                              <ArrowUpRight />
                            </div>
                          </Link>
                          <Typography.p>{event.lecturer.en}</Typography.p>
                          <Typography.p>
                            {event.lecturer.description}
                          </Typography.p>
                        </div>
                      </div>
                    )}
                  </div>
                </li>
              )}
            />
          ))}
        </ul>
      </div>
    </section>
  );
}

export default EventRoute;
