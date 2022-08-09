import superagent from "superagent";
import { ENDPOINTS } from "../constants/endpoints";
import { STATUS_CODES } from "../constants/statusCodes";
import { getUser } from "../methodData/get";
import { POST } from "../methodData/post";
import { PUT } from "../methodData/put";
import { PATCH } from "../methodData/patch";

describe("API testing jsonplaceholder.typicode.com", () => {
    test("GET method, get all users", async () => {
        const allUsers: superagent.Response = await superagent.get(ENDPOINTS.ALL_USERS);
        expect(allUsers.status).toBe(STATUS_CODES.OK);
    });
    test("GET method, get all post", async () => {
        const allPosts: superagent.Response = await superagent.get(ENDPOINTS.ALL_POSTS);
        expect(allPosts.status).toBe(STATUS_CODES.OK);
    });
    test("GET method, get first user", async () => {
        const { id, username } = getUser;
        const user: superagent.Response = await superagent.get(ENDPOINTS.USER);
        expect(user.status).toBe(STATUS_CODES.OK);
        expect(user.body.id).toBe(id);
        expect(user.body.username).toBe(username);
    });
    test("POST method, post new user", async () => {
        const { id, username, email, phone, fullName } = POST.USER;
        const user: superagent.Response = await superagent.post(ENDPOINTS.ALL_USERS).send({
            id,
            username,
            email,
            phone,
            fullName,
        });
        expect(user.status).toBe(STATUS_CODES.CREATED);
        expect(user.body.id).toBe(id);
        expect(user.body.fullName).toBe(fullName);
    });
    test("POST method, post new posts", async () => {
        const { userId, body, title, id } = POST.POSTS;
        const post: superagent.Response = await superagent.post(ENDPOINTS.ALL_POSTS).send({
            userId,
            body,
            title,
            id,
        });
        expect(post.status).toBe(STATUS_CODES.CREATED);
        expect(post.body.id).toBe(id);
        expect(post.body.title).toBe(title);
    });
    test("POST method, post new comment", async () => {
        const { postId, body, name, id, email } = POST.COMMENTS;
        const comment: superagent.Response = await superagent.post(ENDPOINTS.ALL_COMMENTS).send({
            postId,
            body,
            name,
            id,
            email,
        });
        expect(comment.status).toBe(STATUS_CODES.CREATED);
        expect(comment.body.id).toBe(id);
        expect(comment.body.email).toBe(email);
    });
    test("DELETE method, delete first user", async () => {
        const deletedUser: superagent.Response = await superagent.delete(ENDPOINTS.USER);
        expect(deletedUser.status).toBe(STATUS_CODES.OK);
        expect(deletedUser.body).toEqual(expect.anything());
    });
    test("DELETE method, delete first post", async () => {
        const deletedPost: superagent.Response = await superagent.delete(ENDPOINTS.POST);
        expect(deletedPost.status).toBe(STATUS_CODES.OK);
        expect(deletedPost.body).toEqual(expect.anything());
    });
    test("DELETE method, delete first comment", async () => {
        const deletedComment: superagent.Response = await superagent.delete(ENDPOINTS.COMMENT);
        expect(deletedComment.status).toBe(STATUS_CODES.OK);
        expect(deletedComment.body).toEqual(expect.anything());
    });
    test("PUT method, update first todo", async () => {
        const { put } = PUT.TODO;
        const firstTodo: superagent.Response = await superagent.put(ENDPOINTS.TODO).send({
            put,
        });
        expect(firstTodo.status).toEqual(STATUS_CODES.OK);
        expect(firstTodo.body.title).toBeUndefined();
        expect(firstTodo.body.userId).toBeUndefined();
    });
    test("PUT method, update first user", async () => {
        const { username } = PUT.USER;
        const firstUser: superagent.Response = await superagent.put(ENDPOINTS.USER).send({
            username,
        });
        expect(firstUser.status).toEqual(STATUS_CODES.OK);
        expect(firstUser.body.username).toBe(username);
        expect(firstUser.body.email).toBeUndefined();
    });
    test("PUT method, update first comment", async () => {
        const { body } = PUT.COMMENT;
        const firstComment: superagent.Response = await superagent.put(ENDPOINTS.COMMENT).send({
            body,
        });
        expect(firstComment.status).toEqual(STATUS_CODES.OK);
        expect(firstComment.body.body).toBe(body);
        expect(firstComment.body.email).toBeUndefined();
    });

    test("PATCH method, update first todo", async () => {
        const { patch, title } = PATCH.TODO;
        const firstTodo: superagent.Response = await superagent.patch(ENDPOINTS.TODO).send({
            patch,
        });
        expect(firstTodo.status).toEqual(STATUS_CODES.OK);
        expect(firstTodo.body.patch).toBe(patch);
        expect(firstTodo.body.title).toBe(title);
    });
    test("PATCH method, update first album", async () => {
        const { patch, title } = PATCH.ALBUM;
        const firstAlbum: superagent.Response = await superagent.patch(ENDPOINTS.ALBUMS).send({ patch });
        expect(firstAlbum.status).toEqual(STATUS_CODES.OK);
        expect(firstAlbum.body.patch).toEqual(patch);
        expect(firstAlbum.body.title).toBe(title);
    });
    test("PATCH method, update first photos", async () => {
        const { patch, albumId } = PATCH.PHOTO;
        const firstPhoto: superagent.Response = await superagent.patch(ENDPOINTS.PHOTO).send({ patch });
        expect(firstPhoto.status).toEqual(STATUS_CODES.OK);
        expect(firstPhoto.body.patch).toBe(patch);
        expect(firstPhoto.body.albumId).toBe(albumId);
    });
});
