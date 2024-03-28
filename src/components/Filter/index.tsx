import { TouchableOpacityProps } from "react-native";
import { Container, Title, FilterStyleProps } from "./styles";

type Props = TouchableOpacityProps & FilterStyleProps & {
  title: string
}

export function Filter({  isActive = false, title, ...rest }: Props) {
  return (
    <Container 
      {...rest}
      isActive={isActive} 
    >
      <Title>{title}</Title>
    </Container>
  )
}