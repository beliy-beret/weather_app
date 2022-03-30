import React, { ChangeEvent, useState } from 'react';
import { Box, Button, TextField } from '@mui/material';
import { useStyle } from './searchBlockStyle';

type Props = {
  changeCityName: (searchValue: string) => void;
  editModeHandle: () => void;
}

const SearchBlock: React.FC<Props> = ({
  changeCityName,
  editModeHandle
}) => {
  const [searchValue, setSearchValue] = useState('');
  const searchHandle = (e: ChangeEvent<HTMLInputElement>) => setSearchValue(e.target.value);
  const { classes } = useStyle();

  function submit() {
    changeCityName(searchValue);
    setSearchValue('');
  }

  return (
    <Box className={classes.searchBlock}>
      <TextField
        className={classes.inputField}
        type="search"
        variant={'standard'}
        fullWidth={true}
        onChange={searchHandle}
        value={searchValue}
      />
      <Button
        className={classes.btn}
        variant={'outlined'}
        onClick={submit}
        disabled={!searchValue}
      >
        OK
      </Button>
      <Button
        className={classes.btn}
        variant={'outlined'}
        onClick={editModeHandle}
      >
        Cancel
      </Button>
    </Box>
  );
};

export default SearchBlock;
