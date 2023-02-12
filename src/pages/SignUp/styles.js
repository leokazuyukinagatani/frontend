import styled from "styled-components"

export const Container = styled.div`
 background-color: ${({ theme }) => theme.COLORS.DARK_400};
  height: 100vh;
  width: 100%;
  
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  

  img {
    margin-bottom: 4.75rem;
  }
`

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  color: ${({ theme }) => theme.COLORS.LIGHT_400};

`