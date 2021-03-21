import React from 'react';
import {TouchableOpacity, Text, Button} from 'react-native';
import {Actions} from 'react-native-router-flux';

const Home = () => {
  return (
    <TouchableOpacity style={{margin: 128}}>
      <Text>This is HOME Page!</Text>
      <Button
        title="Log Out"
        color="red"
        accessibilityLabel="Click Here to log out"
        onPress={() => Actions.login()}>
        Logout
      </Button>
    </TouchableOpacity>
  );
};
export default Home;
