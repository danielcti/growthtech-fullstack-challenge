import React from "react";
import { Link } from "react-router-dom";
import { User } from "../../utils/types";
import Avatar from "../Avatar";

import { Wrapper, Container, PostHeader, PostContent } from "./styles";

interface PostProps {
  post: {
    userId: number;
    id: number;
    title: string;
    body: string;
    postAuthor: User;
  };
}

function Post({ post }: PostProps) {
  return (
    <Wrapper>
      <Link to={`/posts/${post.id}`}>
        <Container>
          <PostHeader>
            <Avatar size="sm">{post.postAuthor?.name[0]}</Avatar>
            <div>
              <h2>{post.postAuthor?.name}</h2>
              <h3>{post.postAuthor?.username}</h3>
            </div>
          </PostHeader>
          <PostContent>
            <p>{post.title}</p>
          </PostContent>
        </Container>
      </Link>
    </Wrapper>
  );
}

export default Post;
