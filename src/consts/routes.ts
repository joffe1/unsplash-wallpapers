import { baseUrl } from '../api/httpCommon';

const api = {
  photos: (page?: number, orderBy?: string) =>
    `${baseUrl}/photos?page=${page}&order_by=${orderBy}`,
  photoDetails: (id: string) => `${baseUrl}/photos/${id}`,
  searchPhoto: (query: string) => `${baseUrl}/search/photos/?query=${query}`,
};

export default api;
