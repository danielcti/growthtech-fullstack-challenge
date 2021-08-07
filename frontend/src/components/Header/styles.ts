import styled from "styled-components";

export const Container = styled.header`
  background: ${(props) => props.theme.colors.secondary};
  padding: 1rem 2rem;
`;

export const Wrapper = styled.div`
  display: -webkit-box;
  align-items: center;
  justify-content: space-between;
  max-width: 1280px;
  margin: auto;
`;

export const Navbar = styled.nav`
  display: -webkit-box;
  align-items: center;

  a {
    text-decoration: none;
    margin: 0 1rem;
    display: block;
    font-size: 1.2rem;

    &.active {
      color: ${(props) => props.theme.colors.main};
      font-weight: bold;
    }
  }
`;
