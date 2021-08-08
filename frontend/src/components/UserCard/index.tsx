import React from "react";
import { FaEnvelope, FaBriefcase } from "react-icons/fa";
import { Link } from "react-router-dom";
import Avatar from "../Avatar";

import { Container, CardHeader, CardContent } from "./styles";

interface CardProps {
  key?: string;
  data: {
    id: number;
    name: string;
    username: string;
    email: string;
    address: Address;
    phone: string;
    website: string;
    company: Company;
  };
}

interface Address {
  street: string;
  suite: string;
  city: string;
  zipcode: number;
  geo: {
    lat: number;
    lng: number;
  };
}

interface Company {
  name: string;
  catchPhrase: string;
  bs: string;
}

function UserCard({ data }: CardProps) {
  return (
    <Container>
      <Link to={{ pathname: `users/${data.id}`, state: data }}>
        <CardHeader>
          <Avatar size="sm">{data.name[0]}</Avatar>
          <h2>{data.name}</h2>
        </CardHeader>
        <CardContent>
          <div>
            <FaEnvelope />
            <h3 className="email">{data.email}</h3>
          </div>
          <div>
            <FaBriefcase />
            <h3>{data.company.name}</h3>
          </div>
        </CardContent>
      </Link>
    </Container>
  );
}

export default UserCard;
