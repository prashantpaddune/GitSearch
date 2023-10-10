import styled from 'styled-components';

export const RepoCardStyled = styled.div`
  background-color: #f7f7f7;
  border-radius: 8px;
  padding: 16px;
  width: 300px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: start;
`;

export const Avatar = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  margin-bottom: 10px;
`;

export const RepoName = styled.h2`
  margin-top: 0;
  font-size: 1.2rem;
  font-weight: 500;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  width: 100%;
`;

export const RepoDetails = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  font-size: 0.9rem;
  margin-bottom: 8px;
`;

export const Description = styled.p`
  flex-grow: 1;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
`;

export const GitHubLink = styled.a`
  color: #0077b6;
  text-decoration: none;
  align-self: flex-start;
  font-weight: 500;
  margin-top: 10px;

  &:hover {
    text-decoration: underline;
  }
`;
