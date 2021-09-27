import logoImg from '../../assets/logo.svg'
import { Container, Content } from './styles'

interface HeaderProps{
  onOpenNewTransitionModal: ()=>void;
}

export function Header({onOpenNewTransitionModal}: HeaderProps){
  return (
    <Container>
      <Content>
        <img src={logoImg} alt="dtmoney"/>
        <button type="button" onClick={onOpenNewTransitionModal}>
          Nova Transacao
        </button>
      </Content>
    </Container>
  )
}