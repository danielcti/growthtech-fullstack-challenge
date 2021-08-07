import React from "react";

import { Container } from "./styles";

interface AvatarProps {
  children: string;
  size: string;
}

function Avatar({ children, size }: AvatarProps) {
  return <Container size={size}>{children}</Container>;
}

export default Avatar;
