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

  h2 {
    margin-top: 0;
    font-size: 1.2rem;
    font-weight: 500;
    color: #333;
  }

  p {
    font-size: 0.9rem;
    color: #666;
    flex-grow: 1;
  }

  a {
    color: #0077b6;
    text-decoration: none;
    align-self: flex-end;
    font-weight: 500;
  }
`;