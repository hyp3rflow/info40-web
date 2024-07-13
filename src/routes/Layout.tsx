import { css } from "@panda/css";
import { Outlet } from "react-router-dom";

import Header from "~/components/Header";
import Gnb from "~/components/Gnb";

function Layout() {
  return (
    <div>
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
    </div>
  );
}

export default Layout;
