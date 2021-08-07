import React from "react";
import { FaGlobe, FaPhone, FaHome, FaEnvelope } from "react-icons/fa";
import { User } from "../../utils/types";
import Avatar from "../Avatar";

import { Container, InfoContainer, AvatarContainer } from "./styles";

interface UserProfileProps {
  data: User;
}

function UserProfile({ data }: UserProfileProps) {
  return (
    <Container>
      <InfoContainer>
        <h1>
          {data.name}
          <span> - {data.username}</span>
        </h1>
        <h2>{data.company.name}</h2>
        <div>
          <FaEnvelope />
          <h3 className="email">{data.email}</h3>
        </div>
        <div>
          <FaGlobe />
          <a href={`https://${data.website}`}>{data.website}</a>
        </div>
        <div>
          <FaPhone />
          <h3>{data.phone}</h3>
        </div>
        <div>
          <FaHome />
          <h3>
            {data.address.street}, {data.address.city}
          </h3>
        </div>
      </InfoContainer>
      <AvatarContainer>
        <Avatar size="lg">{data.name[0]}</Avatar>
      </AvatarContainer>
    </Container>
  );
}

export default UserProfile;
