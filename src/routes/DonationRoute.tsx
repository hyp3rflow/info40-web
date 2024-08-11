import { css } from "@panda/css";
import { ArrowUpRight } from "lucide-react";
import { SimpleReveal } from "simple-reveal";

import RouteHeader from "~/components/RouteHeader";
import Typography from "~/components/Typography";

function DonationRoute() {
  return (
    <div>
      <RouteHeader title="정보대학 기부 Challenge" />
      <DonationLogo />
      <Section0 />
      <Section1 />
    </div>
  );
}

function DonationLogo() {
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
          padding: "6rem 24px 0px",
          gap: 8,
        })}
      >
        <SimpleReveal
          render={({ ref, cn }) => (
            <div ref={ref} className={cn()}>
              <Typography.h2>2024년 정보대학 창립 40주년 기념</Typography.h2>
              <Typography.h2>
                발전 Seed 기금 10억 마련 기부 Challenge
              </Typography.h2>
            </div>
          )}
        />
      </div>
    </section>
  );
}

function Section0() {
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
              정보대학을 사랑하는 모든 분들께!
            </Typography.h1>
          )}
        />
        <SimpleReveal
          delay={500}
          render={({ ref, cn, style }) => (
            <Typography.h3 ref={ref} style={style} className={cn()}>
              정보대학은 지난 40년 동안 대한민국 IT 산업 및 연구의 선도 역할을
              담당했습니다. 창립 40주년인 올해를 새로 도약하는 원년으로 삼아
              급변하는 세계 속에서 인공지능학과와 뇌공학과 등 미래의 첨단 학문과
              산업을 발전시켜 한국사회의 정보화 미래를 책임질, 새로운 기틀을
              마련하고자 기부 챌린지를 시작합니다.
            </Typography.h3>
          )}
        />
        <SimpleReveal
          delay={700}
          render={({ ref, cn, style }) => (
            <Typography.h3 ref={ref} style={style} className={cn()}>
              고려대학교 정보대학이라면 할 수 있다고 믿습니다! 목표액은 2024년
              11월 창립 40주년 행사 기간까지 10억 원입니다. 정보대학을 사랑하는
              여러분의 따뜻한 마음이면 금액에 상관없이 언제든지 환영 합니다.
            </Typography.h3>
          )}
        />
        <SimpleReveal
          delay={200}
          render={({ ref, cn, style }) => (
            <Typography.h3 ref={ref} style={style} className={cn()}>
              투명한 기부를 위해 정보대학 발전 기금은 고려대학교 대외협력처를
              통해 모금되고 있습니다. 아래 '기부처 페이지'에 접속하신 후
              기부금을 보내주시면 됩니다. 감사합니다.
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
                  fontSize: 24,
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
          padding: "2rem 24px 4rem",
          gap: 20,
        })}
      >
        <SimpleReveal
          render={({ ref, cn, style }) => (
            <div
              ref={ref}
              style={style}
              className={cn(css({ display: "flex", gap: 4, flexWrap: "wrap" }))}
            >
              <div
                className={css({
                  flex: 5,
                  "& > p + p": { textIndent: 6 },
                  minWidth: "200px",
                })}
              >
                <Typography.p>
                  정보대가 지난 40년 동안 우리나라 IT 산업과 연구 역량을 발전
                  시키는데 큰 역할을 해왔지만, 어느 때 보다 큰 도전에 직면 해
                  있기도 합니다. 미래 핵심 산업 영역으로서 국내는 물론 해외
                  대학들은 IT 분야 프로그램들을 확장 하고 큰 투자를 아끼지 않고
                  있습니다.
                </Typography.p>
                <Typography.p>
                  고려대학교 정보대학도 본부의 적극적인 지원 속에서, 그간
                  학부에서는 데이터과학과 및 인공지능학과, 대학원에서는
                  인공지능학과 및 뇌공학과의 신설을 통해 지속적으로 규모를 키워
                  나아가고 있고, 또 그만큼의 사회적, 국가적, 글로벌 영향력도
                  커질 것입니다.
                </Typography.p>
              </div>
              <figure className={css({ flex: 3, minWidth: "200px" })}>
                <img
                  src="infodonate-1.jpeg"
                  className={css({ borderRadius: 12 })}
                />
              </figure>
            </div>
          )}
        />
        <SimpleReveal
          delay={200}
          render={({ ref, cn, style }) => (
            <div
              ref={ref}
              style={style}
              className={cn(css({ display: "flex", gap: 6, flexWrap: "wrap" }))}
            >
              <figure className={css({ flex: 3, minWidth: "200px" })}>
                <img
                  src="infodonate-2.jpeg"
                  className={css({ borderRadius: 12 })}
                />
              </figure>
              <div
                className={css({
                  flex: 5,
                  minWidth: "200px",
                })}
              >
                <Typography.p>
                  교수님 수도 2-3년에 80여명 이상이 되고, 정보대 학생 총 규모도
                  (학부/대학원/특수대학원 및 타대학 소속 관심 학생등) 도 약
                  3000명은 넘어서는 등 전망 입니다. 이런 상황과 무한 경쟁 속에서
                  더욱 발전 하기 위해서 교우님들의 적극적인 관심과 도움이 필요
                  합니다! 특히 쾌적한 교육/연구 공간확보 및 유지 보수, 교수
                  유치/정착 기금, 학생 장학금 등의 부문에서 재정적 확충과
                  교우님들의 기부금이 절실 합니다. 교우분의 성원을 부탁
                  드립니다.
                </Typography.p>
              </div>
            </div>
          )}
        />
      </div>
    </section>
  );
}

export default DonationRoute;
