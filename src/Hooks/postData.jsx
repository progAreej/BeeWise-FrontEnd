import axios from 'axios';

const usePostData = (url) => {
  const postData = async (data) => {
    try {
      const response = await axios.post(url, data);
      return response.data;
    } catch (error) {
      console.error(error);
      throw error;
    }
  };

  return { postData };
};

export default usePostData;
