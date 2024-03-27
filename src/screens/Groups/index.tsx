import { useState } from 'react'

import { Header } from '@components/Header';
import { Highlight } from '@components/Highlight';
import { GroupCard } from '@components/GroupCard';
import { ListEmpty } from '@components/ListEmpty';
import { Button } from '@components/Button'

import { Container } from './styles';
import { FlatList } from 'react-native';

type Group = {
  id: number
  title: string
}

export function Groups() {
  const [groups, setGroups] = useState<Group[]>([])

  return (
    <Container>
      <Header />

      <Highlight 
        title='Turmas'
        subtitle='Jogue com a sua turma'
      />

      <FlatList 
        data={groups}
        keyExtractor={(item) => item.title}
        renderItem={({ item }) => (
          <GroupCard 
            title={item.title} 
          />
        )}
        contentContainerStyle={groups.length === 0 && { flex: 1 }}
        ListEmptyComponent={() => (
          <ListEmpty 
            message='Cadastre uma nova turma'
          />
        )}
      />

      <Button 
        title='Criar nova turma'
      />
    </Container>
  );
}
