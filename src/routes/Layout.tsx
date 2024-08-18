import { css, cx } from "@panda/css";
import { Outlet, ScrollRestoration } from "react-router-dom";

import Header from "~/components/Header";
import Gnb from "~/components/Gnb";
import Footer from "~/components/Footer";
import GalleryPopup from "~/components/GalleryPopup";

function Layout() {
  return (
    <div className={cx(css({ position: "relative" }))}>
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
        <Outlet />
      </main>
      <Footer />
      <GalleryPopup />
      <ScrollRestoration />
    </div>
  );
}

export default Layout;
