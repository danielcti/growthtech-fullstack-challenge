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
  }

  > h2 {
    text-transform: uppercase;
    margin-bottom: 2rem;
  }

  > div {
    display: flex;
    align-items: center;
    h2 {
      margin-left: 0.7rem;
    }
  }
`;

export const AvatarContainer = styled.div`
  @media (max-width: 800px) {
    display: none;
  }
`;
