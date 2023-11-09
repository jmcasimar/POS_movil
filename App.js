import React from 'react';
import { Icon } from '@rneui/themed';
import { PrincipalStyles, Colors } from './src/styles';
import { NavigationContainer } from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import { View, TouchableWithoutFeedback, Image, StatusBar, Text, useColorScheme } from 'react-native';

const Stack = createStackNavigator();

// Screens
import BT from './src/screens/BT';
import Home from './src/screens/Home';
import Orders from './src/screens/Orders';
import Products from './src/screens/Products';
import Customers from './src/screens/Customers';
import Splash from './src/screens/Splash';
import Scanner from './src/screens/Camera';

const App = () => {
  const header = ({ navigation, route, options }) => {
    const isDarkMode = useColorScheme() === 'dark';
  
    const backgroundStyle = {
      backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
    };

    return (
      <View style={[PrincipalStyles.header, backgroundStyle]} >
        <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
        { navigation.canGoBack() ? (
            <View>
              <TouchableWithoutFeedback onPress={() => navigation.goBack() }>
                <Icon
                  size={45}
                  name={'arrow-left'}
                  type={'material-community'}
                  color={Colors.color1} />
              </TouchableWithoutFeedback>
            </View>
          ) : null
        }
        <View style={{flexDirection: "row", alignItems: 'center', marginLeft: navigation.canGoBack() ? 0: 35}}>
            <Image
                style={{ width: 75, height: 56, marginRight: navigation.canGoBack() ? 20: 30 }}
                source={require('./src/img/GG.png')}
            />
            <Text style={{ fontSize: options.fontSize, fontWeight: 'bold', color: Colors.white }}>{options.title}</Text>
        </View>
      </View>
    );
  };

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Splash">
        <Stack.Screen name="Splash" options={{animationEnabled: false, header: () => null}} component={Splash} />
        <Stack.Screen name="Home" options={{animationEnabled: true, title:'Paletas Provicencia', fontSize: 20, header: header}} component={Home} />
        <Stack.Screen name="Customers" options={{animationEnabled: true, title:'Clientes', fontSize: 30, header: header}} component={Customers} />
        <Stack.Screen name="Products" options={{animationEnabled: true, title:'Productos', fontSize: 30, header: header}} component={Products} />
        <Stack.Screen name="Orders" options={{animationEnabled: true, title:'Ventas', fontSize: 30, header: header}} component={Orders} />
        <Stack.Screen name="Camera" options={{animationEnabled: true, title:'Escaner', fontSize: 30, header: header}} component={Scanner} />
        <Stack.Screen name="Settings" options={{animationEnabled: true, title:'Configuración', fontSize: 28, header: header}} component={BT} />
      </Stack.Navigator>
    </NavigationContainer>   
  );
}

export default App;
