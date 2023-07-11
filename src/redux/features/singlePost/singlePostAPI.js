import axiosInstance from "../../../utils/axiosInstance"

export const getSinglePost = async (postId) => {
    const response = await axiosInstance.get(`/blogs/${postId}`);
    return response.data;
}