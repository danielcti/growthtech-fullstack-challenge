import React from "react";
import { FaUserFriends } from "react-icons/fa";
import { Company } from "../../utils/types";
import Avatar from "../Avatar";

import { Container, InfoContainer, AvatarContainer } from "./styles";

interface CompanyProfileProps {
  data: Company;
}

function CompanyProfile({ data }: CompanyProfileProps) {
  return (
    <Container>
      <InfoContainer>
        <h1>{data.name}</h1>
        <h2>{data.catchPhrase}</h2>
        <div>
          <FaUserFriends size={30} />
          <h2>Total de funcionários: {data.employees}</h2>
        </div>
      </InfoContainer>
      <AvatarContainer>
        <Avatar size="lg">{data.name[0]}</Avatar>
      </AvatarContainer>
    </Container>
  );
}

export default CompanyProfile;
