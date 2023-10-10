import styled from 'styled-components';

export const SearchBox = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
  max-width: 600px;
  width: 100%;
  margin-left: auto;
  margin-right: auto;
`;

export const SearchInput = styled.input`
  padding: 10px 15px;
  border-radius: 4px;
  border: 1px solid #ddd;
  flex: 1;
  margin-right: 10px;
  font-size: 1rem;
`;

export const SearchButton = styled.button`
  padding: 10px 15px;
  background-color: #0077b6;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s;
  font-size: 1rem;

  &:hover {
    background-color: #005792;
  }
`;