import axios from "axios";
import { API_URL, API_VERSION } from "constants/env";

const axiosInstance = axios.create({
	baseURL: `${API_URL}/api/${API_VERSION}/`,
});

export default axiosInstance;
