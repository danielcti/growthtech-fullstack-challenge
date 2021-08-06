import styled from "styled-components";

export const Container = styled.header`
  background: #ea9c02;
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
      color: #009fe3;
      font-weight: bold;
    }
  }
`;
