import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;

  label {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 0.5rem;
  }

  input {
    background-color: ${({ theme }) => theme.COLORS.DARK_900};
    color: ${({ theme }) => theme.COLORS.LIGHT_100};
    padding: 0.875rem 1rem;
    border: none;
    border-radius: 0.5rem;
  }
`
