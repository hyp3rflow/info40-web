import { css } from "@panda/css";
import { ArrowUpRight } from "lucide-react";
import { SimpleReveal } from "simple-reveal";

import RouteHeader from "~/components/RouteHeader";

const histories = [
  "1983년 9월 이과대학 전산과학과 신설",
  "1991년 10월 공과대학 전파공학과 신설",
  "1995년 10월 사범대학 컴퓨터교육학과 신설",
  "1995년 10월 컴퓨터과학기술대학원 신설",
  "2001년 8월 정보통신대학 신설",
  "2006년 3월 컴퓨터과학기술대학원 → 컴퓨터정보통신대학원 대학원 명칭 변경",
  "2009년 9월 대학원 뇌공학과 신설",
  "2011년 11월 우정정보관 완공 및 입주",
  "2014년 3월 정보대학 신설 및 정보대학 학사지원부 신설",
  "2015년 9월 대학원 컴퓨터학과 신설",
  "2019년 9월 대학원 인공지능학과 박사과정 신설",
  "2021년 3월 대학원 인공지능학과 석사과정 신설",
  "2021년 3월 학부 데이터과학과 신설",
  "2024년 3월 컴퓨터정보통신대학원 → SW·AI융합대학원 명칭 변경",
  "2025년 3월 학부 인공지능학과 신설",
  "2025년 3월 정운오 IT 교양관 입주",
];

function HistoryRoute() {
  return (
    <div>
      <RouteHeader title="정보대학 소개" />
      <Section1 />
      <Section12 />
      <Section13 />
      {/* <Section2 />
      <Section4 /> */}
      {/* <Section3 /> */}
      <Section22 />
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
              정보대학의 최정예 교수진과 최고 수준의 학생들이 세계 SW 연구를
              선도합니다
            </h1>
          )}
        />
        <SimpleReveal
          delay={300}
          render={({ ref, cn, style }) => (
            <p
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
                }),
              )}
            >
              고려대학교 정보대학은 “21세기의 신문화 창출과 디지털 혁명 시대를
              선도하는 SW 전문 인재의 육성”이라는 교육 목표 아래 국내 명문 대학
              중 유일하게 SW 특성화 단과대학으로 설립되었습니다. 정보대학은 SW
              분야의 특성화를 통하여 고려대학교 뿐만 아니라 우리나라 이공계를
              대표하는 대학으로 육성될 것입니다.
            </p>
          )}
        />
      </div>
    </section>
  );
}

function Section12() {
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
              다양한 사업을 통해 교육과 연구를 지원합니다
            </h1>
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
                    base: 32,
                    lgDown: 28,
                    mdDown: 24,
                  },
                  display: "flex",
                  flexDirection: "column",
                  gap: 8,
                }),
              )}
            >
              <div>
                <p>SW중심대학 사업</p>
                <span
                  className={css({
                    fontSize: { base: 26, lgDown: 22, mdDown: 18 },
                    lineHeight: 1.3,
                  })}
                >
                  <p>2015. 10. 01. ~ 2021. 02. 28. (5년 5개월)</p>
                  <p>2023. 05. 01. ~ 2028. 12. 31. (5년 8개월)</p>
                </span>
              </div>
              <div>
                <p>인공지능대학원지원사업</p>
                <p
                  className={css({
                    fontSize: { base: 26, lgDown: 22, mdDown: 18 },
                  })}
                >
                  2019.04.01.~ 2028.12.31. (9년 9개월)
                </p>
              </div>
              <div>
                <p>ICT명품인재</p>{" "}
                <p
                  className={css({
                    fontSize: { base: 26, lgDown: 22, mdDown: 18 },
                  })}
                >
                  2020.07.01.~2029.12.31. (9년 6개월)
                </p>
              </div>
              <div>
                <p>4단계 BK21 컴퓨터학교육연구단</p>
                <p
                  className={css({
                    fontSize: { base: 26, lgDown: 22, mdDown: 18 },
                  })}
                >
                  2020.09.01.~2027.08.31. (7년)
                </p>
              </div>
              <div>
                <p>4단계 BK21 인공지능학교육연구단</p>
                <p
                  className={css({
                    fontSize: { base: 26, lgDown: 22, mdDown: 18 },
                  })}
                >
                  2020.09.01.~2027.08.31. (7년)
                </p>
              </div>
            </div>
          )}
        />
      </div>
    </section>
  );
}

function Section13() {
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
              SW 분야의 특성화를 통하여 우리나라 이공계를 대표하는 대학으로
              육성될 것입니다
            </h1>
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
                  gap: 4,
                }),
              )}
            >
              {histories.map((history) => (
                <div key={history}>
                  <p>{history}</p>
                </div>
              ))}
            </div>
          )}
        />
      </div>
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
                <p>정보대학</p> <p>소식을 확인하세요</p>
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
                    gap: 3,
                  })}
                >
                  <img width="26px" src="/info.jpeg" />
                  <div
                    className={css({ display: "flex", alignItems: "center" })}
                  >
                    <p>정보대학 홈페이지</p>
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

export default HistoryRoute;
