import styled from "styled-components";

export const Container = styled.li`
  width: 48%;
  margin: 1rem;
  border-radius: 0.3rem;
  color: ${(props) => props.theme.colors.dark};
  background: ${(props) => props.theme.colors.light};
  padding: 1rem 1rem;
  display: flex;
  flex-direction: column;
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
`;

export const CardHeader = styled.header`
  display: flex;
  align-items: center;
  margin-bottom: 0.7rem;
`;

export const CardContent = styled.div`
  > div {
    display: flex;
    align-items: center;
    margin-top: 1rem;
  }

  h3 {
    margin-left: 0.7rem;
  }
`;
