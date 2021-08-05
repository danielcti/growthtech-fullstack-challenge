import { Request, Response } from "express";
import api from "../services/api";
import { Post, Comment, User } from "../utils/types";

class PostsController {
  async index(request: Request, response: Response) {
    const { data: posts } = await api.get<Post[]>("posts");

    if (request.query.company) {
      const { data: users } = await api.get<User[]>("users");

      const filteredPosts = posts.filter((post) => {
        const postUser = users.filter((user) => user.id === post.userId)[0];
        return postUser.company.name === request.query.company;
      });

      return response.status(200).json(filteredPosts);
    }

    return response.status(200).json(posts);
  }

  async show(request: Request, response: Response) {
    const postId = request.params.id;

    const { data: post } = await api.get<Post>(`posts/${postId}`);
    const { data: comments } = await api.get<Comment[]>(
      `posts/${postId}/comments`
    );

    return response.json({
      ...post,
      comments,
    });
  }
}

export default new PostsController();
