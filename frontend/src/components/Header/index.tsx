import React from "react";
import { NavLink, Link } from "react-router-dom";

import { Container, LogoWrapper, Wrapper, Navbar } from "./styles";
import logo from "../../assets/logo-growthtech.svg";
import ThemeSwitcher from "../ThemeSwitcher";

function Header() {
  return (
    <Container>
      <Wrapper>
        <LogoWrapper>
          <Link to="/">
            <img src={logo} alt="Logo da Growth Tech" />
          </Link>
        </LogoWrapper>
        <Navbar>
          <NavLink to="/companies" activeClassName="active">
            empresas
          </NavLink>
          <NavLink to="/users" activeClassName="active">
            usuários
          </NavLink>
          <ThemeSwitcher />
        </Navbar>
      </Wrapper>
    </Container>
  );
}

export default Header;
