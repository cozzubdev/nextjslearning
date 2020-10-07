import { ReactElement } from 'react';

import {
  Container,
  WorkItemBox,
  WorkItemImage,
  WorkItemTitle,
  ImageContainer,
  WorkLink,
} from './style';

import { WorkProps } from './type';

export const Work = ({ work }: WorkProps): ReactElement => {
  const { url, image, summary, position, endDate, startDate } = work;
  return (
    <Container item container spacing={0} justify='center' direction='row'>
      <WorkLink href={url} target='_blank' rel='noreferrer'>
        <WorkItemBox>
          <ImageContainer>
            <WorkItemImage src={image} alt={summary} />
          </ImageContainer>
          <WorkItemTitle>{`${startDate} - ${endDate}`}</WorkItemTitle>
          <WorkItemTitle>{position}</WorkItemTitle>
        </WorkItemBox>
      </WorkLink>
    </Container>
  );
};
