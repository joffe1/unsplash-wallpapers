import { useQuery } from "@tanstack/react-query";
import api from "../constants/routes";

export const fetchPhotos = async (page = 1, orderBy = "latest") => {
  const res = await fetch(api.photos(page, orderBy), {
    headers: {
      Authorization: "Client-ID WY4o2ZWlJO9gV59aQPDbXs2D5pVxiIzLfXbpwL7xgrc",
      // Authorization: `${process.env.AUTHORIZATION_TOKEN}}`,
    },
  });
  if (!res.ok) throw new Error("Error!");

  const data = await res.json();

  return data;
};

export const useFetchPhotos = (page?: number, orderBy?: string) => {
  return useQuery(["photos", page, orderBy], () => fetchPhotos(page, orderBy));
};
