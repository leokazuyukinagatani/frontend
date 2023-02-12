import styled from "styled-components";

export const Container = styled.div`
  background-color: ${({ theme }) => theme.COLORS.DARK_400};
  height: 100vh;
  width: 100%;

  button {
    background-color: transparent;
    border: none;
  }

  header {
    background-color: ${({ theme }) => theme.COLORS.DARK_700};
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 4rem 2rem 2rem;
    margin-bottom: 1rem;

  }
`