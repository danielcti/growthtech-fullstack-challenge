import { Request, Response } from "express";
import api from "../services/api";
import { User } from "../utils/types";

class UsersController {
  async index(request: Request, response: Response) {
    const { data } = await api.get<User[]>("users");

    return response.status(200).json(data);
  }

  async show(request: Request, response: Response) {
    const userId = request.params.id;
    const { data } = await api.get<User>(`users/${userId}`);

    return response.json(data);
  }
}

export default new UsersController();
