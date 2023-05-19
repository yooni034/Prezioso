import axios from "axios";

const BASE_URL = "http://localhost:8080/api";

export const getSomeData = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/some-endpoint`);
    return response.data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};
