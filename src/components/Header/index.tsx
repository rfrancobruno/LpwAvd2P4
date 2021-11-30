
import vivo from '../../assets/vivo.png'
import moca from '../../assets/moca.png'


import { Container, Content } from './styles'

interface IHeaderProps {
  onOpenNewTransactionModal: () => void;
}

export function Header({onOpenNewTransactionModal}: IHeaderProps) {
  return (
    <Container>
      <Content>
        <img src={vivo} alt="dt money" />
        <img src={moca} alt="dt money" />
      </Content>
    </Container>
  )
}