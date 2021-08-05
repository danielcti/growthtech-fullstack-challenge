import { Request, Response } from "express";
import api from "../services/api";
import { Post } from "../utils/types";

class UserPostsController {
  async index(request: Request, response: Response) {
    const { data: posts } = await api.get<Post[]>("posts");

    const filteredPosts = posts.filter(
      (post) => post.userId === Number(request.params.id)
    );

    return response.status(200).json(filteredPosts);
  }
}

export default new UserPostsController();
