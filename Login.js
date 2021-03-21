import React, {useState} from 'react';
import {
  TouchableOpacity,
  Text,
  TextInput,
  Button,
  StyleSheet,
} from 'react-native';
import querystring from 'querystring';
import axios from 'axios';

import {Actions} from 'react-native-router-flux';

const Login = () => {
  const [username, onChangeUsername] = useState('');
  const [password, onChangePassword] = useState('');

  const handleClick = () => {
    const form = {
      user_name: username,
      password: password,
    };
    const clearFields = () => {
      onChangePassword('');
      onChangeUsername('');
    };

    console.log(querystring.stringify(form));
    async function run() {
      const res = await axios.post(
        'http://youtube.maksinfotech.com/api/login.php',
        querystring.stringify(form),
        {
          'Content-Type': 'multipart/form-data',
        },
      );
      console.log(res.data);
      alert(`${res.data.status} ${res.data.msg}`);
      Actions.home();
    }

    run();
  };
  const goToSignup = () => {
    Actions.signup();
  };

  const styles = StyleSheet.create({
    input: {
      height: 40,
      margin: 12,
      borderWidth: 1,
      color: 'black',
    },
  });

  return (
    <TouchableOpacity style={{margin: 20}} onPress={goToSignup}>
      <Text>User Name</Text>
      <TextInput
        style={styles.input}
        value={username}
        onChangeText={onChangeUsername}
      />

      <Text>Password</Text>
      <TextInput
        style={styles.input}
        value={password}
        onChangeText={onChangePassword}
        autoCompleteType="password"
        secureTextEntry={true}
      />
      <Button
        title="Log In"
        color="#841584"
        accessibilityLabel="Click Here to register"
        onPress={handleClick}
      />
    </TouchableOpacity>
  );
};
export default Login;
