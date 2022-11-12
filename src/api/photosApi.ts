import apiClient from './httpCommon';
import type { IPhoto } from '../types';

export const getPhotos = async (pageParam: number, orderBy?: string) => {
  try {
    const response = await apiClient.get<IPhoto[]>(
      `photos?page=${pageParam}&order_by=${orderBy || ''}`
    );
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export const getPhoto = async (id: string) => {
  try {
    const response = await apiClient.get<IPhoto>(`photos/${id}`);
    return response;
  } catch (error) {
    console.error(error);
  }
};
