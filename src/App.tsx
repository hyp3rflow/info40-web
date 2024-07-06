import "@panda/styles.css";

import Header from "./components/Header";
import Gnb from "./components/Gnb";
import Footer from "./components/Footer";
import { SimpleReveal } from "simple-reveal";
import { css } from "@panda/css";

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
        <Section2 />
        <Section3 />
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
            gap: 8,

            fontSize: {
              base: 36,
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
                <div>
                  <p>고려대학교 정보대학 40주년</p>
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
                      base: 48,
                      lgDown: 42,
                      mdDown: 32,
                    },
                    fontWeight: 800,
                    lineHeight: 1.1,
                  })}
                >
                  <p>Pioneering</p>
                  <p>the Next Intelligence</p>
                </div>
              </div>
            )}
          />
        </div>
      </section>
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
                    <p>40명의 교우님들께서 가입했어요</p>
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

function Section3() {
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
          src="/main2.jpg"
        />
        <div
          className={css({
            width: "100%",
            maxWidth: "1200px",
            padding: "48px 24px",
            position: "relative",
            display: "flex",
            flexDirection: "row",
            flexWrap: "wrap",
            gap: 8,
          })}
        >
          <SimpleReveal
            duration={1000}
            initialTransform="translateY(3rem)"
            render={({ ref, cn, style }) => (
              <div
                ref={ref}
                className={cn(
                  css({
                    width: "100%",
                  }),
                )}
                style={style}
              >
                <div
                  className={css({
                    backgroundColor: "rgba(247, 247, 247, 0.9)",
                    border: "1px solid rgba(0, 0, 0, 0.05)",
                    padding: "32px",

                    display: "flex",
                    flexDirection: "column",
                    gap: "24px",
                  })}
                >
                  <p
                    className={css({
                      fontWeight: 700,
                      fontSize: 24,
                    })}
                  >
                    공지사항
                  </p>
                  <div
                    className={css({
                      display: "flex",
                      flexDirection: "column",
                      gap: "8px",
                      color: "#666666",
                    })}
                  >
                    <p>정보대학 40주년 행사 안내</p>
                    <p>정보대학 40주년 행사 안내</p>
                    <p>정보대학 40주년 행사 안내</p>
                    <p>정보대학 40주년 행사 안내</p>
                  </div>
                </div>
              </div>
            )}
          />
          <SimpleReveal
            duration={1000}
            initialTransform="translateY(3rem)"
            render={({ ref, cn, style }) => (
              <div
                ref={ref}
                className={cn(
                  css({
                    width: "100%",
                  }),
                )}
                style={style}
              >
                <div
                  className={css({
                    backgroundColor: "rgba(247, 247, 247, 0.9)",
                    border: "1px solid rgba(0, 0, 0, 0.05)",
                    padding: "32px",

                    display: "flex",
                    flexDirection: "column",
                    gap: "24px",
                  })}
                >
                  <p
                    className={css({
                      fontWeight: 700,
                      fontSize: 24,
                    })}
                  >
                    교우 게시판
                  </p>
                  <div
                    className={css({
                      display: "flex",
                      flexDirection: "column",
                      gap: "8px",
                      color: "#666666",
                    })}
                  >
                    <p>정보대학 40주년 행사 안내</p>
                    <p>정보대학 40주년 행사 안내</p>
                    <p>정보대학 40주년 행사 안내</p>
                    <p>정보대학 40주년 행사 안내</p>
                  </div>
                </div>
              </div>
            )}
          />
        </div>
      </section>
    </section>
  );
}

export default App;
