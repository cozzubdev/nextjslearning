import styled from 'styled-components';

export const NavigationItemWrapper = styled.div`
  font-size: 2rem;

  &:not(:last-child) {
    margin-right: 1rem;
  }
`;

export const NavigationLink = styled.a`
  cursor: pointer;
  text-decoration: none;
  color: #b8b5f5;
  :hover {
    color: #5735f0;
  }
`;
