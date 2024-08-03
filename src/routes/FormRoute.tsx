import { useState } from "react";
import { css } from "@panda/css";
import { ArrowUpRight } from "lucide-react";
import { SimpleReveal } from "simple-reveal";
import { useNavigate } from "react-router-dom";

import Input from "~/components/Input";
import Typography from "~/components/Typography";
import RouteHeader from "~/components/RouteHeader";

function FormRoute() {
  return (
    <div
      className={css({
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        flex: 1,
        gap: 8,
        marginBottom: 16,
      })}
    >
      <RouteHeader title="교우회 등록하기" />
      <Section1 />
      <FormSelect />
    </div>
  );
}

function FormSelect() {
  const [toggle, setToggle] = useState(true);
  return (
    <section
      className={css({
        width: "100%",
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
          padding: "4rem 24px",
          gap: 8,
        })}
      >
        <div
          className={css({
            display: "flex",
            fontSize: 32,
            fontWeight: 800,
            gap: 8,
            flexWrap: "wrap",
            "& > button": {
              opacity: 0.4,
              marginBottom: "4px",
              textAlign: "start",
            },
            "& > [data-selected=true]": {
              opacity: 1,
              borderBottom: "4px solid black",
              boxSizing: "content-box",
              marginBottom: 0,
            },
          })}
        >
          <button onClick={() => setToggle(true)} data-selected={toggle}>
            정보대학 교우회 등록하기
          </button>
          <button onClick={() => setToggle(false)} data-selected={!toggle}>
            고려대학교 교우회에서 직접 등록하기
          </button>
        </div>
        {toggle ? <DirectForm /> : <IndirectForm />}
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
      })}
    >
      <div
        className={css({
          width: "100%",
          maxWidth: "1200px",
          display: "flex",
          flexDirection: "column",
          padding: "4rem 24px",
          gap: 8,
        })}
      >
        <SimpleReveal
          render={({ ref, cn }) => (
            <Typography.h1 ref={ref} className={cn()}>
              새롭게 결성되는 정보대학 교우회에 등록해주세요
            </Typography.h1>
          )}
        />
        <SimpleReveal
          delay={300}
          render={({ ref, cn, style }) => (
            <Typography.p ref={ref} style={style} className={cn()}>
              컴퓨터학과가 1984년 이과대학 소속으로 출범 하고, 지난 40여년간
              조직 체계가 바뀌고, 또한 다른 학과와의 통폐합으로 현재
              정보대학으로 이르는 과정에서 정보대 교우회가 제대로 확립/활성화
              되어 오지 못했습니다.
            </Typography.p>
          )}
        />
        <SimpleReveal
          delay={300}
          render={({ ref, cn, style }) => (
            <Typography.p ref={ref} style={style} className={cn()}>
              이번 정보대학 역사 40주년을 기점으로 하여 교우회를 다시 한번
              정비/재결성 하고 고려대 전체 교우회 산하의 정식 조직으로 출범
              하려고 합니다.
            </Typography.p>
          )}
        />
        <SimpleReveal
          delay={300}
          render={({ ref, cn, style }) => (
            <Typography.p ref={ref} style={style} className={cn()}>
              정보대 교우회는 전산학과 (1984년 설립 / 현 컴퓨터학과),
              컴퓨터교육학과 및 컴퓨터과학기술대학원 (1995년 설립 / 현 SW-AI
              융합대학원), 컴퓨터통신학부 (2001년~2013년), IT 최고위 과정
              (1998년 ~ 2015년), 데이터 과학과 (2018년 설립), 일반 대학원
              (컴퓨터학과, 인공지능학과, 뇌공학과) 등 졸업생 및 교우들을
              소속인으로 삼습니다.
            </Typography.p>
          )}
        />
        <SimpleReveal
          delay={300}
          render={({ ref, cn, style }) => (
            <Typography.p ref={ref} style={style} className={cn()}>
              아래의 입력 폼을 통하여 성명, 출신 학과, 입학년도, 주소/연락처등을
              기입해 주시면 정보대 교우회 및 전체 교우회 회원으로 입적해 드리고
              소정의 기념품을 전달 해 드립니다.
            </Typography.p>
          )}
        />
      </div>
    </section>
  );
}

function DirectForm() {
  const navigate = useNavigate();
  return (
    <div
      className={css({
        maxWidth: "1200px",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        gap: 8,
      })}
    >
      <div
        className={css({ display: "flex", flexDirection: "column", gap: 4 })}
      >
        <p className={css({ fontSize: 24, fontWeight: 600 })}>이름</p>
        <Input
          placeholder="이름을 입력하세요"
          className={css({ width: "20rem" })}
        />
      </div>
      <div
        className={css({ display: "flex", flexDirection: "column", gap: 4 })}
      >
        <p className={css({ fontSize: 24, fontWeight: 600 })}>전화번호</p>
        <Input
          placeholder="전화번호를 입력하세요"
          className={css({ width: "20rem" })}
        />
      </div>
      <div
        className={css({ display: "flex", flexDirection: "column", gap: 4 })}
      >
        <p className={css({ fontSize: 24, fontWeight: 600 })}>성별</p>
        <Input
          placeholder="성별을 입력하세요"
          className={css({ width: "20rem" })}
        />
      </div>
      <div
        className={css({ display: "flex", flexDirection: "column", gap: 4 })}
      >
        <p className={css({ fontSize: 24, fontWeight: 600 })}>학번</p>
        <Input
          placeholder="학번을 입력하세요"
          className={css({ width: "20rem" })}
        />
      </div>
      <div
        className={css({ display: "flex", flexDirection: "column", gap: 4 })}
      >
        <p className={css({ fontSize: 24, fontWeight: 600 })}>이메일</p>
        <Input
          placeholder="이메일을 입력하세요"
          className={css({ width: "20rem" })}
        />
      </div>
      <div>
        <p className={css({ fontSize: 18, fontWeight: 600 })}>
          참가 신청은 관리자의 확인 후 완료됩니다.
        </p>
      </div>
      <button
        onClick={() => {
          alert("등록이 완료되었습니다.");
          navigate("/donate");
        }}
        className={css({
          width: "fit-content",
          padding: "24px 24px",
          borderRadius: 16,
          fontSize: 18,
          fontWeight: 600,
          backgroundColor: "#8B0029",
          color: "white",
        })}
      >
        등록하기
      </button>
    </div>
  );
}
function IndirectForm() {
  return (
    <div
      className={css({
        maxWidth: "1200px",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        gap: 8,
      })}
    >
      <a
        target="_blank"
        href="https://www.kuaa.or.kr/member/membership/joinStepStart.do"
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
        고려대학교 교우회 회원가입 바로가기
        <ArrowUpRight />
      </a>
    </div>
  );
}

export default FormRoute;
