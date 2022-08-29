import axios from "axios";
import { BASE_URL } from "constants/apartmentsApi";

const instanse = axios.create({
  baseURL: BASE_URL,
});

export const getAllApartments = async (params) =>
  await instanse.get("apartments", {
    params,
  });

export const addApartment = async (data) =>
  await instanse.post("apartments", data);

export const deleteApartment = async (id) =>
  await instanse.delete(`apartments/${id}`);
