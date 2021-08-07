import React, { useState } from "react";
import Header from "../../components/Header";
import CompanyProfile from "../../components/CompanyProfile";
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
import { Company as CompanyType, User } from "../../utils/types";

interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
  postAuthor: User;
}

interface Params {
  slug: string;
}

function Company() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [companyData, setCompanyData] = useState<CompanyType>();
  const params = useParams() as Params;

  useEffect(() => {
    async function fetchData() {
      const { data: company } = await api.get(`companies/${params.slug}`);
      const { data: posts } = await api.get<Post[]>(
        `posts?company=${company?.name}`
      );
      const { data: users } = await api.get<User[]>("users");

      posts.forEach((post) => {
        const postAuthor = users.find((user) => user.id === post.userId);
        if (postAuthor) {
          post.postAuthor = postAuthor;
        }
      });

      setCompanyData(company);
      setPosts(posts);
    }
    fetchData();
  }, []);

  return (
    <Wrapper>
      <Header />
      <Container>
        {companyData && (
          <ContentWrapper>
            <CompanyProfile data={companyData} />
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

export default Company;
