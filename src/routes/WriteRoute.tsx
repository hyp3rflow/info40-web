import { css } from "@panda/css";
import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Placeholder from "@tiptap/extension-placeholder";
import RouteHeader from "~/components/RouteHeader";
import { SimpleReveal } from "simple-reveal";
import Input from "~/components/Input";
import { useNavigate } from "react-router-dom";

const extensions = [
  StarterKit,
  Placeholder.configure({
    placeholder: "내용을 작성해주세요",
  }),
];

function WriteRoute() {
  const navigate = useNavigate();
  const editor = useEditor({
    extensions,
    editorProps: {
      attributes: {
        class: css({ _focus: { outline: "none" }, minHeight: "30em" }),
      },
    },
  });
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
      <RouteHeader title="방명록 작성하기" />
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
              정보대학 교우 여러분의 소중한 추억을 남겨주세요
            </p>
          )}
        />
        <div
          className={css({ display: "flex", flexDirection: "column", gap: 4 })}
        >
          <p className={css({ fontSize: 24, fontWeight: 600 })}>제목</p>
          <Input
            placeholder="제목을 입력하세요"
            className={css({ width: "100%" })}
          />
        </div>
        <div>
          <EditorContent
            className={css({
              border: "1px solid #aaa",
              padding: "24px",
              borderRadius: "16px",
            })}
            editor={editor}
          />
        </div>
        <div
          className={css({ display: "flex", flexDirection: "column", gap: 4 })}
        >
          <p className={css({ fontSize: 24, fontWeight: 600 })}>작성자</p>
          <Input
            placeholder="작성자를 입력하세요"
            className={css({ width: "20rem" })}
          />
        </div>
        <div>
          <p className={css({ fontSize: 18, fontWeight: 600 })}>
            모든 방명록은 관리자의 승인 후에 게재됩니다.
          </p>
        </div>
        <button
          onClick={() => {
            alert(
              "방명록이 작성되었습니다. 모든 방명록은 관리자의 승인 후에 게재됩니다.",
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
          방명록 작성하기
        </button>
      </div>
    </section>
  );
}

export default WriteRoute;
