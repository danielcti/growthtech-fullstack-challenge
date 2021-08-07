import styled from "styled-components";

interface ContainerProps {
  size: string;
}

export const Container = styled.div<ContainerProps>`
  border-radius: 50%;
  width: ${(props) => (props.size === "sm" ? "50px" : "150px")};
  height: ${(props) => (props.size === "sm" ? "50px" : "150px")};
  font-size: ${(props) => (props.size === "sm" ? "1rem" : "3rem")};
  background: ${(props) => props.theme.colors.main};
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${(props) => props.theme.colors.light};
  font-weight: bold;
  margin-right: 0.7rem;
  text-transform: uppercase;
`;
