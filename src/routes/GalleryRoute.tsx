import { css } from "@panda/css";
import RouteHeader from "~/components/RouteHeader";
import { SimpleReveal } from "simple-reveal";
import Typography from "~/components/Typography";
import Pagination from "~/components/Pagination";
import { useAtom, useAtomValue } from "jotai";
import {
  photoListAtom,
  photoListPageAtom,
  photoListTotalPageAtom,
} from "~/atoms/photo";
import { Suspense } from "react";
import ErrorBoundary from "~/components/ErrorBoundary";
import { useOpenImagePopup } from "~/atoms/popup";

function GalleryRoute() {
  return (
    <div>
      <RouteHeader title="추억 갤러리" />
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
              <Typography.h1 ref={ref} className={cn()}>
                정보대학 교우 여러분의
                <br />
                소중한 추억이 담긴 사진을 공유해주세요
              </Typography.h1>
            )}
          />
          <SimpleReveal
            render={({ ref, cn }) => (
              <div
                ref={ref}
                className={cn(
                  css({
                    display: "flex",
                    justifyContent: "center",
                    padding: "24px 24px",
                    borderRadius: 16,
                    backgroundColor: "#f2f2f2",
                  }),
                )}
              >
                <Typography.p>
                  이메일로 추억이 담긴 사진을 보내주시면 갤러리에
                  추가해드립니다.
                </Typography.p>
              </div>
            )}
          />
        </div>
      </section>
      <ErrorBoundary fallback="">
        <Suspense fallback="">
          <GallerySection />
        </Suspense>
      </ErrorBoundary>
    </div>
  );
}

function GallerySection() {
  const openImagePopup = useOpenImagePopup();
  const photos = useAtomValue(photoListAtom);
  const [current, setCurrent] = useAtom(photoListPageAtom);
  const total = useAtomValue(photoListTotalPageAtom);
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
          alignItems: "center",
          padding: "6rem 24px",
          gap: 8,
        })}
      >
        <div
          className={css({
            display: "grid",
            gridTemplateColumns: {
              base: "1fr 1fr 1fr",
              lgDown: "1fr 1fr",
              mdDown: "1fr",
            },

            gap: 4,
          })}
        >
          {photos.map((photo) => (
            <img
              onClick={() => openImagePopup(photo.imageUrl)}
              className={css({
                borderRadius: 12,
                objectFit: "cover",
                height: "100%",
                cursor: "pointer",
              })}
              key={photo.id}
              src={photo.imageUrl}
            />
          ))}
        </div>
        <Pagination
          current={current}
          total={total}
          onButtonClick={setCurrent}
        />
      </div>
    </section>
  );
}

export default GalleryRoute;
