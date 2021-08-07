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
  color: ${(props) => props.theme.colors.dark};
`;

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 1280px;
  margin: auto;

  > h2 {
    font-size: 1.5rem;
    text-align: center;
    color: ${(props) => props.theme.colors.main};
  }
`;

export const PostHeader = styled.header`
  margin: 1rem 0;
  h1 {
    font-size: 2rem;
    max-width: 800px;
    margin: 2rem auto;
    text-transform: capitalize;
    text-align: center;
  }

  h3 {
    font-size: 0.8rem;
    margin: auto;
    text-align: center;
    font-weight: 300;
    text-transform: uppercase;

    span {
      margin: 0 1rem;
      color: ${(props) => props.theme.colors.darkHovered};
    }
  }

  h4 {
    svg {
      margin-right: 0.5rem;
    }
    margin-top: 1rem;
    display: flex;
    justify-content: center;
    font-weight: 300;
    font-size: 0.8rem;
  }
`;

export const PostContent = styled.div`
  margin: 2rem 0 4rem;

  img {
    width: 100%;
  }

  p {
    font-size: 1.2rem;
    line-height: 1.5;
    margin-top: 1rem;
  }
`;

export const CommentsList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  margin-top: 2rem;
`;
