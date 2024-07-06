import "@panda/styles.css";

import Header from "./components/Header";
import Gnb from "./components/Gnb";
import Footer from "./components/Footer";
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
      <Header />
      <Gnb />
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
            padding: "48px 16px",
          })}
        >
          <h1
            className={css({
              fontSize: 48,
              fontWeight: 800,
              lineHeight: 1,
            })}
          >
            <p>Pioneering</p>
            <p>the Next Intelligence</p>
          </h1>
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default App;
