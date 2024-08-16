import { css } from "@panda/css";
import { ArrowUpRight } from "lucide-react";
import { SimpleReveal } from "simple-reveal";
import Typography from "~/components/Typography";

import RouteHeader from "~/components/RouteHeader";

const histories = [
  {
    date: "1983년 9월",
    description: "이과대학 전산과학과 신설",
  },
  {
    date: "1991년 10월",
    description: "공과대학 전파공학과 신설",
  },
  {
    date: "1995년 10월",
    description: "사범대학 컴퓨터교육학과 신설",
  },
  {
    date: "1995년 10월",
    description: "컴퓨터과학기술대학원 신설",
  },
  {
    date: "2001년 8월",
    description: "정보통신대학 신설",
  },
  {
    date: "2006년 3월",
    description: "컴퓨터과학기술대학원 → 컴퓨터정보통신대학원 대학원 명칭 변경",
  },
  {
    date: "2009년 9월",
    description: "대학원 뇌공학과 신설",
  },
  {
    date: "2011년 11월",
    description: "우정정보관 완공 및 입주",
  },
  {
    date: "2014년 3월",
    description: "정보대학 신설 및 정보대학 학사지원부 신설",
    image: {
      src: "infouniv.jpeg",
      caption: "정보대학 출범 기념 식수 행사",
    },
  },
  {
    date: "2015년 9월",
    description: "대학원 컴퓨터학과 신설",
  },
  {
    date: "2019년 9월",
    description: "대학원 인공지능학과 박사과정 신설",
  },
  {
    date: "2021년 3월",
    description: "대학원 인공지능학과 석사과정 신설",
  },
  {
    date: "2021년 3월",
    description: "학부 데이터과학과 신설",
  },
  {
    date: "2024년 3월",
    description: "컴퓨터정보통신대학원 → SW·AI융합대학원 명칭 변경",
  },
  {
    date: "2025년 3월",
    description: "학부 인공지능학과 신설 (예정)",
  },
  {
    date: "2025년 3월",
    description: "정운오 IT 교양관 입주 (예정)",
  },
];

function HistoryRoute() {
  return (
    <div>
      <RouteHeader title="정보대학 현황 및 발전 방향" />
      <Section1 />
      <Section13 />
      <Section12 />
      <Section10 />
      <Section11 />
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
            <Typography.h1
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
            </Typography.h1>
          )}
        />
        <SimpleReveal
          delay={300}
          render={({ ref, cn, style }) => (
            <Typography.h3 ref={ref} style={style} className={cn()}>
              고려대학교 정보대학은 “21세기의 신문화 창출과 디지털 혁명 시대를
              선도하는 SW 전문 인재의 육성”이라는 교육 목표 아래 국내 명문 대학
              중 유일하게 SW 특성화 단과대학으로 설립되었습니다. 정보대학은 SW
              분야의 특성화를 통하여 고려대학교 뿐만 아니라 우리나라 이공계를
              대표하는 대학으로 육성될 것입니다.
            </Typography.h3>
          )}
        />
      </div>
    </section>
  );
}

function Section10() {
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
          padding: "6rem 24px",
          display: "flex",
          flexWrap: "wrap",
          gap: 4,
        })}
      >
        <div
          className={css({
            display: "flex",
            flexDirection: "column",
            gap: 8,
            maxWidth: "600px",
          })}
        >
          <SimpleReveal
            render={({ ref, cn }) => (
              <Typography.h1 ref={ref} className={cn()}>
                Vision: Global Top 50 program by 2030
              </Typography.h1>
            )}
          />
          <SimpleReveal
            render={({ ref, cn }) => (
              <Typography.h2 ref={ref} className={cn()}>
                Computing and AI
              </Typography.h2>
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
                <Typography.h3>
                  미래에 살아남기 위한 필수 기술을 넘어
                </Typography.h3>
                <Typography.h3>
                  모든 영역에서의 차별적 가치 창출의 원천
                </Typography.h3>
              </div>
            )}
          />
          <SimpleReveal
            render={({ ref, cn }) => (
              <Typography.h2 ref={ref} className={cn()}>
                Empowerment
              </Typography.h2>
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
                <Typography.h3>
                  Logical, Analytic, Info-centric한 인재
                </Typography.h3>
                <Typography.h3>
                  한 없는 창의력과 융합을 통한 새 분야 개척
                </Typography.h3>
                <Typography.h3>Global한 국가 경쟁력 제고</Typography.h3>
              </div>
            )}
          />
        </div>
        <img
          src="/image9.png"
          className={css({ borderRadius: 12, objectFit: "cover", flex: 1 })}
        />
      </div>
    </section>
  );
}

function Section11() {
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
              Mission: Empowerment for All
            </Typography.h1>
          )}
        />
        <SimpleReveal
          render={({ ref, cn }) => (
            <Typography.h2 ref={ref} className={cn()}>
              현장 중심 교육와 융합 프로그램 확대로 소프트웨어 전문 인재를
              육성합니다
            </Typography.h2>
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
              <Typography.h3>현장 중심 교육 및 산업체 협력 강화</Typography.h3>
              <Typography.h3>
                융합 프로그램 확대 - 융합 전공, 마이크로 디그리
              </Typography.h3>
              <div>
                <Typography.h3>유연한 맞춤형 교육 프로그램</Typography.h3>
                <Typography.h3>
                  <ul
                    className={css({
                      listStyle: "disc inside",
                      marginLeft: "4px",
                    })}
                  >
                    <li>필수 이수과목 최소화</li>
                    <li>선 실습 - 후 이론</li>
                  </ul>
                </Typography.h3>
              </div>
            </div>
          )}
        />
        <SimpleReveal
          render={({ ref, cn }) => (
            <Typography.h2 ref={ref} className={cn()}>
              연구
            </Typography.h2>
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
              <Typography.h3>도전적 / 개척적 연구</Typography.h3>
              <Typography.h3>학제 / 융합적 연구</Typography.h3>
              <Typography.h3>유연한 평가 및 인센티브 제도</Typography.h3>
            </div>
          )}
        />
        <SimpleReveal
          render={({ ref, cn }) => (
            <Typography.h2 ref={ref} className={cn()}>
              학생
            </Typography.h2>
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
              <Typography.h3>학생 생활 개선</Typography.h3>
              <Typography.h3>고려대 정보대 교우회 활성화</Typography.h3>
              <Typography.h3>특수대학원 - 평생 교육 / 재교육</Typography.h3>
              <Typography.h3>국제화</Typography.h3>
            </div>
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
            <Typography.h1 ref={ref} className={cn()}>
              정보대학 현황
            </Typography.h1>
          )}
        />
        <SimpleReveal
          render={({ ref, cn }) => (
            <Typography.h2 ref={ref} className={cn()}>
              정보대학 교수 및 행정팀
            </Typography.h2>
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
                  flexWrap: "wrap",
                  gap: 8,
                }),
              )}
            >
              <div
                className={css({
                  minWidth: "300px",
                  padding: 10,
                  borderRadius: 24,
                  backgroundColor: "#f2f2f2",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                })}
              >
                <Typography.h2>명예교수</Typography.h2>
                <div
                  className={css({
                    display: "flex",
                    alignItems: "baseline",
                    gap: 1,
                  })}
                >
                  <Typography.h3>7</Typography.h3>
                  <Typography.p>명</Typography.p>
                </div>
              </div>
              <div
                className={css({
                  minWidth: "300px",
                  padding: 10,
                  borderRadius: 24,
                  backgroundColor: "#f2f2f2",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                })}
              >
                <Typography.h2>전임교수</Typography.h2>
                <div
                  className={css({
                    display: "flex",
                    alignItems: "baseline",
                    gap: 1,
                  })}
                >
                  <Typography.h3>58</Typography.h3>
                  <Typography.p>명</Typography.p>
                </div>
              </div>
              <div
                className={css({
                  minWidth: "300px",
                  padding: 10,
                  borderRadius: 24,
                  backgroundColor: "#f2f2f2",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                })}
              >
                <Typography.h2>직원</Typography.h2>
                <div
                  className={css({
                    display: "flex",
                    alignItems: "baseline",
                    gap: 1,
                  })}
                >
                  <Typography.h3>11</Typography.h3>
                  <Typography.p>명</Typography.p>
                </div>
              </div>
            </div>
          )}
        />
        <SimpleReveal
          render={({ ref, cn }) => (
            <Typography.h2 ref={ref} className={cn()}>
              정보대학 학부
            </Typography.h2>
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
                  flexWrap: "wrap",
                  gap: 8,
                }),
              )}
            >
              <div
                className={css({
                  minWidth: "300px",
                  padding: 10,
                  borderRadius: 24,
                  backgroundColor: "#f2f2f2",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                })}
              >
                <Typography.h2>컴퓨터학과</Typography.h2>
                <div
                  className={css({
                    display: "flex",
                    alignItems: "baseline",
                    gap: 1,
                  })}
                >
                  <Typography.h3>1,136</Typography.h3>
                  <Typography.p>명</Typography.p>
                </div>
              </div>
              <div
                className={css({
                  minWidth: "300px",
                  padding: 10,
                  borderRadius: 24,
                  backgroundColor: "#f2f2f2",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                })}
              >
                <Typography.h2>데이터과학과</Typography.h2>
                <div
                  className={css({
                    display: "flex",
                    alignItems: "baseline",
                    gap: 1,
                  })}
                >
                  <Typography.h3>199</Typography.h3>
                  <Typography.p>명</Typography.p>
                </div>
              </div>
            </div>
          )}
        />
        <SimpleReveal
          render={({ ref, cn }) => (
            <Typography.h2 ref={ref} className={cn()}>
              정보대학 일반대학원
            </Typography.h2>
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
                  flexWrap: "wrap",
                  gap: 8,
                }),
              )}
            >
              <div
                className={css({
                  minWidth: "300px",
                  padding: 10,
                  borderRadius: 24,
                  backgroundColor: "#f2f2f2",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                })}
              >
                <Typography.h2>컴퓨터학과</Typography.h2>
                <div
                  className={css({
                    display: "flex",
                    alignItems: "baseline",
                    gap: 1,
                  })}
                >
                  <Typography.h3>498</Typography.h3>
                  <Typography.p>명</Typography.p>
                </div>
              </div>
              <div
                className={css({
                  minWidth: "300px",
                  padding: 10,
                  borderRadius: 24,
                  backgroundColor: "#f2f2f2",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                })}
              >
                <Typography.h2>인공지능학과</Typography.h2>
                <div
                  className={css({
                    display: "flex",
                    alignItems: "baseline",
                    gap: 1,
                  })}
                >
                  <Typography.h3>259</Typography.h3>
                  <Typography.p>명</Typography.p>
                </div>
              </div>
              <div
                className={css({
                  minWidth: "300px",
                  padding: 10,
                  borderRadius: 24,
                  backgroundColor: "#f2f2f2",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                })}
              >
                <Typography.h2>뇌공학과</Typography.h2>
                <div
                  className={css({
                    display: "flex",
                    alignItems: "baseline",
                    gap: 1,
                  })}
                >
                  <Typography.h3>88</Typography.h3>
                  <Typography.p>명</Typography.p>
                </div>
              </div>
              <div
                className={css({
                  minWidth: "300px",
                  padding: 10,
                  borderRadius: 24,
                  backgroundColor: "#f2f2f2",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                })}
              >
                <Typography.h2>영상정보처리협동과정</Typography.h2>
                <div
                  className={css({
                    display: "flex",
                    alignItems: "baseline",
                    gap: 1,
                  })}
                >
                  <Typography.h3>17</Typography.h3>
                  <Typography.p>명</Typography.p>
                </div>
              </div>
              <div
                className={css({
                  minWidth: "300px",
                  padding: 10,
                  borderRadius: 24,
                  backgroundColor: "#f2f2f2",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                })}
              >
                <Typography.h2>컴퓨터·전파통신공학과</Typography.h2>
                <div
                  className={css({
                    display: "flex",
                    alignItems: "baseline",
                    gap: 1,
                  })}
                >
                  <Typography.h3>62</Typography.h3>
                  <Typography.p>명</Typography.p>
                </div>
              </div>
            </div>
          )}
        />
        <SimpleReveal
          render={({ ref, cn }) => (
            <Typography.h2 ref={ref} className={cn()}>
              SW·AI융합대학원
            </Typography.h2>
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
                  flexWrap: "wrap",
                  gap: 8,
                }),
              )}
            >
              <div
                className={css({
                  minWidth: "300px",
                  padding: 10,
                  borderRadius: 24,
                  backgroundColor: "#f2f2f2",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                })}
              >
                <Typography.h2>빅데이터융합학과</Typography.h2>
                <div
                  className={css({
                    display: "flex",
                    alignItems: "baseline",
                    gap: 1,
                  })}
                >
                  <Typography.h3>165</Typography.h3>
                  <Typography.p>명</Typography.p>
                </div>
              </div>
              <div
                className={css({
                  minWidth: "300px",
                  padding: 10,
                  borderRadius: 24,
                  backgroundColor: "#f2f2f2",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                })}
              >
                <Typography.h2>인공지능융합학과</Typography.h2>
                <div
                  className={css({
                    display: "flex",
                    alignItems: "baseline",
                    gap: 1,
                  })}
                >
                  <Typography.h3>104</Typography.h3>
                  <Typography.p>명</Typography.p>
                </div>
              </div>
              <div
                className={css({
                  minWidth: "300px",
                  padding: 10,
                  borderRadius: 24,
                  backgroundColor: "#f2f2f2",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                })}
              >
                <Typography.h2>소프트웨어보안학과</Typography.h2>
                <div
                  className={css({
                    display: "flex",
                    alignItems: "baseline",
                    gap: 1,
                  })}
                >
                  <Typography.h3>47</Typography.h3>
                  <Typography.p>명</Typography.p>
                </div>
              </div>
              <div
                className={css({
                  minWidth: "300px",
                  padding: 10,
                  borderRadius: 24,
                  backgroundColor: "#f2f2f2",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                })}
              >
                <Typography.h2>디지털금융공학과</Typography.h2>
                <div
                  className={css({
                    display: "flex",
                    alignItems: "baseline",
                    gap: 1,
                  })}
                >
                  <Typography.h3>68</Typography.h3>
                  <Typography.p>명</Typography.p>
                </div>
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
            <Typography.h1 ref={ref} className={cn()}>
              정보대학 연혁
            </Typography.h1>
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
                {histories.map(({ date, description, image }, idx) => (
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
                    <Typography.p>{date}</Typography.p>
                    <Typography.h3>{description}</Typography.h3>
                    {image && (
                      <figure
                        className={css({
                          paddingY: 4,
                          display: "flex",
                          flexDirection: "column",
                          gap: 2,
                        })}
                      >
                        <img
                          src={image.src}
                          alt={image.caption}
                          className={css({ borderRadius: 12 })}
                        />
                        <Typography.figcaption>
                          {image.caption}
                        </Typography.figcaption>
                      </figure>
                    )}
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
