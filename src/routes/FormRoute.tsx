import { css } from "@panda/css";
import RouteHeader from "~/components/RouteHeader";
import { SimpleReveal } from "simple-reveal";
import Input from "~/components/Input";
import { useNavigate } from "react-router-dom";

function FormRoute() {
  const navigate = useNavigate();
  return (
    <section
      className={css({
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        flex: 1,
        gap: 16,
      })}
    >
      <RouteHeader title="등록하기" />
      <div
        className={css({
          maxWidth: "1200px",
          width: "100%",
          padding: "0 24px",
          display: "flex",
          flexDirection: "column",
          gap: 8,
        })}
      >
        <SimpleReveal
          render={({ ref, cn }) => (
            <p ref={ref} className={cn(css({ fontSize: 32, fontWeight: 800 }))}>
              정보대학 40주년 기념행사에 참여해주세요
            </p>
          )}
        />
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
            alert(
              "등록이 완료되었습니다.",
            );
            navigate("/comment");
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
    </section>
  );
}

export default FormRoute;
