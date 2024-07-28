import { css } from "@panda/css";
import { ArrowUpRight } from "lucide-react";
import { SimpleReveal } from "simple-reveal";

import RouteHeader from "~/components/RouteHeader";

function DonationRoute() {
  return (
    <div>
      <RouteHeader title="정보대학 기부" />
      <Section1 />
      <Section2 />
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
              무한경쟁 속 정보대학의 발전을 위해 교우님들의 기부금이 절실합니다
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
              정보대가 지난 40년 동안 우리나라 IT 산업과 연구 역량을 발전
              시키는데 큰 역할을 해왔지만, 어느 때 보다 큰 도전에 직면 해 있기도
              합니다. 미래 핵심 산업 영역으로서 국내는 물론 해외 대학들은 IT
              분야 프로그램들을 확장 하고 큰 투자를 아끼지 않고 있습니다.
              고려대학교 정보대학도 본부의 적극적인 지원 속에서, 그간 학부에서는
              데이타과학과 및 인공지능학과, 대학원에서는 인공지능학과 및
              뇌공학과의 신설을 통해 지속적으로 규모를 키워 나아가고 있고, 또
              그만큼의 사회적, 국가적, Global 적인 영향력도 커질 것입니다.
            </p>
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
              교수님 수도 2-3년에 80여명 이상이 되고, 정보대 학생 총 규모도
              (학부/대학원/특수대학원 및 타대학 소속 관심 학생등) 도 약 3000명은
              넘어서는 등 전망 입니다. 이런 상황과 무한 경쟁 속에서 더욱 발전
              하기 위해서 교우님들의 적극적인 관심과 도움이 필요 합니다! 특히
              쾌적한 교육/연구 공간확보 및 유지 보수, 교수 유치/정착 기금, 학생
              장학금 등의 부문에서 재정적 확충과 교우님들의 기부금이 절실
              합니다. 교우분의 성원을 부탁 드립니다.
            </p>
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
                }),
              )}
            >
              <p>고려대학교 대외협력처를 통해서 기부 약정이 가능합니다</p>
              <p>
                후원 목적에서 "기관 및 용도 지정"을 선택하신 후, 정보대학을
                입력해주세요.
              </p>
              <p>후원 용도 지정은 아래와 같은 명목으로 가능합니다.</p>
              <p>일반 정보대 발전 기금</p>
              <p>교육/연구 공간 확보 및 유지 보수 기금</p>
              <p>우수 교수 유치 기금</p>
              <p>학생 생활 및 활동 지원</p>
              <p>40주년 행사 지원</p>
            </div>
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
                }),
              )}
            >
              <a
                target="_blank"
                href="https://give.korea.ac.kr/front/give/actKupGive.do"
                className={css({
                  width: "fit-content",
                  padding: "24px 24px",
                  borderRadius: 16,
                  fontSize: 18,
                  fontWeight: 600,
                  backgroundColor: "#8B0029",
                  color: "white",
                  display: "flex",
                })}
              >
                정보대학 기부하기
                <ArrowUpRight />
              </a>
            </div>
          )}
        />
      </div>
    </section>
  );
}

export default DonationRoute;
