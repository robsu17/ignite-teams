import { Container, PlayerName, RemovePlayer, Name, Icon } from "./styles";

import { Text } from 'react-native'

import { MaterialIcons } from '@expo/vector-icons'
import { ButtonIcon } from "@components/ButtonIcon";

type Props = {
  name: string;
  onRemove: () => void;
}

export function PlayerCard({ name, onRemove }: Props) {
  return (
    <Container>
      <PlayerName>
        <Icon 
          name="person"
        />
        <Name>
          {name}
        </Name>
      </PlayerName>

      <ButtonIcon 
        icon="close"
        type="secondary"
        onPress={onRemove}
      />
    </Container>
  )
}