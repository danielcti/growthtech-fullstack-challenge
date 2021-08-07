import React from "react";
import { FaInfoCircle, FaUserFriends } from "react-icons/fa";
import { Link } from "react-router-dom";

import { Container, CardHeader, CardContent } from "./styles";
import Avatar from "../Avatar";
import { Company } from "../../utils/types";

interface CardProps {
  key: string;
  data: Company;
}

function CompanyCard({ data }: CardProps) {
  return (
    <Container>
      <Link to={`companies/${data.slug}`}>
        <CardHeader>
          <Avatar size="sm">{data.name[0]}</Avatar>
          <h2>{data.name}</h2>
        </CardHeader>
        <CardContent>
          <div>
            <FaInfoCircle />
            <h3>{data.catchPhrase}</h3>
          </div>
          <div>
            <FaUserFriends />
            <h3>{data.employees}</h3>
          </div>
        </CardContent>
      </Link>
    </Container>
  );
}

export default CompanyCard;
