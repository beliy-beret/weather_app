import { makeStyles } from 'tss-react/mui';

export const useStyle = makeStyles()((theme) => {
  return {
    tempInfo: {
      marginTop: '5%',
      display: 'grid',
      gridTemplateRows: 'repeat(2, auto)',
      gridTemplateColumns: 'repeat(2, 1fr)',
    },
    icon: {
      width: '100%',
      gridRow: 1,
      gridColumn: 1,
      maxWidth: '200px',
      maxHeight: '200px',
      alignSelf: 'end',
      justifySelf: 'center',
      [theme.breakpoints.up('sm')]: {
        justifySelf: 'end',
        alignSelf: 'end',
      }
    },
    value: {
      gridRow: 1,
      gridColumn: 2,
      fontSize: '4rem',
      textAlign: 'center',
      alignSelf: 'end',
      marginBottom: '25%',
      [theme.breakpoints.up('sm')]: {
        justifySelf: 'start',
        alignSelf: 'end',
        fontSize: '8rem',
        marginBottom: '5%',
        marginLeft: '2rem',
      }
    },
    description: {
      gridRow: 2,
      gridColumn: '1/3',
      fontSize: '1.6rem !important',
      alignSelf: 'start',
      [theme.breakpoints.up('sm')]: {
        fontSize: '3rem !important'
      }
    }
  };
});
