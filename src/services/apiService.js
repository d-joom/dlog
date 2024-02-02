
import instance from './axios'; 


// Create
export const post = async (url, data) => {
  try {
    const response = await instance.post(url, data);
    return response.data;
  } catch (error) {
    console.error('Error creating item:', error);
    throw error;
  }
};

// Create
export const postByToken = async (url, data) => {
  try {
    const response = await instance.post(url, null, {
              headers: {
                "token": localStorage.getItem('accessToken')
              },
              params: data});
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
export const put = async (url, data) => {
  try {
    const response = await instance.put(url,  null, {
              headers: {
                "token": localStorage.getItem('accessToken'),
                "Content-Type": "application/json",
                  Accept: "application/json",
              },
              params: data
            });
            console.log(data);
    return response.data;
  } catch (error) {
    console.error('Error updating item:', error);
    throw error;
  }
};

// Delete
export const deleteItems = async (url) => {
  try {
    const response = await instance.delete(url, null, {
      headers: {
        "token": localStorage.getItem('accessToken')
      }});
      console.log(response);
    return response.data;
  } catch (error) {
    console.error('Error deleting item:', error);
    throw error;
  }
};