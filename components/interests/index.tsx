import React, { ReactElement } from 'react';
import { InterestListWrapper } from './style';
import { InterestListProps } from './type';
import { Interest } from './interest-item';

export const InterestList = ({ data }: InterestListProps): ReactElement => {
  return (
    <InterestListWrapper>
      {data?.map((interest) => (
        <Interest key={interest?.id} data={interest} />
      ))}
    </InterestListWrapper>
  );
};
