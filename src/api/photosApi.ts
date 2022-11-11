import apiClient from "./httpCommon";
import type { IPhoto } from "../types";

export const getPhotos = async ({ pageParam = 1, orderBy = "latest" }) => {
  const response = await apiClient.get<IPhoto[]>(
    `photos?page=${pageParam}&order_by=${orderBy}`
  );
  return response.data;
};

export const getPhoto = async (id: number) => {
  const response = await apiClient.get<IPhoto>(`photo/${id}`);
  return response.data;
};
