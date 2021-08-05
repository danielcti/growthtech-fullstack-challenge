import { Request, Response } from "express";
import api from "../services/api";
import { User } from "../utils/types";

class CompaniesController {
  async index(request: Request, response: Response) {
    const { data } = await api.get<User[]>("users");

    const companies = data.map((user) => user.company);

    return response.status(200).json(companies);
  }
}

export default new CompaniesController();
