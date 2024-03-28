import { TouchableOpacityProps } from 'react-native'
import { Container, Icon } from "./styles";

type Props = TouchableOpacityProps & {
  type?: string
}

export function ButtonIcon({ type }: Props) {
  return (
    <Container>
      <Icon 
        name="home"
        type={type}
      />
    </Container>
  )
}