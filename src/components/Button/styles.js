import styled from 'styled-components'

export const Container = styled.button`
  width: 100%;
  background-color: ${({ theme }) => theme.COLORS.TOMATO_100};
  padding: 0.75rem 2rem;
  gap: 0.5rem;
  border: none;
  border-radius: 0.5rem;
  color: ${({ theme }) => theme.COLORS.LIGHT_100};

  font-family: 'Poppins', sans-serif;
  font-weight: medium;
  font-size: 0.875rem;
  line-height: 150%;
  text-decoration: none;

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`
