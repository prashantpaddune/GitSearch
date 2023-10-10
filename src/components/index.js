import React from 'react';
import Search from './Search';
import { RepoList, Container, Heading, CenteredContainer, Message, SearchBarContainer } from './styles';
import RepoCard from "./RepoCard";
import useGetRepos from "../hooks/useGetRepos";
import Sort from "./Sort";

function AppRoot() {
    const {
        loading = false,
        message = '',
        repos = [],
        searchRepos = () => {},
        handleSortChange = () => {}
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
          <SearchBarContainer>
              <Search onSearch={searchRepos} />
              <Sort onSortChange={handleSortChange} />
          </SearchBarContainer>
          {renderData()}
      </Container>
  );
}

export default AppRoot;
