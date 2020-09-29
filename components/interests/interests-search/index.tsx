import React, { ReactElement } from 'react';

import { TextField } from '@material-ui/core';

import { InterestsSearchProps } from './type';

export const InterestsSearch = ({
  handleChange,
}: InterestsSearchProps): ReactElement => {
  return (
    <TextField
      fullWidth
      variant='filled'
      placeholder='Start search channels...'
      type='text'
      onChange={handleChange}
    />
  );
};
