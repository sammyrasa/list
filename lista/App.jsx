import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './screens/HomeScreen';
import DetailsScreen from './screens/DetailsScreen';
import ScrollScreen from './screens/ScrollScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{
            title: 'Tela Principal',
            headerStyle: { backgroundColor: '#EE95F5' },
            headerTintColor: '#fff',
          }}
        />
        <Stack.Screen
          name="Details"
          component={DetailsScreen}
          options={{
            title: 'Detalhes',
            headerStyle: { backgroundColor: '#673CA3' },
            headerTintColor: '#fff',
          }}
        />
        <Stack.Screen
          name="Scroll"
          component={ScrollScreen}
          options={{
            title: 'ScrollView',
            headerStyle: { backgroundColor: '#28a745' },
            headerTintColor: '#fff',
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}