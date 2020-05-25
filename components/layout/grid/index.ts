import styled from 'styled-components';
import { GridRowProps } from './type';

export const GridRow = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
`;

export const GridCol = styled.div<GridRowProps>`
  width: ${({ colNum }): string | number =>
    colNum ? `calc(100%/${colNum})` : '100%'};
`;
