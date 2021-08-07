import { Request, Response } from "express";
import api from "../services/api";
import { User, Company } from "../utils/types";
import { createDetailedCompanies, createSlug } from "../utils/auxiliar-methods";

interface DetailedCompany extends Company {
  slug: string;
  employees: number;
}

class CompaniesController {
  async index(request: Request, response: Response) {
    const { data } = await api.get<User[]>("users");
    const companies: DetailedCompany[] = createDetailedCompanies(data);

    return response.status(200).json(companies);
  }

  async show(request: Request, response: Response) {
    const { data } = await api.get<User[]>("users");
    const companies: DetailedCompany[] = createDetailedCompanies(data);
    const filteredCompany = companies.find(
      (company) => company.slug === request.params.slug
    );
    return response.status(200).json(filteredCompany);
  }
}

export default new CompaniesController();
