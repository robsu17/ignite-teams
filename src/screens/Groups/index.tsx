import { useState } from 'react'

import { Header } from '@components/Header';
import { Highlight } from '@components/Highlight';
import { GroupCard } from '@components/GroupCard';

import { Container } from './styles';
import { FlatList } from 'react-native';

type Group = {
  id: number
  title: string
}

export function Groups() {
  const [groups, setGroups] = useState<Group[]>([
    {
      id: 1,
      title: 'Amigos da mirage'
    },
    {
      id: 2,
      title: 'Os fura bola'
    }
  ])

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
      />
    </Container>
  );
}
