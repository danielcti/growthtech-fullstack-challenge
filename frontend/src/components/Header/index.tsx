import React from "react";
import { NavLink, Link } from "react-router-dom";

import { Container, Wrapper, Navbar } from "./styles";
import logo from "../../assets/logo-growthtech.svg";

function Header() {
  return (
    <Container>
      <Wrapper>
        <div>
          <Link to="/">
            <img src={logo} />
          </Link>
        </div>
        <Navbar>
          <NavLink to="/companies" activeClassName="active">
            empresas
          </NavLink>
          <NavLink to="/users" activeClassName="active">
            usuários
          </NavLink>
        </Navbar>
      </Wrapper>
    </Container>
  );
}

export default Header;
