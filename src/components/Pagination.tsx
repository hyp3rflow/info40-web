import { css } from "@panda/css";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useMemo } from "react";

interface PaginationProps {
  current: number;
  total: number;
  onButtonClick: (idx: number) => void;
}

function Pagination({ current, total, onButtonClick }: PaginationProps) {
  const range = useMemo(() => {
    const r = current % 5;
    const q = current - r;
    const arr = [];
    for (let i = q; i < q + r || i < total; i++) arr.push(i + 1);
    return arr;
  }, [current, total]);
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
        {range.map((idx) => (
          <PaginationButton
            key={idx}
            idx={idx}
            onClick={() => onButtonClick(idx)}
          />
        ))}
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

interface PaginationButtonProps {
  idx: number;
  onClick(): void;
}
function PaginationButton({ idx, onClick }: PaginationButtonProps) {
  return (
    <div
      onClick={onClick}
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
      {idx}
    </div>
  );
}

export default Pagination;
