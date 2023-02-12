import { Form, Container } from './styles'

import { Link } from 'react-router-dom'
import Logo from '../../assets/logo.svg'
import { Input } from '../../components/Input'
import { useState } from 'react'
import { Button } from '../../components/Button'

export function SignUp() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  return (
    <Container>
      <img src={Logo} alt="logo" />
      <Form>
        <Input
          label="Seu nome"
          type="text"
          placeholder="Exemplo: Maria da Silva"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <Input
          label="Email"
          type="email"
          placeholder="Exemplo: exemplo@exemplo.com.br"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <Input
          label="Password"
          type="password"
          placeholder="No mínimo 6 caracteres"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <Button title="Criar conta" />
        <Link to="/">Já tenho uma conta</Link>
      </Form>
    </Container>
  )
}
