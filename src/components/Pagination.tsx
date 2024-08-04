import { css } from "@panda/css";
import { ChevronLeft, ChevronRight } from "lucide-react";

function Pagination() {
  return (
    <div
      className={css({
        display: "flex",
        gap: 8,
      })}
    >
      <div
        className={css({
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: "999px",
          width: "42px",
          height: "42px",
          backgroundColor: "#f2f2f2",
        })}
      >
        <ChevronLeft />
      </div>
      <div
        className={css({
          display: "flex",
        })}
      >
        <PaginationButton />
      </div>
      <div
        className={css({
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: "999px",
          width: "42px",
          height: "42px",
          backgroundColor: "#f2f2f2",
        })}
      >
        <ChevronRight />
      </div>
    </div>
  );
}

function PaginationButton() {
  return (
    <div
      className={css({
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: "999px",
        width: "42px",
        height: "42px",
        backgroundColor: "#f2f2f2",
        fontWeight: "800",
        fontSize: 20,
      })}
    >
      1
    </div>
  );
}

export default Pagination;
