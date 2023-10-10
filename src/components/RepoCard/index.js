import React from 'react';
import {RepoCardStyled, Avatar, RepoName, RepoDetails, Description, GitHubLink} from './styles';

const RepoCard = ({ repo = {} }) => {
    return (
        <RepoCardStyled>
            <Avatar src={repo.owner.avatar_url} alt={`${repo.owner.login}'s avatar`} />
            <RepoName>{repo.name}</RepoName>
            <RepoDetails>
                <div><strong>Stars:</strong> {repo.stargazers_count}</div>
                <div><strong>Language:</strong> {repo.language || 'N/A'}</div>
            </RepoDetails>
            <Description>{repo.description}</Description>
            <GitHubLink href={repo.html_url} target="_blank" rel="noopener noreferrer">View on GitHub</GitHubLink>
        </RepoCardStyled>
    );
}

export default RepoCard;
