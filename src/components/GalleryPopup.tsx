import { css } from "@panda/css";
import { useAtom, useAtomValue } from "jotai";
import { X } from "lucide-react";
import { useEffect, useRef } from "react";
import { popupAtom, popupImageUrlAtom } from "~/atoms/popup";

function GalleryPopup() {
  const ref = useRef<HTMLDialogElement>(null);
  const [popup, setPopup] = useAtom(popupAtom);
  const imageUrl = useAtomValue(popupImageUrlAtom);
  useEffect(() => {
    if (popup) {
      ref.current?.showModal();
      document.body.style.overflow = "hidden";
      return;
    }
    ref.current?.close();
    document.body.style.overflow = "inherit";
    document.body.focus();
  }, [popup]);
  return (
    <dialog
      ref={ref}
      onClose={() => setPopup(false)}
      className={css({
        maxWidth: "none",
        maxHeight: "none",
        background: "none",
        _backdrop: {
          background: "rgba(0,0,0,0.5)",
        },
      })}
    >
      <section
        className={css({
          width: "100vw",
          height: "100vh",
          padding: "16px",

          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        })}
      >
        <div
          className={css({
            display: "flex",
            flexDirection: "column",
            gap: 2,
          })}
        >
          <button onClick={() => ref.current?.close()}>
            <X color="white" size="36" />
          </button>
          <img
            src={imageUrl}
            className={css({
              borderRadius: 12,
              maxHeight: "calc(100vh - 120px)",
            })}
          />
        </div>
      </section>
    </dialog>
  );
}

export default GalleryPopup;
