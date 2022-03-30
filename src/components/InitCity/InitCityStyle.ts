import { makeStyles } from 'tss-react/mui';

export const useStyle = makeStyles()((theme) => {
  return {
    form: {
      margin: '15% auto',
      display: 'flex',
      gap: 5,
      justifyContent: 'center',
      padding: '10% 3%',
      [theme.breakpoints.up('sm')]: {
        width: '70%',
      }
    },
    inputField: {
      flex: '1 1 70%',
      borderRadius: '5px',
      '& input': {
        fontSize: '0.8rem',
        [theme.breakpoints.up('sm')]: {
          fontSize: '1.2rem',
        }
      },
      '& label': {
        fontWeight: 'bold',
        fontSize: '0.8rem',
        [theme.breakpoints.up('sm')]: {
          fontSize: '1rem',
        }
      }
    },
    btn: {
      flex: '1 1 25%',
      fontSize: '0.7rem !important',
      [theme.breakpoints.up('sm')]: {
        fontSize: '1rem !important',
      }
    },
  }
    ;
});
