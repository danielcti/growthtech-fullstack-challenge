import React, { useEffect, useState } from "react";

import Header from "../../components/Header";
import Card from "../../components/CompanyCard";
import {
  Wrapper,
  Container,
  ContentWrapper,
  ContentHeader,
  ContentList,
} from "./styles";
import api from "../../services/api";
import { Company } from "../../utils/types";

function CompaniesList() {
  const [companies, setCompanies] = useState<Company[]>([]);

  useEffect(() => {
    async function fetchData() {
      const { data } = await api.get("companies");
      setCompanies(data);
    }
    fetchData();
  }, []);

  return (
    <Wrapper>
      <Header />
      <Container>
        <ContentWrapper>
          <ContentHeader>
            <h2>Empresas</h2>
            <h3>Lista de todas as empresas</h3>
          </ContentHeader>
          <ContentList>
            {companies.map((company) => (
              <Card key={company.name} data={company} />
            ))}
          </ContentList>
        </ContentWrapper>
      </Container>
    </Wrapper>
  );
}

export default CompaniesList;
