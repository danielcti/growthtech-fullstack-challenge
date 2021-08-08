import React, { useState } from "react";
import Loader from "react-loader-spinner";
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

interface PostType {
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
  const [posts, setPosts] = useState<PostType[]>([]);
  const [companyData, setCompanyData] = useState<CompanyType>();
  const [loading, setLoading] = useState(false);
  const params = useParams() as Params;

  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      const { data: company } = await api.get(`companies/${params.slug}`);
      const { data: posts } = await api.get<PostType[]>(
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
      setLoading(false);
    }
    fetchData();
  }, [params.slug]);

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
              {companyData && <CompanyProfile data={companyData} />}
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

export default Company;
