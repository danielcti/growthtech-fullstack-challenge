import React from "react";

import Header from "../../components/Header";
import Card from "../../components/Card";
import {
  Container,
  ContentWrapper,
  ContentHeader,
  ContentList,
} from "./styles";

function CompaniesList() {
  return (
    <>
      <Container>
        <Header />
        <ContentWrapper>
          <ContentHeader>
            <h2>Empresas</h2>
            <h3>Lista de todas as empresas</h3>
          </ContentHeader>
          <ContentList>
            <Card></Card>
          </ContentList>
        </ContentWrapper>
      </Container>
    </>
  );
}

export default CompaniesList;
