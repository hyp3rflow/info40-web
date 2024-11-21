import { css, cx } from "@panda/css";
import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import { SimpleReveal } from "simple-reveal";

import { events, images, schedule } from "~/data/event";
import Typography from "~/components/Typography";
import CommentCard from "~/components/CommentCard";
import { useAtomValue } from "jotai";
import { mainCommentsAtom } from "~/atoms/commentList";
import { Suspense } from "react";
import { alumniCountAtom } from "~/atoms/alumni";
import ErrorBoundary from "~/components/ErrorBoundary";
import { donates } from "~/data/donate";

function App() {
  return (
    <div>
      <Section1 />
      <Divider />
      <Section3 />
      <ErrorBoundary fallback="">
        <Suspense>
          <Section2 />
        </Suspense>
      </ErrorBoundary>
      <ErrorBoundary fallback="">
        <Suspense>
          <Section4 />
        </Suspense>
      </ErrorBoundary>
    </div>
  );
}

function Section1() {
  return (
    <div
      className={css({
        display: "flex",
        justifyContent: "center",
        flex: 1,
      })}
    >
      <section
        className={css({
          width: "100%",
          minHeight: "calc(50vh)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",

          position: "relative",
        })}
      >
        <video
          autoPlay
          playsInline
          muted
          loop
          className={css({
            width: "100%",
            height: "100%",
            position: "absolute",
            filter: "brightness(80%)",
            objectFit: "cover",
          })}
        >
          <source
            src="https://bucket-dw9769.s3.ap-northeast-2.amazonaws.com/background.mp4"
            type="video/mp4"
          />
        </video>
        <div
          className={css({
            width: "100%",
            maxWidth: "1200px",
            padding: "48px 24px",
            position: "relative",
            color: "white",

            display: "flex",
            flexDirection: "column",
            gap: 8,
          })}
        >
          <div
            className={css({
              display: "flex",
              flexWrap: "wrap",
              gap: 8,
            })}
          >
            <SimpleReveal
              duration={1000}
              initialTransform="translateY(3rem)"
              render={({ ref, cn, style }) => (
                <div ref={ref} className={cn()} style={style}>
                  <img
                    src="/main.png"
                    className={css({ maxWidth: "750px", width: "100%" })}
                  />
                </div>
              )}
            />
            <div
              className={css({
                flex: 1,
                display: "flex",
                flexDirection: "column",
                gap: 3,
                fontSize: { base: 22, lgDown: 18, mdDown: 16 },
                fontWeight: 600,
                minWidth: "fit-content",
              })}
            >
              <Typography.figcaption>다가오는 행사</Typography.figcaption>
              <div
                className={css({
                  display: "flex",
                  flexDirection: "column",
                  borderRadius: "18px",
                  backgroundColor: "rgba(139, 0, 41, 0.9)",
                  padding: 5,
                })}
              >
                <Typography.p className={css({ fontWeight: 700 })}>
                  정보대학 40주년 기념 행사
                </Typography.p>
                <p>우정정보관, 하나스퀘어</p>
                <p>2024년 11월 22일</p>
              </div>
            </div>
          </div>
          <div
            className={css({
              flex: 1,
              display: "flex",
              flexDirection: "column",
              gap: 3,
              fontSize: { base: 22, lgDown: 18, mdDown: 16 },
              fontWeight: 600,
              minWidth: "fit-content",
            })}
          >
            <div
              className={css({
                display: "grid",
                gridTemplateColumns: "repeat(3, auto)",
                gap: 2,
                borderRadius: "18px",
                backgroundColor: "rgba(139, 0, 41, 0.9)",
                padding: 5,
              })}
            >
              <Typography.figcaption className={css({ textAlign: "right" })}>
                총 기부액 36,100,500원
              </Typography.figcaption>
              <Typography.figcaption className={css({ textAlign: "right" })}>
                교우회 등록자 수 167명
              </Typography.figcaption>
            </div>
          </div>
          <div
            className={css({
              flex: 1,
              display: "flex",
              flexDirection: "column",
              gap: 3,
              fontSize: { base: 22, lgDown: 18, mdDown: 16 },
              fontWeight: 600,
              minWidth: "fit-content",
            })}
          >
            <Typography.figcaption>기부 약정 목록</Typography.figcaption>
            <div
              className={css({
                display: "flex",
                flexDirection: "column",
                gap: 2,
                borderRadius: "18px",
                backgroundColor: "rgba(139, 0, 41, 0.9)",
                padding: 5,
                alignItems: "center",
              })}
            >
              <Typography.figcaption>
                향후 개관되는 IT 교양관의 디스플레이를 통해 기부자분들의 성함을
                영구적으로 새겨 넣을 계획입니다.
              </Typography.figcaption>
            </div>
            <div
              className={css({
                display: "grid",
                gridTemplateColumns: "repeat(3, auto)",
                gap: 2,
                borderRadius: "18px",
                backgroundColor: "rgba(139, 0, 41, 0.9)",
                padding: 5,
              })}
            >
              {donates.map((donate) => {
                return (
                  <>
                    <Typography.figcaption>
                      {donate.title}
                    </Typography.figcaption>
                    <div>
                      <Typography.figcaption>
                        {donate.name}
                      </Typography.figcaption>
                      <Typography.figcaption>
                        {donate.detail}
                      </Typography.figcaption>
                    </div>
                    <Typography.figcaption>{donate.date}</Typography.figcaption>
                  </>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

function Divider() {
  return (
    <div
      className={css({
        borderBlock: "6px solid #8B0029",
        paddingBlock: 4,
        fontSize: 36,
        fontWeight: 800,
        color: "#8B0029",
        overflow: "hidden",
        lgDown: {
          fontSize: 28,
          borderBlockWidth: "4px",
          paddingBlock: 3,
        },
        mdDown: {
          fontSize: 22,
          paddingBlock: 2,
        },
      })}
    >
      <div
        className={css({
          animation: "scroll 10s linear infinite",
          transform: "translate3d(0, 0, 0)",
        })}
      >
        <p
          className={css({
            display: "flex",
            width: "max-content",
            gap: 8,
          })}
        >
          <span>고려대학교 정보대학 40주년</span>
          <span>Pioneering the Next Intelligence</span>
          <span>고려대학교 정보대학 40주년</span>
          <span>Pioneering the Next Intelligence</span>
          <span>고려대학교 정보대학 40주년</span>
          <span>Pioneering the Next Intelligence</span>
          <span>고려대학교 정보대학 40주년</span>
          <span>Pioneering the Next Intelligence</span>
          <span>고려대학교 정보대학 40주년</span>
          <span>Pioneering the Next Intelligence</span>
          <span>고려대학교 정보대학 40주년</span>
          <span>Pioneering the Next Intelligence</span>
        </p>
      </div>
    </div>
  );
}

function Section2() {
  const count = useAtomValue(alumniCountAtom);
  return (
    <section
      className={css({
        display: "flex",
        justifyContent: "center",
        flex: 1,
      })}
    >
      <section
        className={css({
          width: "100%",
          display: "flex",
          padding: "6rem 0",
          alignItems: "center",
          justifyContent: "center",
          mdDown: {
            padding: 0,
          },
        })}
      >
        <div
          className={css({
            width: "100%",
            maxWidth: "1200px",
            height: "30rem",
            position: "relative",
            display: "flex",
            flexDirection: "column",
            gap: 8,

            fontSize: 24,
            fontWeight: 800,

            borderRadius: "24px",
            margin: "0 16px",
            mdDown: {
              borderRadius: 0,
              margin: 0,
            },

            overflow: "hidden",
          })}
        >
          <img
            className={css({
              width: "100%",
              height: "100%",
              position: "absolute",
              filter: "brightness(70%)",
              objectFit: "cover",
            })}
            src="/main-compressed.jpg"
          />
          <div
            className={css({
              color: "white",
              padding: "32px",
              height: "100%",

              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              gap: "2rem",
            })}
          >
            <SimpleReveal
              duration={1000}
              initialTransform="translateY(3rem)"
              render={({ ref, cn, style }) => (
                <div ref={ref} className={cn()} style={style}>
                  <div
                    className={css({
                      fontSize: {
                        base: 32,
                        lgDown: 28,
                        mdDown: 22,
                      },
                      fontWeight: 700,
                      lineHeight: 1.1,
                      textAlign: "center",
                    })}
                  >
                    <p>정보대학 교우회에 등록해주세요</p>
                  </div>
                </div>
              )}
            />
            <SimpleReveal
              delay={500}
              duration={1000}
              initialTransform="translateY(3rem)"
              render={({ ref, cn, style }) => (
                <div ref={ref} className={cn()} style={style}>
                  <div
                    className={css({
                      fontSize: {
                        base: 36,
                        lgDown: 28,
                        mdDown: 24,
                      },
                      fontWeight: 700,
                      textAlign: "center",
                    })}
                  >
                    <p>40주년 행사 기념을 위해</p>
                    <p>{count}명의 교우님들께서 등록했습니다</p>
                  </div>
                </div>
              )}
            />
            <SimpleReveal
              delay={500}
              duration={1000}
              render={({ ref, cn, style }) => (
                <Link
                  ref={ref}
                  to="/form"
                  style={style}
                  className={cn(
                    css({
                      width: "fit-content",
                      padding: "24px 24px",
                      borderRadius: 16,
                      fontSize: 18,
                      fontWeight: 600,
                      backgroundColor: "#8B0029",
                      color: "white",
                    }),
                  )}
                >
                  등록하기
                </Link>
              )}
            />
          </div>
        </div>
      </section>
    </section>
  );
}

function Section3() {
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
      <section
        className={css({
          width: "100%",
          maxWidth: "1200px",
          display: "flex",
          padding: "6rem 0",
          alignItems: "center",
          flexDirection: "column",
          margin: "0 16px",
          gap: 16,
          zIndex: 2,
        })}
      >
        <div className={css({ width: "100%", color: "white" })}>
          <Typography.h2>정보대학 40주년 기념 행사</Typography.h2>
          <Typography.h3>2024년 11월 22일 (금)</Typography.h3>
          <Typography.h3>우정정보관 및 하나스퀘어</Typography.h3>
        </div>
        <div
          className={css({
            display: "flex",
            width: "100%",
            flexWrap: "wrap",
            gap: 6,
            lgDown: {
              flexDirection: "column",
            },
          })}
        >
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
            <Typography.h2>행사 식순</Typography.h2>
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
          <div
            className={css({
              flex: 1,
              display: "flex",
              flexDirection: "column",
              gap: 4,
              backgroundColor: "#f6f7f8f6",
              padding: "24px 28px",
              borderRadius: 24,
            })}
          >
            <Typography.h2>40주년 기념 이벤트</Typography.h2>
            <div
              className={css({
                display: "flex",
                flexDirection: "column",
                gap: 4,
              })}
            >
              {events.map((event) => (
                <div
                  key={event.title}
                  className={cx(
                    css({
                      display: "flex",
                      flexDirection: "column",
                      gap: 2,
                      position: "relative",
                    }),
                    // event.upcoming &&
                    //   css({
                    //     borderRight: "4px solid rgb(139, 0, 41)",
                    //     _before: {
                    //       content: '"Upcoming"',
                    //       padding: "4px 10px",
                    //       borderRadius: 999,
                    //       backgroundColor: "rgb(139, 0, 41)",
                    //       color: "white",
                    //       position: "absolute",
                    //       transform: "translate(16px, -100%)",
                    //       fontWeight: 700,

                    //       right: 0,
                    //     },
                    //   }),
                  )}
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
              ))}
            </div>
          </div>
        </div>
        <div
          className={css({
            width: "100%",
            maxWidth: "1200px",
            display: "flex",
            flexDirection: "column",
            gap: 8,
            color: "white",
          })}
        >
          <div className={css({ width: "100%" })}>
            <Typography.h2>고연전 주점 행사 기념사진</Typography.h2>
          </div>
          <div
            className={css({
              display: "flex",
              gap: 8,
              overflowX: "scroll",
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
        <div
          className={css({
            width: "100%",
            maxWidth: "1200px",
            height: "30rem",
            position: "relative",
            display: "flex",
            flexDirection: "column",
            gap: 8,

            fontSize: 24,
            fontWeight: 800,

            borderRadius: "24px",
            margin: "0 16px",
            mdDown: {
              borderRadius: 0,
              margin: 0,
            },

            overflow: "hidden",
          })}
        >
          <img
            className={css({
              width: "100%",
              height: "100%",
              position: "absolute",
              filter: "brightness(60%)",
              objectFit: "cover",
            })}
            src="/informatics.jpeg"
          />
          <div
            className={css({
              color: "white",
              padding: "32px",
              height: "100%",

              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              gap: "2rem",
            })}
          >
            <SimpleReveal
              duration={1000}
              initialTransform="translateY(3rem)"
              render={({ ref, cn, style }) => (
                <div ref={ref} className={cn()} style={style}>
                  <div
                    className={css({
                      fontSize: {
                        base: 32,
                        lgDown: 28,
                        mdDown: 22,
                      },
                      fontWeight: 700,
                      lineHeight: 1.1,
                      textAlign: "center",
                    })}
                  >
                    <p>
                      정보대학 발전 Seed 기금 마련 기부 챌린지에 동참해주세요
                    </p>
                  </div>
                </div>
              )}
            />
            <SimpleReveal
              delay={500}
              duration={1000}
              initialTransform="translateY(3rem)"
              render={({ ref, cn, style }) => (
                <div ref={ref} className={cn()} style={style}>
                  <div
                    className={css({
                      fontSize: {
                        base: 36,
                        lgDown: 28,
                        mdDown: 24,
                      },
                      fontWeight: 700,
                      textAlign: "center",
                    })}
                  >
                    <p>정보대학 발전의 기틀을 마련하기 위해</p>
                    <p>10억 원의 Seed 기금이 필요합니다</p>
                  </div>
                </div>
              )}
            />
            <SimpleReveal
              delay={500}
              duration={1000}
              render={({ ref, cn, style }) => (
                <Link
                  ref={ref}
                  to="/donate"
                  style={style}
                  className={cn(
                    css({
                      width: "fit-content",
                      padding: "24px 24px",
                      borderRadius: 16,
                      fontSize: 18,
                      fontWeight: 600,
                      backgroundColor: "#8B0029",
                      color: "white",
                    }),
                  )}
                >
                  기부 챌린지 동참하기
                </Link>
              )}
            />
          </div>
        </div>
      </section>
    </section>
  );
}

function Section4() {
  const comments = useAtomValue(mainCommentsAtom);
  return (
    <section
      className={css({
        display: "flex",
        justifyContent: "center",
        flex: 1,
      })}
    >
      <section
        className={css({
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "6rem 0",

          position: "relative",
        })}
      >
        <img
          className={css({
            width: "100%",
            height: "100%",
            position: "absolute",
            filter: "brightness(70%)",
            objectFit: "cover",
          })}
          src="/main2-compressed.jpg"
        />
        <div
          className={css({
            width: "100%",
            maxWidth: "1200px",
            padding: "48px 24px",
            position: "relative",
            gap: 24,

            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          })}
        >
          <SimpleReveal
            render={({ ref, style }) => (
              <div ref={ref} style={style}>
                <div>
                  <p
                    className={css({
                      fontSize: {
                        base: 48,
                        lgDown: 36,
                        mdDown: 24,
                      },
                      fontWeight: 700,
                      lineHeight: 1.1,
                      color: "white",
                    })}
                  >
                    방명록을 남겨주세요
                  </p>
                </div>
              </div>
            )}
          />
          <SimpleReveal
            delay={500}
            duration={1000}
            render={({ ref, cn, style }) => (
              <Link
                ref={ref}
                to="/comment"
                style={style}
                className={cn(
                  css({
                    width: "fit-content",
                    padding: "24px 24px",
                    borderRadius: 16,
                    fontSize: 18,
                    fontWeight: 600,
                    backgroundColor: "#8B0029",
                    color: "white",
                  }),
                )}
              >
                교우 게시판 방문하기
              </Link>
            )}
          />
          <div
            className={css({
              width: "100%",
              display: "grid",
              gridTemplateColumns: {
                base: "1fr 1fr 1fr",
                lgDown: "1fr 1fr",
                mdDown: "1fr",
              },
              gap: 8,
              lgDown: {
                padding: "0 24px",
              },
              mdDown: {
                padding: 0,
              },
            })}
          >
            {comments.slice(0, 6).map((comment, idx) => (
              <SimpleReveal
                key={idx}
                delay={idx * 300}
                render={({ ref, cn, style }) => (
                  <div ref={ref} className={cn()} style={style}>
                    <CommentCard author={comment.writer}>
                      {comment.content}
                    </CommentCard>
                  </div>
                )}
              />
            ))}
          </div>
        </div>
      </section>
    </section>
  );
}

export default App;
