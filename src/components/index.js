import React from 'react';
import Search from './Search';
import { RepoList, Container, Heading } from './styles';
import RepoCard from "./RepoCard";
import useGetRepos from "../hooks/useGetRepos";

function AppRoot() {
    const { repos = [], searchRepos = () => {} } = useGetRepos();

    return (
      <Container>
        <Heading>GitHub Repo Search</Heading>
        <Search onSearch={searchRepos} />
        <RepoList>
          {repos.map(repo => <RepoCard key={repo.id} repo={repo} />)}
        </RepoList>
      </Container>
  );
}

export default AppRoot;
