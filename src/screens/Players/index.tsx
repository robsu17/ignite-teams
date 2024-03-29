import { Header } from "@components/Header";
import { Container, Form, HeaderList, NumbersOfPlayers } from "./styles";
import { Highlight } from "@components/Highlight";
import { ButtonIcon } from "@components/ButtonIcon";
import { Input } from "@components/Input";
import { Filter } from "@components/Filter";
import { FlatList } from "react-native";
import { useState } from "react";
import { PlayerCard } from "@components/PlayerCard";
import { ListEmpty } from "@components/ListEmpty";
import { Button } from "@components/Button";

const teams = [
  {
    id: 1,
    name: 'Time A'
  },
  {
    id: 2,
    name: 'Time B'
  }
]

export function Players() {
  const [team, setTeam] = useState('Time A')
  const [players, setPlayers] = useState(['Neymar', 'Casemiro', 'Messi', 'Cristiano Ronaldo', 'Drogba', 'Roberto Firmino', 'Rodrygo', 'Vini jr', 'Endrick'])

  return (
    <Container>
      <Header 
        showBackButton
      />

      <Highlight 
        title="Nome da turma"
        subtitle="Adicione a galera e separe os times"
      />

      <Form>
        <Input 
          placeholder="Nome da pessoa"
          autoCorrect={false}
        />

        <ButtonIcon 
          icon="add"
        />
      </Form>

      <HeaderList>
        <FlatList 
          data={teams}
          keyExtractor={(item) => item.name}
          renderItem={({ item }) => (
            <Filter 
              title={item.name}
              isActive={item.name === team}
              onPress={() => setTeam(item.name)}
            />
          )}
          horizontal
        />

        <NumbersOfPlayers>
          {players.length}
        </NumbersOfPlayers>
      </HeaderList>

      <FlatList 
        data={players}
        keyExtractor={(item) => item}
        renderItem={({ item }) => (
          <PlayerCard 
            name={item}
            onRemove={() => {}}
          />
        )}
        ListEmptyComponent={() => (
          <ListEmpty 
            message="Não há pessoas nesse time"
          />
        )}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={[
          { paddingBottom: 50 },
          players.length == 0 && { flex: 1 }
        ]}
      />

      <Button 
        title="Remover turma"
        type="secondary"
      />
    </Container>
  )
}