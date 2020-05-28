import styled from 'styled-components';

export const InterestWrapper = styled.div`
  margin: 1rem;
  border: 0.1rem #5735f0 solid;
  flex-basis: 30%;
`;

export const InterestImage = styled.img`
  width: 100%;
  cursor: pointer;
  :hover {
    transform: translate3d(11rem, 11rem);
  }
`;

export const InterestImageWrapper = styled.div`
  width: 100%;
  background-color: #5735f0;
`;

export const InterestTitle = styled.p`
  margin: 1rem;
  font-size: 1rem;
  color: #5735f0;
  font-weight: 700;
`;
