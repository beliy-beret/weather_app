import { makeStyles } from 'tss-react/mui';

export const useStyle = makeStyles()((theme) => {
  return {
    cityBox: {
      marginTop: '3%',
      display: 'grid',
      gridTemplateRows: 'repeat(2, auto)',
    },
    cityName: {
      gridRow: 1,
    },
    changeCityButton: {
      gridRow: 2,
      color: '#FFFFFF !important',
      width: 'fit-content',
      textDecoration: 'underline !important',
      paddingLeft: '0 !important',
    },
    unitWrapper: {
      gridRow: 1,
      marginLeft: 'auto',
      display: 'flex',
      alignItems: 'center',
    },
    indicators: {
      display: 'grid',
      gridTemplateColumns: 'repeat(2, 1fr)',
      gap: 3,
      [theme.breakpoints.up('md')]: {
        gridTemplateColumns: 'repeat(4, 1fr)'
      }
    },
  };
});
