import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import TelaInicial from "./componentes/TelaInicial";
import TelaConsoles from "./componentes/TelaConsoles";
import TelaJogos from "./componentes/TelaJogos";
import TelaNuvem from "./componentes/TelaNuvem";
import { Text } from "react-native";

const Menu = createStackNavigator().Navigator;
const Itens = createStackNavigator().Screen;

export default function App () {
  return (
  //   <NavigationContainer >
  //     <Stack.Navigator>
  //       <Stack.Screen name="Tela Inicial" componentes = { TelaInicial } />
  //       <Stack.Screen name="Consoles" componentes = { TelaConsoles } />
  //       <Stack.Screen name="Jogos" componentes = { TelaJogos } />
  //       <Stack.Screen name="Nuvem" componentes = { TelaNuvem } />
  //     </Stack.Navigator>
  //   </NavigationContainer>
  // );
  <NavigationContainer>
    <Menu>
      <Itens
        name="Início"
        component={ TelaInicial }
      />
      <Itens
        name="Consoles"
        component={TelaConsoles}
      />
      
      <Itens
        name="Nuvem"
        component={TelaNuvem}
      />
      <Itens
        name="Jogos"
        component={TelaJogos }
      />
    </Menu>
  </NavigationContainer>
  );
}