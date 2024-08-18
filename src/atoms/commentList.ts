import { atom } from "jotai";

interface Comment {
  id: number;
  content: string;
  writer: string;
  isConfirmed: boolean;
  createdAt: number;
}
export interface GuestBook {
  id: number;
  head: string;
  content: string;
  writer: string;
  isConfirmed: boolean;
  createdAt: number;
  updatedAt: number;
  comments: Comment[];
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

export const commentListPageAtom = atom(1);
export const commentListResponseAtom = atom(async (get) => {
  const url = new URL("https://kuanniversary.xyz/api/v1/guest-book");
  url.searchParams.append("page", (get(commentListPageAtom) - 1).toString());
  url.searchParams.append("pageSize", "15");
  const response = await fetch(url);
  return (await response.json()) as GuestBookPageResponse;
});
export const commentListAtom = atom(async (get) => {
  return (await get(commentListResponseAtom)).guestBooks;
});
export const commentListTotalPageAtom = atom(async (get) => {
  const response = await get(commentListResponseAtom);
  return Number(response.totalCount) / Number(response.pageSize);
});
