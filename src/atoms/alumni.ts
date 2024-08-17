import { atom } from "jotai";

export const alumniCountAtom = atom(async () => {
  const url = new URL("https://kuanniversay.xyz/api/v1/alumni/count");
  const response = await fetch(url);
  return (await response.json()) as number;
});
