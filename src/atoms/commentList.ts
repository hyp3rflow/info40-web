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

const tempGuestBooks: GuestBook[] = [
  createGuestBook(
    "40주년 행사 정말 기대됩니다. 평소에 만나뵙지 못한 교우분들을 뵐 수 있었으면 좋겠습니다.",
    "컴퓨터",
  ),
  createGuestBook(
    "이번 기부 챌린지와 기념 행사를 통해서 정보대학이 새로운 도약을 맞이하기를 바랍니다.",
    "컴퓨터",
  ),
  createGuestBook(
    "고연전 주점 행사와 같은 선후배간의 화합을 도모할 수 있는 기회가 생긴다니 기대됩니다.",
    "컴퓨터",
  ),
];

function createGuestBook(head: string, writer: string): GuestBook {
  return {
    id: 0,
    head,
    content: "",
    writer,
    isConfirmed: true,
    createdAt: 0,
    updatedAt: 0,
    comments: [],
  };
}

export const mainCommentsAtom = atom(async () => {
  return Promise.resolve(tempGuestBooks);
  // const url = new URL("https://kuanniversary.xyz/api/v1/guest-book");
  // url.searchParams.append("page", "0");
  // url.searchParams.append("pageSize", "10");
  // const response = await fetch(url);
  // const res = (await response.json()) as GuestBookPageResponse;
  // return res.guestBooks;
});

export const commentListPageAtom = atom(1);
export const commentListResponseAtom = atom(async (get) => {
  get(commentListPageAtom);
  return Promise.resolve({
    guestBooks: tempGuestBooks,
    page: 0,
    pageSize: 4,
    totalCount: 4,
  } satisfies GuestBookPageResponse);
  // const url = new URL("https://kuanniversary.xyz/api/v1/guest-book");
  // url.searchParams.append("page", (get(commentListPageAtom) - 1).toString());
  // url.searchParams.append("pageSize", "15");
  // const response = await fetch(url);
  // return (await response.json()) as GuestBookPageResponse;
});
export const commentListAtom = atom(async (get) => {
  return (await get(commentListResponseAtom)).guestBooks;
});
export const commentListTotalPageAtom = atom(async (get) => {
  const response = await get(commentListResponseAtom);
  return Number(response.totalCount) / Number(response.pageSize);
});
