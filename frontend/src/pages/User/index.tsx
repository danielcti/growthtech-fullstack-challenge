import React, { useState } from "react";
import Loader from "react-loader-spinner";
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

interface PostType {
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
  const [posts, setPosts] = useState<PostType[]>([]);
  const [userData, setUserData] = useState<UserType>();
  const [loading, setLoading] = useState(false);
  const params = useParams() as Params;

  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      const { data: user } = await api.get(`users/${params.id}`);
      const { data: posts } = await api.get<PostType[]>(
        `users/${params.id}/posts`
      );

      posts.forEach((post) => {
        post.postAuthor = user;
      });

      setUserData(user);
      setPosts(posts);
      setLoading(false);
    }
    fetchData();
  }, [params.id]);

  return (
    <Wrapper>
      <Header />
      <Container>
        <ContentWrapper>
          {loading ? (
            <Loader
              type="TailSpin"
              color="#009fe3"
              height={100}
              width={100}
              timeout={3000}
            />
          ) : (
            <>
              {userData && <UserProfile data={userData} />}
              <PostsContainer>
                <h2>Posts</h2>
                <PostList>
                  {posts.map((post) => (
                    <Post post={post} />
                  ))}
                </PostList>
              </PostsContainer>
            </>
          )}
        </ContentWrapper>
      </Container>
    </Wrapper>
  );
}

export default User;
