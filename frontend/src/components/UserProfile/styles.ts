import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const InfoContainer = styled.div`
  color: ${(props) => props.theme.colors.dark};
  h1 {
    font-size: 2rem;
    margin-bottom: 1rem;
    span {
      text-transform: lowercase;
      font-weight: 300;
    }
  }

  > h2 {
    text-transform: uppercase;
    margin-bottom: 2rem;
  }

  > div {
    display: flex;
    align-items: center;
    margin: 1rem 0;

    h3,
    a {
      margin-left: 0.7rem;
      font-weight: 500;
    }

    .email {
      text-transform: lowercase;
    }
  }
`;

export const AvatarContainer = styled.div`
  @media (max-width: 800px) {
    display: none;
  }
`;
