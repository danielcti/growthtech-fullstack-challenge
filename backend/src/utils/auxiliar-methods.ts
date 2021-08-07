import { Company, User } from "./types";

interface DetailedCompany extends Company {
  slug: string;
  employees: number;
}

export function createSlug(name: string) {
  return name.toLowerCase().replace(/ /g, "-");
}

export function createDetailedCompanies(users: User[]): DetailedCompany[] {
  const companies: DetailedCompany[] = [];
  users.forEach((user) => {
    // caso não encontre a empresa no array companies adiciona ela
    if (
      !companies.filter((company) => company?.name === user.company.name).length
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
  return companies;
}
