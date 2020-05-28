import styled from 'styled-components';

export const InterestWrapper = styled.div`
  margin: 1rem;
  border: 0.1rem darkblue solid;
  flex-basis: 30%;
`;

export const InterestImage = styled.img`
  width: 100%;
  :hover {
    transform: translate3d(1rem, 1rem);
  }
`;

export const InterestImageWrapper = styled.div`
  width: 100%;
  background-color: blueviolet;
`;

export const InterestTitle = styled.p`
  margin: 1rem;
  font-size: 1rem;
  color: blueviolet;
  font-weight: 700;
`;
