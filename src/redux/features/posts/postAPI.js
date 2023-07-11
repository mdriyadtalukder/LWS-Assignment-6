import axiosInstance from "../../../utils/axiosInstance"

export const getPosts = async () => {
    const response = await axiosInstance.get("/blogs");
    return response.data;

}