import { ReactElement } from 'react';
import NextLink from 'next/link';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';

export const Copyright = (): ReactElement => {
  return (
    <Typography variant='body2' color='textSecondary' align='center'>
      {'Copyright © '}
      <Link color='inherit' href='https://material-ui.com/'>
        Your Website &nbsp;
      </Link>
      {new Date().getFullYear()}.
    </Typography>
  );
};
