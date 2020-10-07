import styled from 'styled-components';
import { Media } from 'config/medias';

import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

export const Container = styled(Grid)`
  padding: 0;
  margin: 0;
`;

export const WorkItemImage = styled.img`
  transition: opacity 1s, transform 1s;
  height: auto;
  display: block;
  position: relative;
  backface-visibility: hidden;
  padding: 20px;
  background-color: white;
  object-fit: fill;

  @media ${Media.md} {
    margin: 0;
    margin-bottom: 30px;
  }
`;

export const WorkItemBox = styled(Paper)`
  position: relative;
  background-color: #fff;
  transition: box-shadow 0.15s linear 0s;
  backface-visibility: hidden;
  margin: 10px;
  margin-bottom: 50px;
  padding-bottom: 20px;
  width: 100%;

  @media ${Media.sm} {
    margin: 0;
    margin-bottom: 30px;
  }

  @media ${Media.md} {
    width: auto;
    margin: 0;
    margin-bottom: 30px;
  }

  :hover {
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.19), 0 6px 10px rgba(0, 0, 0, 0.23);
    cursor: pointer;
  }
`;

export const ImageContainer = styled.div`
  overflow: hidden;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  :hover img {
    opacity: 1;
    transform: scale3d(1.1, 1.1, 1);
  }
`;

export const WorkItemTitle = styled.h2`
  font-size: 16px;
  line-height: 1.3;
  font-weight: 700;
  text-transform: none;
  text-decoration: none;
  text-align: center;
  word-wrap: normal;
`;

export const WorkLink = styled.a`
  text-decoration: none;
`;
