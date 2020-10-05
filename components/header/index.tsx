import { ReactElement } from 'react';
import Container from '@material-ui/core/Container';
import { Navigation } from 'components/navigation';
import { useStyles } from 'hooks/useStyles';

export const Header = (): ReactElement => {
  const classes = useStyles();
  return (
    <Container className={classes.header} maxWidth='xl'>
      <Navigation />
    </Container>
  );
};
