import "@panda/styles.css";

import Header from "./components/Header";
import Gnb from "./components/Gnb";
import Footer from "./components/Footer";
import { SimpleReveal } from "simple-reveal";
import { css } from "@panda/css";

function App() {
  return (
    <div
      className={css({
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
      })}
    >
      <div className={css({ width: "100%", position: "fixed", zIndex: 999 })}>
        <Header />
        <Gnb />
      </div>
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
            minHeight: "100vh",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",

            position: "relative",
          })}
        >
          <img
            className={css({
              height: "100%",
              position: "absolute",
              filter: "brightness(90%)",
              objectFit: "cover",
            })}
            src="/main.jpg"
          />
          <div
            className={css({
              width: "100%",
              maxWidth: "1200px",
              padding: "48px 16px",
              position: "relative",
              display: "flex",
              flexDirection: "column",
              gap: 8,

              fontSize: 48,
              fontWeight: 800,

              color: "white",
            })}
          >
            <SimpleReveal
              duration={1000}
              initialTransform="translateY(3rem)"
              render={({ ref, cn, style }) => (
                <div ref={ref} className={cn()} style={style}>
                  <div>
                    <p>고려대학교 정보대학 40주년</p>
                  </div>
                </div>
              )}
            />
            <SimpleReveal
              delay={500}
              duration={1000}
              initialTransform="translateY(3rem)"
              render={({ ref, cn, style }) => (
                <div ref={ref} className={cn()} style={style}>
                  <div
                    className={css({
                      fontSize: 48,
                      fontWeight: 800,
                      lineHeight: 1.1,
                    })}
                  >
                    <p>Pioneering</p>
                    <p>the Next Intelligence</p>
                  </div>
                </div>
              )}
            />
          </div>
        </section>
      </section>
      <Footer />
    </div>
  );
}

export default App;
