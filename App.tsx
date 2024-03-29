import { StatusBar } from 'react-native'
import { ThemeProvider } from 'styled-components'
import { useFonts, Roboto_400Regular, Roboto_700Bold } from '@expo-google-fonts/roboto'

import { Groups } from "@screens/Groups";

import theme from '@theme/index'
import { Loading } from "@components/Loading";
import { NewGroup } from '@screens/NewGroup';
import { Players } from '@screens/Players';

import { Routes } from './src/routes'

export default function App() {
  const [ fontsLoaded ] = useFonts ({
    Roboto_400Regular,
    Roboto_700Bold
  })

  return (
    <ThemeProvider theme={theme}>
      <StatusBar
        barStyle='light-content'
        backgroundColor="transparent"
        translucent
      />
      {fontsLoaded ? <Routes /> : <Loading />}
    </ThemeProvider>
  );
}

