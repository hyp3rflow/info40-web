import { atom } from "jotai";

interface Photo {
  id: number;
  imageUrl: string;
  createdAt: number;
}
interface PhotoListResponse {
  photos: Photo[];
  page: number;
  pageSize: number;
  totalCount: number;
}

export const photoListPageAtom = atom(1);

export const photoListResponseAtom = atom(async (get) => {
  const url = new URL("https://kuanniversary.xyz/api/v1/photo");
  url.searchParams.append("page", (get(photoListPageAtom) - 1).toString());
  url.searchParams.append("pageSize", "9");
  const response = await fetch(url);
  return (await response.json()) as PhotoListResponse;
});
export const photoListAtom = atom(async (get) => {
  return (await get(photoListResponseAtom)).photos;
});
export const photoListTotalPageAtom = atom(async (get) => {
  const response = await get(photoListResponseAtom);
  return Number(response.totalCount) / Number(response.pageSize);
});
