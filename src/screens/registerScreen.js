import React, { useState } from 'react';
import { Button, TextInput } from 'react-native-paper';
import { auth } from '../../firebase';

function RegisterScreen({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const userRegister = async () => {
    if(!email || !password){
      alert("Please add all the fields");
      return 
    } 
    try {
      const user = await auth.createUserWithEmailAndPassword(email, password);
      navigation.navigate('Login')
    } catch (error) {
      alert("Something went wrong");
      console.log(error);
    }
  }

  return (
    <>
      <TextInput
        label="Email"
        value={email}
        onChangeText={email => setEmail(email)}
      />
      <TextInput
        label="Password"
        value={password}
        secureTextEntry={true}
        onChangeText={password => setPassword(password)}
      />
      <Button onPress={() => userRegister()}>Register</Button>
    </>
  );
}

export default RegisterScreen;
