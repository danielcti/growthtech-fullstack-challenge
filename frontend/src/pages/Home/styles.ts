import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  justify-content: space-between;
  background: ${(props) => props.theme.colors.main};

  @media (max-width: 1200px) {
    flex-direction: column;
  }
`;

export const LeftContainer = styled.div`
  background: ${(props) => props.theme.colors.secondary};
  width: 70%;
  padding: 2rem 4rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  a img {
    max-width: 150px;
  }

  @media (max-width: 1200px) {
    width: 100%;
  }
`;

export const PersonalInfoContainer = styled.div`
  margin: 30px 0;
  h1 {
    font-size: 3rem;
    color: ${(props) => props.theme.colors.main};
    margin: 1rem 0;
  }

  h2 {
    font-size: 2rem;
    color: ${(props) => props.theme.colors.dark};

    &.position {
      position: relative;
      padding-left: 2rem;

      &::before {
        content: "";
        position: absolute;
        left: 0;
        top: 50%;
        background: ${(props) => props.theme.colors.main};
        height: 5px;
        width: 1.5rem;
      }
    }
  }

  p {
    font-size: 1.5rem;
    color: ${(props) => props.theme.colors.dark};
    margin-top: 1.5rem;
    line-height: 1.3;
    word-break: beak-all;
  }
`;

export const Links = styled.div`
  display: flex;
  margin: 30px 0;

  a {
    background: ${(props) => props.theme.colors.main};
    display: flex;
    justify-content: center;
    align-items: center;
    color: ${(props) => props.theme.colors.light};
    text-decoration: none;
    font-size: 1.1rem;
    transition: background 0.3s;
    white-space: nowrap;
    width: 13rem;
    height: 2.3rem;

    &:hover {
      background: ${(props) => props.theme.colors.mainHovered};
    }

    &:not(:first-child) {
      margin-left: 2rem;
    }
  }

  @media (max-width: 800px) {
    flex-direction: column;

    a {
      &:not(:first-child) {
        margin-left: 0px;
        margin-top: 2rem;
      }
    }
  }
`;

export const SocialNetworks = styled.div`
  display: flex;
  margin: 30px 0;

  a {
    &:not(:first-child) {
      margin-left: 20px;
    }

    &:hover svg {
      fill: ${(props) => props.theme.colors.darkHovered};
    }
  }
`;

export const RightContainer = styled.div`
  background: ${(props) => props.theme.colors.main};
  width: 30%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem;
  position: relative;

  nav {
    position: absolute;
    top: 2rem;

    a {
      text-decoration: none;
      margin: 0 20px;
      color: ${(props) => props.theme.colors.light};
      font-size: 1.2rem;

      &:hover {
        text-decoration: underline;
      }
    }
  }

  > div {
    max-width: 18rem;
  }

  div img {
    border-radius: 50%;
    width: 100%;
    height: auto;
  }

  @media (max-width: 1200px) {
    width: 100%;

    div img {
      margin-top: 80px;
    }
  }
`;
