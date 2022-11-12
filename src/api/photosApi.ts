import apiClient from './httpCommon';
import type { IPhoto } from '../types';

export const getPhotos = async (pageParam: number, orderBy?: string) => {
  const response = await apiClient
    .get<IPhoto[]>(`photos?page=${pageParam}&order_by=${orderBy || ''}`)
    .then((res) => res.data)
    .catch((err) => err);

  return response;
};

export const getPhoto = async (id: number) => {
  const response = await apiClient
    .get<IPhoto>(`photo/${id}`)
    .then((res) => res.data)
    .catch((err) => err);

  return response;
};
