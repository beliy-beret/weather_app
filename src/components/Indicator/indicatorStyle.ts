import { makeStyles } from 'tss-react/mui';

export const useStyle = makeStyles()(() => {
  return {
    indicator: {
      backgroundColor: '#9595e5',
      padding: '0.5rem',
      borderRadius: '5px',
    },
  };
});
