import { Container } from './styles'

export function Input({ label, value, ...rest }) {
  return (
    <Container>
      <label>
        {label}
        <input value={value} type="email" {...rest} />
      </label>
    </Container>
  )
}
