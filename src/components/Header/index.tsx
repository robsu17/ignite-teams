import { CaretLeft } from 'phosphor-react-native'
import { BackButton, Container, Logo } from './styles'

import logoImg from '@assets/logo.png'

type Props = {
  showBackButton?: boolean
}

export function Header({ showBackButton = false }: Props) {
  return (
    <Container>
      {
        showBackButton &&
        (
          <BackButton>
            <CaretLeft color='white' size={32} />
          </BackButton>
        )
      }
      <Logo source={logoImg} />
    </Container>
  )
}