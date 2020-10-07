import styled from 'styled-components';

export const StyledBubble = styled.span`
  color: #fff;
  font-size: 14px;
  font-weight: 700;
  line-height: 1.1;
  display: inline-block;
  padding: 7px 12px;
  text-transform: uppercase;
  position: relative;
  background-color: rgb(59, 75, 149);
  border-left-color: rgb(59, 75, 149);

  ::before {
    content: '';
    width: 0;
    height: 0;
    top: 100%;
    left: 5px;
    display: block;
    position: absolute;
    border-style: solid;
    border-width: 0 0 8px 8px;
    border-color: transparent;
    border-left-color: rgb(59, 75, 149);
  }
`;
