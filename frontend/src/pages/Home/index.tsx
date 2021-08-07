import React from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";

import logo from "../../assets/logo-growthtech.svg";
import { GITHUB_URL, LINKEDIN_URL } from "../../utils/infos";
import defaultTheme from "../../styles/theme";

import {
  Container,
  LeftContainer,
  RightContainer,
  PersonalInfoContainer,
  Links,
  SocialNetworks,
} from "./styles";

function Home(props: any) {
  return (
    <Container>
      <LeftContainer>
        <Link to="/">
          <img src={logo} />
        </Link>
        <PersonalInfoContainer>
          <h2>Olá,</h2>
          <h1>Eu sou Daniel Cavalcanti</h1>
          <h2 className="position">Desenvolvedor Fullstack</h2>
          <p>
            E esse foi o meu resultado para o teste de desenvolvedor Fullstack
            da Growth Tech.
            <br />
            Espero que gostem :)
          </p>
        </PersonalInfoContainer>
        <Links>
          <Link to="/companies">Listagem de empresas</Link>
          <Link to="/users">Listagem de usuários</Link>
        </Links>
        <SocialNetworks>
          <a href={GITHUB_URL}>
            <FaGithub color={defaultTheme.colors.dark} size={40} />
          </a>
          <a href={LINKEDIN_URL}>
            <FaLinkedin color={defaultTheme.colors.dark} size={40} />
          </a>
        </SocialNetworks>
      </LeftContainer>
      <RightContainer>
        <nav>
          <Link to="/companies">empresas</Link>
          <Link to="/users">usuários</Link>
        </nav>
        <div>
          <img src="https://avatars.githubusercontent.com/u/31549323?v=4" />
        </div>
      </RightContainer>
    </Container>
  );
}

export default Home;
