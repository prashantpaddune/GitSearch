import React from 'react';
import { RepoCardStyled } from './styles';

const RepoCard = ({ repo = {} }) => {
    return (
        <RepoCardStyled>
            <h2>{repo.name}</h2>
            <p>{repo.description}</p>
            <a href={repo.html_url} target="_blank" rel="noopener noreferrer">View on GitHub</a>
        </RepoCardStyled>
    );
}

export default RepoCard;
