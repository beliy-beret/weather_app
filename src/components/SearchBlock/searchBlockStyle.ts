import { makeStyles } from 'tss-react/mui';

export const useStyle = makeStyles()(() => {
  return {
    searchBlock: {
      gridRow: '1/3',
      display: 'grid',
      gridTemplateRows: 'repeat(2, auto)',
      gridTemplateColumns: 'repeat(2, 1fr)',
      gap: 2,
      maxWidth: '300px',
    },
    inputField: {
      gridRow: 1,
      gridColumn: '1/3',
      backgroundColor: '#FFFFFF',
      borderRadius: '2px',
      padding: '0.2rem 0.7rem !important',
    },
    btn: {
      gridRow: 2,
      backgroundColor: '#FFFFFF !important',
      '&:hover': {
        backgroundColor: '#ebe6e6 !important'
      }
    }
  };
});
