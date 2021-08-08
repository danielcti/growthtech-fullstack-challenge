import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Header from "../../components/Header";
import api from "../../services/api";
import { User } from "../../utils/types";
import { FaReadme } from "react-icons/fa";
import { getLectureTime, getRandomDate } from "../../utils/auxiliar-methods";

import {
  Wrapper,
  ContentWrapper,
  Container,
  PostHeader,
  PostContent,
  CommentsList,
} from "./styles";
import Comment from "../../components/Comment";

interface PostType {
  userId: number;
  id: number;
  title: string;
  body: string;
  comments: CommentType[];
}

interface CommentType {
  postId: number;
  id: number;
  name: string;
  email: string;
  body: string;
}

interface Params {
  id: string;
}

function Post() {
  const [post, setPost] = useState<PostType>();
  const [userData, setUserData] = useState<User>();
  const params = useParams() as Params;

  useEffect(() => {
    async function fetchData() {
      const { data: post } = await api.get<PostType>(`posts/${params.id}`);
      const { data: user } = await api.get(`users/${post.userId}`);

      setUserData(user);
      setPost(post);
    }
    fetchData();
  }, [params.id]);
  return (
    <Wrapper>
      <Header />
      <Container>
        <ContentWrapper>
          <h2>Detalhes do Post</h2>
          <PostHeader>
            <h1>{post?.title}</h1>
            <h3>
              {getRandomDate()} <span>por</span> {userData?.name}
            </h3>
            <h4>
              <FaReadme />
              {getLectureTime(post?.body || "")}
            </h4>
          </PostHeader>
          <PostContent>
            <img src="https://picsum.photos/1200/600" alt="Imagem aleatória" />
            <p>{post?.body}</p>
          </PostContent>
          <h2>Comentários</h2>
          <CommentsList>
            {post?.comments.map((comment) => (
              <Comment key={comment.id} data={comment} />
            ))}
          </CommentsList>
        </ContentWrapper>
      </Container>
    </Wrapper>
  );
}

export default Post;
