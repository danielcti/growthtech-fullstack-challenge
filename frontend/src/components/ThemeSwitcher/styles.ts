import styled from "styled-components";
import { IoMdMoon, IoMdSunny } from "react-icons/io";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-left: 1rem;
  .custom-classname .react-toggle--checked .react-toggle-track {
    background-color: red;
    height: 9rem;
    width: 9rem;
    padding: 1.1rem;
  }
`;

export const Sun = styled(IoMdSunny)`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  font-size: 1.5rem;
  padding-left: 0.5rem;
`;

export const Moon = styled(IoMdMoon)`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  font-size: 1.5rem;
  padding-left: 1rem;
`;
