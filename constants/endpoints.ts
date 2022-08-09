import { BASE_URL } from "./url";

const fullRoute = (endpoint: string): string => {
    return BASE_URL + endpoint;
};

export const ENDPOINTS = {
    ALL_USERS: fullRoute("users"),
    ALL_POSTS: fullRoute("posts"),
    ALL_COMMENTS: fullRoute("comments"),
    USER: fullRoute("users/1"),
    POST: fullRoute("posts/1"),
    COMMENT: fullRoute("comments/1"),
    TODO: fullRoute("todos/1"),
    ALBUMS: fullRoute("albums/1"),
    PHOTO: fullRoute("photos/1"),
};
