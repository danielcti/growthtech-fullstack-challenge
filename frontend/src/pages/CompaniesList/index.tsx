import React, { useEffect, useState } from "react";
import Loader from "react-loader-spinner";
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
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      const { data } = await api.get("companies");
      setCompanies(data);
      setLoading(false);
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
            {loading ? (
              <Loader
                type="TailSpin"
                color="#009fe3"
                height={100}
                width={100}
                timeout={3000}
              />
            ) : (
              companies.map((company) => (
                <Card key={company.name} data={company} />
              ))
            )}
          </ContentList>
        </ContentWrapper>
      </Container>
    </Wrapper>
  );
}

export default CompaniesList;
