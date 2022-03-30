import React, { ChangeEvent, useState } from 'react';
import { Button, Container, Paper, TextField } from '@mui/material';
import { Search } from '@mui/icons-material';
import { useStyle } from './InitCityStyle';

type Props = {
  getInitData: (cityName: string) => void
}

const InitCity: React.FC<Props> = ({ getInitData }) => {
  const [cityName, setCityName] = useState('');

  function handleCityName(e: ChangeEvent<HTMLInputElement>) {
    setCityName(e.target.value);
  }

  function submit() {
    getInitData(cityName);
  }

  const { classes } = useStyle();
  return (
    <Container maxWidth={'md'}>
      <Paper
        className={classes.form}
        elevation={8}
      >
        <TextField
          className={classes.inputField}
          variant={'filled'}
          size={'small'}
          label={'Укажите ваш город'}
          type={'text'}
          value={cityName}
          onChange={handleCityName}
        />
        <Button
          className={classes.btn}
          variant={'outlined'}
          onClick={submit}
          disabled={!cityName}
          startIcon={<Search/>}
        >
          Выбрать
        </Button>
      </Paper>
    </Container>
  );
};

export default InitCity;
