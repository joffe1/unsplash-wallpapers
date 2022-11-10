import api from "../constants/routes";
import { httpOptions } from "./httpOptions";

export const fetchPhoto = async (id: string) => {
  const res = await fetch(api.photoDetails(id), httpOptions);

  if (!res.ok) throw new Error("Error!");

  const data = await res.json();

  return data;
};
