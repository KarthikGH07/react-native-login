import React, {useState} from 'react';
import {
  TouchableOpacity,
  Text,
  TextInput,
  Button,
  StyleSheet,
  ScrollView,
  View,
} from 'react-native';
import querystring from 'querystring';
import axios from 'axios';
import {Actions} from 'react-native-router-flux';

const SignUp = () => {
  const [username, onChangeUsername] = useState('');
  const [name, onChangeName] = useState('');
  const [phone, onChangePhone] = useState('');
  const [email, onChangeEmail] = useState('');
  const [password, onChangePassword] = useState('');
  const [address, onChangeAddress] = useState('');

  const handleClick = () => {
    const form = {
      user_name: username,
      phone,
      address,
      name,
      email,
      password: password,
    };

    const clearFields = () => {
      onChangeAddress('');
      onChangeEmail('');
      onChangeName('');
      onChangePassword('');
      onChangePhone('');
      onChangeUsername('');
    };

    console.log(querystring.stringify(form));
    async function run() {
      const res = await axios.post(
        'http://youtube.maksinfotech.com/api/registration.php',
        querystring.stringify(form),
        {
          'Content-Type': 'multipart/form-data',
        },
      );
      console.log(res.data);
      alert(`${res.data.status} ${res.data.msg}`);
      clearFields();
      if (res.data.status === 200) {
        Actions.login();
      } else {
        alert('Try Again!');
      }
    }

    run();
  };

  const goToLogin = () => {
    Actions.login();
  };

  const styles = StyleSheet.create({
    input: {
      height: 35,
      margin: 8,
      borderWidth: 1,
      color: 'black',
    },
    button: {
      marginBottom: 10,
      marginTop: 15,
      fontSize: 20,
    },
  });

  return (
    <ScrollView>
      <TouchableOpacity style={{margin: 20}}>
        <Text>User Name</Text>
        <TextInput
          style={styles.input}
          value={username}
          onChangeText={onChangeUsername}
        />
        <Text>Name</Text>
        <TextInput
          style={styles.input}
          value={name}
          onChangeText={onChangeName}
        />
        <Text>Address</Text>
        <TextInput
          style={styles.input}
          value={address}
          onChangeText={onChangeAddress}
        />
        <Text>Phone</Text>
        <TextInput
          style={styles.input}
          keyboardType="numeric"
          value={phone}
          onChangeText={onChangePhone}
        />
        <Text>E-mail</Text>
        <TextInput
          style={styles.input}
          value={email}
          onChangeText={onChangeEmail}
          autoCompleteType="email"
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
          title="Sign UP"
          color="#841584"
          accessibilityLabel="Click Here to register"
          onPress={handleClick}
        />
        <Text style={styles.button}> Already Register?? </Text>
        <Button
          title="Login Here!!"
          color="#841584"
          accessibilityLabel="Click Here to Login"
          onPress={() => Actions.login()}
        />
      </TouchableOpacity>
    </ScrollView>
  );
};
export default SignUp;
