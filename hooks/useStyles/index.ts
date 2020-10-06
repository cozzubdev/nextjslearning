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

export const useContactFormStyles = makeStyles((theme) => ({
  container: {
    margin: theme.spacing(0),
    padding: theme.spacing('15px', '30px'),
    flexGrow: 1,
  },
  button: {
    color: 'white',
    margin: theme.spacing('20px', 0),
  },
  heading: {
    marginBottom: theme.spacing(0),
  },
}));

export const useMapStyles = makeStyles((theme) => ({
  container: {
    margin: 0,
    flexGrow: 1,
    height: '100%',

    [theme.breakpoints.down('md')]: {
      marginTop: theme.spacing(20),
    },
  },
  contactContainer: {
    padding: theme.spacing('15px', '30px'),
  },
  gridContainer: {
    height: '100%',
  },
  mapContainer: {
    margin: theme.spacing(0),
    padding: theme.spacing(0),
    flex: 1,
    width: '100%',
    height: '100%',
    minHeight: 300,
  },
}));

export const useContactInfoStyles = makeStyles((theme) => ({
  container: {
    margin: theme.spacing(30),
    padding: theme.spacing('15px', '30px'),
    flexGrow: 1,
  },
  profileListItem: {
    color: '#000000',
    fontSize: 12,
    fontWeight: 700,
    textTransform: 'uppercase',
    textAlign: 'left',
    margin: 0,
    padding: 0,
  },
  profileListItemValue: {
    color: '#000000',
    fontSize: 15,
    textAlign: 'left',
    marginTop: -3,
    padding: 0,
  },
  profileValueAItemValue: {
    color: 'inherit',
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
    padding: theme.spacing(1),
    [theme.breakpoints.down('md')]: {
      padding: theme.spacing(0),
    },
  },
}));
