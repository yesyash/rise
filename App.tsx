import { AlarmDetails } from "./modules/alarm-details";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { View, Text, Button } from "react-native";

function HomeScreen({ navigation }: { navigation: any }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate('AlarmDetails', { alarmId: 44 })}
      />
    </View>
  );
}

const Stack = createNativeStackNavigator()

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="AlarmDetails" component={AlarmDetails} initialParams={{ alarmId: 32 }} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App;