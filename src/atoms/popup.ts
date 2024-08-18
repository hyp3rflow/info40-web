import { atom, useSetAtom } from "jotai";
import { useCallback } from "react";

export const popupAtom = atom(false);

export const popupImageUrlAtom = atom("");

export function useOpenImagePopup() {
  const setPopupAtom = useSetAtom(popupAtom);
  const setPopupImageUrl = useSetAtom(popupImageUrlAtom);
  return useCallback(
    (url: string) => (setPopupImageUrl(url), setPopupAtom(true)),
    [setPopupAtom, setPopupImageUrl],
  );
}
