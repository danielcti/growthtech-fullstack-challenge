import React from "react";
import Avatar from "../Avatar";

import { Wrapper, Container, CommentHeader, CommentContent } from "./styles";

interface CommentProps {
  data: {
    postId: number;
    id: number;
    name: string;
    email: string;
    body: string;
  };
}

function Comment({ data }: CommentProps) {
  return (
    <Wrapper>
      <Container>
        <CommentHeader>
          <Avatar size="sm">{data.name[0]}</Avatar>
          <div>
            <h2>{data.name}</h2>
            <h3>{data.email}</h3>
          </div>
        </CommentHeader>
        <CommentContent>
          <p>{data.body}</p>
        </CommentContent>
      </Container>
    </Wrapper>
  );
}

export default Comment;
