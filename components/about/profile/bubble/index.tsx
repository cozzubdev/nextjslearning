import { ReactElement } from 'react';

import { StyledBubble } from './style';

import { BubbleProps } from './type';

export const Bubble = ({ content }: BubbleProps): ReactElement => {
  return <StyledBubble>{content}</StyledBubble>;
};
