import styled from "styled-components";

export const Wrapper = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

export const Container = styled.div`
  background: ${(props) => props.theme.colors.lightBackground};
  padding: 3rem 2rem;
  flex: 1;
`;

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 1280px;
  margin: auto;
`;

export const ContentHeader = styled.header`
  color: ${(props) => props.theme.colors.dark};

  h2 {
    font-size: 1.5rem;
    margin-bottom: 0.5rem;
  }

  h3 {
    font-size: 1rem;
    font-weight: 400;
  }
`;

export const ContentList = styled.ul`
  margin-top: 2rem;
  display: flex;
  flex-wrap: wrap;
`;
