import React, { useEffect, useState } from "react";

import Header from "../../components/Header";
import Card from "../../components/UserCard";
import {
  Wrapper,
  Container,
  ContentWrapper,
  ContentHeader,
  ContentList,
} from "./styles";
import api from "../../services/api";
import { User } from "../../utils/types";

function UsersList() {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    async function fetchData() {
      const { data } = await api.get("users");
      setUsers(data);
    }
    fetchData();
  }, []);

  return (
    <Wrapper>
      <Header />
      <Container>
        <ContentWrapper>
          <ContentHeader>
            <h2>Usuários</h2>
            <h3>Lista de todos os usuários</h3>
          </ContentHeader>
          <ContentList>
            {users.map((user) => (
              <Card key={user.name} data={user} />
            ))}
          </ContentList>
        </ContentWrapper>
      </Container>
    </Wrapper>
  );
}

export default UsersList;
