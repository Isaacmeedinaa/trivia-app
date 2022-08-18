import API_URL from "../../constants/API_URL";
import axios, { AxiosRequestConfig } from "axios";

const triviaQuestionsAPI = {
  getTriviaQuestions: async () => {
    const config: AxiosRequestConfig = {
      headers: {
        "Content-Type": "application/json",
        Accepts: "application/json",
      },
      timeout: 30000,
      timeoutErrorMessage: "An error occurred. Please try again later.",
    };

    return await axios.get(API_URL, config);
  },
};

export default triviaQuestionsAPI;
