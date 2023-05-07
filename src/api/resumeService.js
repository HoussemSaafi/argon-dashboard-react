import axios from "axios";

const BASE_URL = 'http://localhost:5000';


const ResumeService = {
  uploadResume: (resume) => {
    const formData = new FormData();
    formData.append("resume", resume);
    return axios.post("/api/upload", formData);
  },
  analyzeJob: (jobText) => {
    return axios.post("/api/job", { jobText });
  },
};

export default ResumeService;
