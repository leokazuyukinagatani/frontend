import { Container } from "./styles";
import { Input } from "../../components/Input";
import useForm from "../../hooks/useForm";

export function SignIn() {
  const email = useForm("email");
  return (
    <Container>
      <h1>Rocket Foods</h1>
      <h2>Faça seu login</h2>
      <Input id="email" label="Email" type="email" {...email} />
    </Container>
  );
}
