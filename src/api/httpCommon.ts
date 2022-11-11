import axios from "axios";

export const baseUrl: string = `https://api.unsplash.com`;

export default axios.create({
  baseURL: baseUrl,
  headers: {
    "Content-type": "application/json",
    Authorization: `${process.env.API_KEY}`,
  },
});
