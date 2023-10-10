import React from 'react';
import Search from './Search';
import { RepoList, Container, Heading, CenteredContainer, Message } from './styles';
import RepoCard from "./RepoCard";
import useGetRepos from "../hooks/useGetRepos";

function AppRoot() {
    const {
        loading = false,
        message = '',
        repos = [],
        searchRepos = () => {}
    } = useGetRepos();

    const renderData = () => {
        if (loading) {
            return (
                <CenteredContainer>
                    <Message>Loading...</Message>
                </CenteredContainer>
            )
        }

        if (message) {
            return (
                <CenteredContainer>
                    <Message>{message}</Message>
                </CenteredContainer>
            );
        }

        return (
            <RepoList>
                {repos.map(repo => <RepoCard key={repo.id} repo={repo} />)}
            </RepoList>
        );
    }

    return (
      <Container>
        <Heading>GitHub Repo Search</Heading>
        <Search onSearch={searchRepos} />
        {renderData()}
      </Container>
  );
}

export default AppRoot;
