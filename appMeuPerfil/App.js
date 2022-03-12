/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  Text,
  useColorScheme,
  View,
  Image,
} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import perfil from './src/assets/Images/perfil.jpg';

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}>
        <View
          style={{
            backgroundColor: isDarkMode ? Colors.black : Colors.white,
            padding: 10,
            alignSelf: 'center',
          }}>
          <Image
            source={perfil}
            style={{
              width: 200,
              height: 200,
              alignSelf: 'center',
              marginBottom: 10,
            }}
          />
          <View style={{flexDirection: 'row'}}>
            <Text style={{fontWeight: 'bold', marginRight: 5}}>
              Dados Pessoais:
            </Text>
            <Text>Caio Liste Pereira</Text>
          </View>
          <View style={{flexDirection: 'column'}}>
            <Text style={{fontWeight: 'bold', marginRight: 5}}>Formação:</Text>
            <Text>Ensino Superior Incompleto - SI (Fatec Rubens Lara)</Text>
          </View>
          <View style={{flexDirection: 'column'}}>
            <Text style={{fontWeight: 'bold', marginRight: 5}}>Projetos:</Text>
            <Text>- eOuve</Text>
            <Text>- Compra Direta Empresas</Text>
            <Text>- Pop Super</Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default App;
