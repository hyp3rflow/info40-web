import { css } from "@panda/css";
import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import { SimpleReveal } from "simple-reveal";

import { events, schedule } from "~/data/event";
import Typography from "~/components/Typography";
import CommentCard from "~/components/CommentCard";
import { useAtomValue } from "jotai";
import { mainCommentsAtom } from "~/atoms/commentList";
import { Suspense } from "react";

function App() {
  return (
    <div>
      <Section1 />
      <Divider />
      <Section3 />
      {false && (
        <>
          <Section2 />
          <DonateSection />
        </>
      )}
      <Suspense>
        <Section4 />
      </Suspense>
      <Section22 />
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
          minHeight: "calc(70vh)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",

          position: "relative",
        })}
      >
        <img
          className={css({
            width: "100%",
            height: "100%",
            position: "absolute",
            filter: "brightness(80%)",
            objectFit: "cover",
          })}
          src="/informatics.jpeg"
        />
        <div
          className={css({
            width: "100%",
            maxWidth: "1200px",
            padding: "48px 24px",
            position: "relative",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 8,

            fontSize: {
              base: 42,
              lgDown: 32,
              mdDown: 24,
            },
            fontWeight: 800,

            color: "white",
          })}
        >
          <SimpleReveal
            duration={1000}
            initialTransform="translateY(3rem)"
            render={({ ref, cn, style }) => (
              <div ref={ref} className={cn()} style={style}>
                <img src="/main.png" />
              </div>
            )}
          />
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
                    <p>40명의 교우님들께서 등록했습니다</p>
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

function DonateSection() {
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
                    <p>정보대학 발전의 기틀을 마련할 기부 챌린지에</p>
                    <p>10억 원의 기부금을 유치해주셨습니다</p>
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
                  {event.place && <Typography.p>{event.place}</Typography.p>}
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
      </section>
    </section>
  );
}

function Section22() {
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
          maxWidth: "1200px",
          display: "flex",
          padding: "6rem 0",
          alignItems: "center",
          justifyContent: "center",

          mdDown: {
            flexDirection: "column",
          },
        })}
      >
        <div
          className={css({
            width: "100%",

            height: "30rem",
            position: "relative",
            display: "flex",
            flexDirection: "column",
            gap: 8,

            borderRadius: "24px",
            margin: "0 16px",
            mdDown: {
              borderRadius: 0,
              margin: 0,
              height: "auto",
              paddingBottom: "2rem",
            },
          })}
        >
          <div
            className={css({
              padding: "24px",
              paddingBlock: 0,
              height: "100%",

              display: "flex",
              gap: "2rem",
            })}
          >
            <div
              className={css({
                display: "flex",
                flexDirection: "column",
                gap: "2rem",
              })}
            >
              <div
                className={css({
                  fontSize: {
                    base: 32,
                    lgDown: 28,
                    mdDown: 24,
                  },
                  fontWeight: 800,
                })}
              >
                <p>정보대학 교우회</p> <p>소식을 확인하세요</p>
              </div>
            </div>
          </div>
        </div>
        <div
          className={css({
            width: "100%",

            height: "30rem",
            position: "relative",
            display: "flex",
            flexDirection: "column",
            gap: 8,

            borderRadius: "24px",
            margin: "0 16px",
            mdDown: {
              borderRadius: 0,
              margin: 0,
            },

            backgroundColor: "#f2f2f2",
          })}
        >
          <div
            className={css({
              padding: "32px",
              height: "100%",
            })}
          >
            <div
              className={css({
                display: "flex",
                flexDirection: "column",
                gap: "2rem",
              })}
            >
              <div
                className={css({
                  fontSize: 28,
                  fontWeight: 600,
                })}
              >
                <div
                  className={css({
                    display: "flex",
                    alignItems: "center",
                    gap: 2,
                  })}
                >
                  <img width="30px" src="/insta-gradient.png" />
                  <div
                    className={css({ display: "flex", alignItems: "center" })}
                  >
                    <p>인스타그램</p>
                    <ArrowUpRight
                      className={css({ alignSelf: "flex-start" })}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className={css({
            width: "100%",
            height: "30rem",
            position: "relative",
            display: "flex",
            flexDirection: "column",
            gap: 8,

            borderRadius: "24px",
            margin: "0 16px",
            mdDown: {
              borderRadius: 0,
              margin: 0,
            },

            backgroundColor: "#f2f2f2",
          })}
        >
          <div
            className={css({
              padding: "32px",
              height: "100%",
            })}
          >
            <div
              className={css({
                display: "flex",
                flexDirection: "column",
                gap: "2rem",
              })}
            >
              <div
                className={css({
                  fontSize: 28,
                  fontWeight: 600,
                })}
              >
                <div
                  className={css({
                    display: "flex",
                    alignItems: "center",
                    gap: 2,
                  })}
                >
                  <img width="30px" src="/fb.png" />
                  <div
                    className={css({ display: "flex", alignItems: "center" })}
                  >
                    <p>페이스북</p>
                    <ArrowUpRight
                      className={css({ alignSelf: "flex-start" })}
                    />
                  </div>
                </div>
              </div>
            </div>
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
            <CommentColumn comments={comments.slice(0, 2)} delay={0} />
            <CommentColumn comments={comments.slice(0, 2)} delay={200} />
            <CommentColumn comments={comments.slice(0, 2)} delay={400} />
          </div>
        </div>
      </section>
    </section>
  );
}

interface Comment {
  id: number;
  head: string;
  content: string;
  writer: string;
}

interface CommentColumnProps {
  delay: number;
  comments: Comment[];
}

function CommentColumn({ delay, comments }: CommentColumnProps) {
  return (
    <div
      className={css({
        display: "flex",
        flexDirection: "column",
        gap: 8,
        width: "100%",
      })}
    >
      {comments.map((comment, idx) => (
        <SimpleReveal
          key={idx}
          delay={delay + idx * 300}
          render={({ ref, cn, style }) => (
            <div ref={ref} className={cn()} style={style}>
              <CommentCard author={comment.writer}>{comment.head}</CommentCard>
            </div>
          )}
        />
      ))}
    </div>
  );
}

export default App;
