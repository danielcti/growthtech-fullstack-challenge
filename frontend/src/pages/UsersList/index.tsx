import React, { useEffect, useState } from "react";
import Loader from "react-loader-spinner";
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
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      const { data } = await api.get("users");
      setUsers(data);
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
            <h2>Usuários</h2>
            <h3>Lista de todos os usuários</h3>
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
              users.map((user) => <Card key={user.name} data={user} />)
            )}
          </ContentList>
        </ContentWrapper>
      </Container>
    </Wrapper>
  );
}

export default UsersList;
