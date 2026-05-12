import axios from "axios";

const api = axios.create({
  baseURL: import.meta.env.VITE_APP_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

export const createApplication = (formData) => {
  return api.post("/applications", formData, {
    headers: {
      "Content-Type": "application/json",
    },
  });
};

export const createContactMessage = (formData) => {
  return api.post("/contacts", formData, {
    headers: {
      "Content-Type": "application/json",
    },
  });
};
