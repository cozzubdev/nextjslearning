import { ChangeEvent, MutableRefObject } from 'react';

export type InterestsSearchProps = {
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
  inputRef?: MutableRefObject<HTMLInputElement | undefined>;
};
