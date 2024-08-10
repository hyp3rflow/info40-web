import { atom } from "jotai";

interface GuestBook {
  id: number;
  head: string;
  content: string;
  writer: string;
  isConfirmed: boolean;
  createdAt: number;
  updatedAt: number;
}
interface GuestBookPageResponse {
  guestBooks: GuestBook[];
  page: number;
  pageSize: number;
  totalCount: number;
}

export const mainCommentsAtom = atom(async () => {
  const url = new URL("https://kuanniversary.xyz/api/v1/guest-book");
  url.searchParams.append("page", "0");
  url.searchParams.append("pageSize", "10");
  const response = await fetch(url);
  const res = (await response.json()) as GuestBookPageResponse;
  return res.guestBooks;
});

export const commentListPageAtom = atom(0);
export const commentListAtom = atom(async (get) => {
  const url = new URL("https://kuanniversary.xyz/api/v1/guest-book");
  url.searchParams.append("page", get(commentListPageAtom).toString());
  url.searchParams.append("pageSize", "20");
  const response = await fetch(url);
  const res = (await response.json()) as GuestBookPageResponse;
  return res.guestBooks;
});
