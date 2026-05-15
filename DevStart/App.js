import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import PerfilScreen from './screens/Perfilscreen.js';
import HabilidadesScreen from './screens/Habilidadesscreen.js';
import ProjetosScreen from './screens/Projetosscreen.js';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Perfil" component={PerfilScreen} />
        <Tab.Screen name="Habilidades" component={HabilidadesScreen} />
        <Tab.Screen name="Projetos" component={ProjetosScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}