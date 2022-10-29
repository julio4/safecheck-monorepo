import { ComponentProps } from 'react';
import styled from 'styled-components';

const Input = styled.input`
  display: flex;
  align-self: flex-start;
  align-items: center;
  justify-content: center;
  margin-top: auto;
  ${({ theme }) => theme.mediaQueries.small} {
    width: 100%;
  }
`;

const Bar = styled.input`
    display: flex;
    margin-top: 2rem;
`;

export const SearchBar = (props: ComponentProps<typeof Input>) => (
    <Bar>
    </Bar>
);