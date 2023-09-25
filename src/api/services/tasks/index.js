import api, { apiMultiPart } from "../..";
import { ENDPOINT } from "../../index";

const getAllTasks = async () => {
  try {
    const allTasks = await api.get(ENDPOINT.TASKS);
    return allTasks.data;
  } catch (error) {
    throw error;
  }
};

const getOneTaskById = async (id) => {
  try {
    const task = await api.get(`${ENDPOINT.TASKS}/${id}`);
    return task.data;
  } catch (error) {
    throw error;
  }
};
const createTask = async (form) => {
  try {
    const task = await api.post(`${ENDPOINT.TASKS}`, form);
    return task.data;
  } catch (error) {
    throw error;
  }
};

const updateTaskById = async ({ form, id }) => {
  try {
    const updatedProduct = await apiMultiPart.put(
      `${ENDPOINT.TASKS}/${id}`,
      form
    );
    return updatedProduct.data;
  } catch (error) {
    throw error;
  }
};

const updateTaskPriceById = async ({ form, id }) => {
  try {
    const updatedProduct = await apiMultiPart.put(
      `${ENDPOINT.TASKS}/give-price-task/${id}`,
      form
    );
    
    return updatedProduct.data;
  } catch (error) {
    throw error;
  }
};

const uploadImageTaskById = async ({ form, id }) => {
  try {
    const formData = new FormData();

    formData.append("gambar_service", form.gambar_service);


    const updatedProduct = await apiMultiPart.put(
      `${ENDPOINT.TASKS}/upload-task/${id}`,
      formData,
      {
        headers: {
          Accept: "multipart/form-data",
        },
      }
    );
    return updatedProduct.data;
  } catch (error) {
    throw error;
  }
};

const deleteTaskById = async (id) => {
  try {
    const product = await api.delete(`${ENDPOINT.TASKS}/${id}`);
    return product.data;
  } catch (error) {
    throw error;
  }
};
export {
  getAllTasks,
  getOneTaskById,
  updateTaskById,
  createTask,
  deleteTaskById,
  updateTaskPriceById,
  uploadImageTaskById
};
