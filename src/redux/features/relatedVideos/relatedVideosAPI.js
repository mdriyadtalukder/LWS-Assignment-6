import axiosInstance from "../../../utils/axiosInstance";

export const getRelatedVideos = async ({ tags, id }) => {
    const limit = 5;
    let queryString = '';
    if (tags?.length > 0) {
        queryString = tags.map((tag) => `tags_like=${tag}`).join('&') + `&id_ne=${id}&_limit=${limit}`;
    }
    else {
        queryString = `&id_ne=${id}&_limit=${limit}`;
    }

    const response = await axiosInstance.get(`/blogs?${queryString}`);
    return response.data;
}
export const editRelatedVideo = async (id, data) => {
    const response = await axiosInstance.put(`/blogs/${id}`, data);
    return response.data;

}