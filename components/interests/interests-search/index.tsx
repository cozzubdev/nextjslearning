import React, { ReactElement } from 'react';
import { InterestsSearchWrapper, InterestsSearchInput } from './style';
import { InterestsSearchProps } from './type';

export const InterestsSearch = ({
  handleChange,
}: InterestsSearchProps): ReactElement => {
  return (
    <InterestsSearchWrapper>
      <InterestsSearchInput
        placeholder='Start search channels...'
        type='text'
        onChange={handleChange}
      />
    </InterestsSearchWrapper>
  );
};
