import { Request, Response } from "express";
import api from "../services/api";
import { User, Company } from "../utils/types";
import { createSlug } from "../utils/auxiliar-methods";

interface DetailedCompany extends Company {
  slug: string;
  employees: number;
}

class CompaniesController {
  async index(request: Request, response: Response) {
    const { data } = await api.get<User[]>("users");
    const companies: DetailedCompany[] = [];

    data.forEach((user) => {
      // caso não encontre a empresa no array companies adiciona ela
      if (
        !companies.filter((company) => company?.name === user.company.name)
          .length
      ) {
        const slug = createSlug(user.company.name);
        companies.push({ slug, ...user.company, employees: 1 });
        // caso encontre a empresa incrementa a quantidade de funcionários
      } else {
        const company = companies.find(
          (company) => company.name === user.company.name
        );
        if (company) {
          company.employees += 1;
        }
      }
    });

    return response.status(200).json(companies);
  }
}

export default new CompaniesController();
