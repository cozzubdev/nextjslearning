import { ReactElement } from 'react';

import { Container, SocialButton } from './style';

import { SocialIconsProps } from './type';

export const SocialIcons = ({ color }: SocialIconsProps): ReactElement => {
  return (
    <Container item container justify='center' spacing={0}>
      <SocialButton
        url='https://www.facebook.com/mykola.kozubov'
        fontSize='24px'
        bgColor={color}
      />
      <SocialButton
        url='https://www.twitch.tv/surrealhw'
        fontSize='24px'
        bgColor={color}
      />
      <SocialButton
        url='https://www.linkedin.com/in/mykola-kozubov/'
        fontSize='24px'
        bgColor={color}
      />
      <SocialButton
        url='https://github.com/cozzubdev'
        fontSize='24px'
        bgColor={color}
      />
    </Container>
  );
};
