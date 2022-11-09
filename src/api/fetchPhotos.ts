import { useInfiniteQuery } from "@tanstack/react-query";
import api from "../constants/routes";

export const fetchPhotos = async ({ pageParam = 1, orderBy = "latest" }) => {
  const httpOptions = {
    headers: {
      Authorization: `${process.env.API_KEY}`,
    },
  };

  const res = await fetch(api.photos(pageParam, orderBy), httpOptions);

  if (!res.ok) throw new Error("Error!");

  const data = await res.json();

  return data;
};

// export const useFetchPhotos = (page?: number, orderBy?: string) => {
//   return useInfiniteQuery(["photos", page, orderBy], () =>
//     fetchPhotos(page, orderBy)
//   );
// };
