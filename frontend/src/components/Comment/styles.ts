import styled from "styled-components";

export const Wrapper = styled.li`
  width: 48%;
  margin: 1rem;
  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
  transition: all 0.3s;

  &:hover {
    transform: scale(1.05);
  }

  &:nth-child(odd) {
    margin-left: 0;
  }
  &:nth-child(even) {
    margin-right: 0;
  }

  @media (max-width: 1180px) {
    width: 100%;
    margin-left: 0;
    margin-right: 0;
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 0.5rem;
  background: ${(props) => props.theme.colors.light};
  padding: 2rem;
  color: ${(props) => props.theme.colors.dark};
  height: 100%;
`;

export const CommentHeader = styled.header`
  display: flex;
  align-items: center;

  h2 {
    text-transform: capitalize;
  }

  h3 {
    font-weight: 300;
    text-transform: lowercase;
    margin-top: 0.2rem;
  }
`;

export const CommentContent = styled.div`
  margin-top: 2rem;

  p {
    line-height: 1.2;
    font-size: 1rem;
  }
`;
