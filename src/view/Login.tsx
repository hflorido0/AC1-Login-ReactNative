
import { Button, Image, StyleSheet, Text, TextInput, View } from 'react-native';
import Commons from '../styles/Commons';
import { useState } from 'react';
import LoginModel from '../model/LoginModel';

export default function Login({ navigation }) {

    const [login, setLogin] = useState(new LoginModel());

    function handleLogin() {
        navigation.navigate('TableShow');
    }

  return (
    <View style={[Commons.secondaryColor, Commons.container,
        Commons.flexDirectionColumn]}>
        <View>
            <Image
                style={Commons.tinyLogo}
                source={{
                uri: 'https://reactnative.dev/img/tiny_logo.png',
                }}
        />
        </View>
        <View>
            <Text>Usuari:</Text>
            <TextInput
                style={Commons.input}
                value={login.user}
            />
        </View>
        <View>
            <Text>Password:</Text>
            <TextInput
                style={Commons.input}
                value={login.password}
            />
        </View>
        <View>
            <Button title="Acceder"
                onPress={() => handleLogin()} 
            />
        </View>
      
    </View>
  );
}