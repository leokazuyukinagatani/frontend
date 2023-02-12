import Logo from '../../assets/logo.svg'
import Menu from '../../assets/menu.svg'
import Receipt from '../../assets/receipt.svg'
import Macarons from '../../assets/macarons.png'
import { Container } from './styles'

export function Home() {
  return (
    <Container>
      <header>
        <button>
          <img src={Menu} alt="" />
        </button>
        <img src={Logo} alt="" />
        <button>
          <img src={Receipt} alt="" />
        </button>
      </header>

      <div>
        <img src={Macarons} alt="" />
        <div>
          <h1>Sabores inigualáveis</h1>
          <p>Sinta o cuidado do preparo com ingredientes selecionados.</p>
        </div>
      </div>
    </Container>
  )
}
