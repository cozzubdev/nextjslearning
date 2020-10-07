import { ReactElement } from 'react';

import {
  Container,
  WorkItemBox,
  WorkItemImage,
  WorkItemTitle,
  ImageContainer,
  WorkLink,
} from 'components/about/experience/work/style';

import { ProjectProps } from './type';

export const Project = ({ project }: ProjectProps): ReactElement => {
  const { url, image, name } = project;
  return (
    <Container item container justify='center' direction='row' spacing={0}>
      <WorkLink href={url} target='_blank' rel='noreferrer'>
        <WorkItemBox>
          <ImageContainer>
            <WorkItemImage src={image} alt={name} />
          </ImageContainer>

          <WorkItemTitle>{name}</WorkItemTitle>
        </WorkItemBox>
      </WorkLink>
    </Container>
  );
};
