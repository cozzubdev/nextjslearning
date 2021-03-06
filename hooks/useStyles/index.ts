import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2, 0),
  },
  icon: {
    marginRight: theme.spacing(2),
  },
  heroContent: {
    padding: theme.spacing(8, 0, 6),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardMedia: {
    paddingTop: '56.25%', // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  },
  header: {
    marginBottom: theme.spacing(6),
  },
}));

export const useAboutstyles = makeStyles((theme) => ({
  container: {
    marginLeft: theme.spacing(20),
    marginRight: theme.spacing(20),
  },
  content: {
    zIndex: 2,
    position: 'relative',
  },
  padding0: {
    padding: '0 !important',
  },
}));

export const useContactStyles = makeStyles((theme) => ({
  container: {
    margin: theme.spacing(0),
    padding: theme.spacing(0),
  },
  itemContainer: {
    padding: theme.spacing(0),
    [theme.breakpoints.down('md')]: {
      padding: theme.spacing(0),
    },
  },
}));
