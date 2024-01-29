
import instance from './axios'; 

// Create
export const create = async (url, data) => {
  try {
    const response = await instance.post(url, data);
    return response.data;
  } catch (error) {
    console.error('Error creating item:', error);
    throw error;
  }
};

// Read
export const get = async (url) => {
  try {
    const response = await instance.get(url);
    return response.data;
  } catch (error) {
    console.error('Error fetching items:', error);
    throw error;
  }
};

// Update
export const update = async (url, data) => {
  try {
    const response = await instance.put(url, data);
    return response.data;
  } catch (error) {
    console.error('Error updating item:', error);
    throw error;
  }
};

// Delete
export const deleteItems = async (url) => {
  try {
    const response = await instance.delete(url);
    return response.data;
  } catch (error) {
    console.error('Error deleting item:', error);
    throw error;
  }
};