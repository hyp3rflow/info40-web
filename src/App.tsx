import "@panda/styles.css";

import { css } from "@panda/css";
import { ArrowUpRight } from "lucide-react";
import { SimpleReveal } from "simple-reveal";

import Header from "./components/Header";
import Gnb from "./components/Gnb";
import Footer from "./components/Footer";
import Counter from "./components/Counter";
import CommentSection from "./components/CommentSection";

function App() {
  return (
    <div>
      <div
        className={css({
          width: "100%",
          position: "sticky",
          top: 0,
          left: 0,
          zIndex: 999,
        })}
      >
        <Header />
        <Gnb />
      </div>
      <main
        className={css({
          display: "flex",
          flexDirection: "column",
          minHeight: "100vh",
          position: "relative",
        })}
      >
        <Section1 />
        <Divider />
        <Section2 />
        <Section4 />
        {/* <Section3 /> */}
        <Section22 />
        <Footer />
      </main>
    </div>
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
      <section
        className={css({
          width: "100%",
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",

          position: "relative",
        })}
      >
        <img
          className={css({
            height: "100%",
            position: "absolute",
            filter: "brightness(90%)",
            objectFit: "cover",
          })}
          src="/main.jpg"
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
    </section>
  );
}

function Divider() {
  return (
    <div
      className={css({
        borderBlock: "6px solid #8B0029",
        paddingBlock: 4,
        fontSize: {
          base: 36,
        },
        fontWeight: 800,
        color: "#8B0029",
        overflow: "hidden",
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
            src="/main.jpg"
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
                    })}
                  >
                    <p>행사에 참석하여 자리를 빛내주세요</p>
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
                    <p>
                      <Counter value={40} />
                      명의 교우님들께서 가입했어요
                    </p>
                  </div>
                </div>
              )}
            />
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
            },

            // backgroundColor: "#f2f2f2",
          })}
        >
          <div
            className={css({
              padding: "32px",
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
                  fontSize: 32,
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
          src="/main2.jpg"
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
          <CommentSection />
        </div>
      </section>
    </section>
  );
}

export default App;
