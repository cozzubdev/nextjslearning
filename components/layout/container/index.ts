import styled from 'styled-components';
import { Media } from 'config/medias';

export const Container = styled.div`
  width: 100%;
  margin-right: auto;
  margin-left: auto;
  height: auto;
  margin-top: 1rem;
  margin-bottom: 1rem;

  @media ${Media.md} {
    width: 54rem;
    margin-top: 2rem;
    margin-bottom: 2rem;
  }
  @media ${Media.lg} {
    width: 65rem;
    margin-top: 3rem;
    margin-bottom: 3rem;
  }

  @media ${Media.xl} {
    width: 80em;
    margin-top: 5rem;
    margin-bottom: 5rem;
  }
`;
