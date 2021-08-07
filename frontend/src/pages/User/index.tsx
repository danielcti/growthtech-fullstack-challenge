import React, { useState } from "react";
import Header from "../../components/Header";
import UserProfile from "../../components/UserProfile";
import { useParams } from "react-router-dom";

import {
  Wrapper,
  Container,
  PostList,
  ContentWrapper,
  PostsContainer,
} from "./styles";
import { useEffect } from "react";
import api from "../../services/api";
import Post from "../../components/Post";
import { User as UserType } from "../../utils/types";

interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
  postAuthor: UserType;
}

interface Params {
  id: string;
}

function User() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [userData, setUserData] = useState<UserType>();
  const params = useParams() as Params;

  useEffect(() => {
    async function fetchData() {
      const { data: user } = await api.get(`users/${params.id}`);
      const { data: posts } = await api.get<Post[]>(`users/${params.id}/posts`);

      posts.forEach((post) => {
        post.postAuthor = user;
      });

      setUserData(user);
      setPosts(posts);
    }
    fetchData();
  }, []);

  return (
    <Wrapper>
      <Header />
      <Container>
        {userData && (
          <ContentWrapper>
            <UserProfile data={userData} />
            <PostsContainer>
              <h2>Posts</h2>
              <PostList>
                {posts.map((post) => (
                  <Post post={post} />
                ))}
              </PostList>
            </PostsContainer>
          </ContentWrapper>
        )}
      </Container>
    </Wrapper>
  );
}

export default User;
