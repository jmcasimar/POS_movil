import React from 'react';
import { Text, Button } from 'react-native';

const Home = ({navigation}) => {

  return (
    <>
        <Button
          onPress={() => navigation.navigate('Customers')}
          title="Clientes"
          color="#841584"
          accessibilityLabel="Learn more about this purple button"
        />
        <Button
          onPress={() => navigation.navigate('Products')}
          title="Productos"
          color="#841584"
          accessibilityLabel="Learn more about this purple button"
        />
        <Button
          onPress={() => navigation.navigate('Orders')}
          title="Ventas"
          color="#841584"
          accessibilityLabel="Learn more about this purple button"
        />
        <Button
          onPress={() => navigation.navigate('Settings')}
          title="Configuración"
          color="#841584"
          accessibilityLabel="Learn more about this purple button"
        />
        <Button
          onPress={() => navigation.navigate('Camera')}
          title="Escaner"
          color="#841584"
          accessibilityLabel="Learn more about this purple button"
        />
      <Text>Hello World</Text>
    </>
    
  );
};

export default Home;
