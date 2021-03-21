// /**
//  * Sample React Native App
//  * https://github.com/facebook/react-native
//  *
//  * @format
//  * @flow strict-local
//  */

// import React, {useState} from 'react';
// import type {Node} from 'react';
// import axios from 'axios';
// import FormData from 'form-data';
// import querystring from 'querystring';

// import {
//   SafeAreaView,
//   ScrollView,
//   StatusBar,
//   StyleSheet,
//   Text,
//   useColorScheme,
//   View,
//   TextInput,
//   Button,
// } from 'react-native';

// import {
//   Colors,
//   DebugInstructions,
//   Header,
//   LearnMoreLinks,
//   ReloadInstructions,
// } from 'react-native/Libraries/NewAppScreen';
// import Routes from './Routes.js';

// const App: () => Node = () => {
//   const [username, onChangeUsername] = useState('');
//   const [name, onChangeName] = useState('');
//   const [phone, onChangePhone] = useState('');
//   const [email, onChangeEmail] = useState('');
//   const [password, onChangePassword] = useState('');
//   const [address, onChangeAddress] = useState('');

//   const isDarkMode = useColorScheme() === 'dark';

//   const backgroundStyle = {
//     backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
//   };

//   const handleClick = () => {
//     const form = {
//       user_name: username,
//       password: password,
//     };
//     console.log(querystring.stringify(form));
//     async function run() {
//       const res = await axios.post(
//         'http://youtube.maksinfotech.com/api/login.php',
//         querystring.stringify(form),
//         {
//           'Content-Type': 'multipart/form-data',
//         },
//       );
//       console.log(res.data);
//       alert(res.data.msg);
//     }

//     run();
//   };

//   return (
//     <SafeAreaView style={backgroundStyle}>
//       <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
//       <ScrollView
//         contentInsetAdjustmentBehavior="automatic"
//         style={backgroundStyle}>
//         <View
//           style={{
//             backgroundColor: isDarkMode ? Colors.black : Colors.white,
//           }}>
//           {/* <Text>User Name</Text>
//           <TextInput
//             style={styles.input}
//             value={username}
//             onChangeText={onChangeUsername}
//           />
//           <Text>Name</Text>
//           <TextInput
//             style={styles.input}
//             value={name}
//             onChangeText={onChangeName}
//           />
//           <Text>Address</Text>
//           <TextInput
//             style={styles.input}
//             value={address}
//             onChangeText={onChangeAddress}
//           />
//           <Text>Phone</Text>
//           <TextInput
//             style={styles.input}
//             keyboardType="numeric"
//             value={phone}
//             onChangeText={onChangePhone}
//           />
//           <Text>E-mail</Text>
//           <TextInput
//             style={styles.input}
//             value={email}
//             onChangeText={onChangeEmail}
//             autoCompleteType="email"
//           />
//           <Text>Password</Text>
//           <TextInput
//             style={styles.input}
//             value={password}
//             onChangeText={onChangePassword}
//             autoCompleteType="password"
//             secureTextEntry={true}
//           />
//           <Text>Confirm Password</Text>
//           <TextInput
//             style={styles.input}
//             value={password}
//             autoCompleteType="password"
//             secureTextEntry={true}
//           />
//           <Button
//             title="Sign UP"
//             color="#841584"
//             accessibilityLabel="Click Here to register"
//             onPress={handleClick}
//           /> */}

//           <Routes />
//         </View>
//       </ScrollView>
//     </SafeAreaView>
//   );
// };

// const styles = StyleSheet.create({
//   input: {
//     height: 40,
//     margin: 12,
//     borderWidth: 1,
//     color: 'black',
//   },
// });

// export default App;

import React, {Component} from 'react';
import {AppRegistry, View} from 'react-native';
import Routes from './Routes.js';

class App extends Component {
  render() {
    return <Routes />;
  }
}
export default App;

// import React, {useState} from 'react';
// import {StyleSheet, Text, TextInput, View} from 'react-native';

// import {NativeRouter, Route, Link} from 'react-router-native';

// // import SignUp from './SignUp';
// // import Login from './Login';

// const [username, onChangeUsername] = useState('');
// const [password, onChangePassword] = useState('');

// const handleClick = () => {
//   const form = {
//     user_name: username,
//     password: password,
//   };
//   console.log(querystring.stringify(form));
//   async function run() {
//     const res = await axios.post(
//       'http://youtube.maksinfotech.com/api/login.php',
//       querystring.stringify(form),
//       {
//         'Content-Type': 'multipart/form-data',
//       },
//     );
//     console.log(res.data);
//     alert(res.data.msg);
//   }

//   run();
// };

// const Home = () => (
//   <View>
//     <Text>This is HOME!</Text>
//     <Text>User Name</Text>
//     <TextInput
//       style={styles.input}
//       value={username}
//       onChangeText={onChangeUsername}
//     />

//     <Text>Password</Text>
//     <TextInput
//       style={styles.input}
//       value={password}
//       onChangeText={onChangePassword}
//       autoCompleteType="password"
//       secureTextEntry={true}
//     />
//     <Button
//       title="Log In"
//       color="#841584"
//       accessibilityLabel="Click Here to register"
//       onPress={handleClick}
//     />
//   </View>
// );

// const About = () => <Text style={styles.header}>About</Text>;

// const Topic = ({match}) => (
//   <Text style={styles.topic}>{match.params.topicId}</Text>
// );

// const Topics = ({match}) => (
//   <View>
//     <Text style={styles.header}>Topics</Text>
//     <View>
//       <Link
//         to={`${match.url}/rendering`}
//         style={styles.subNavItem}
//         underlayColor="#f0f4f7">
//         <Text>Rendering with React</Text>
//       </Link>
//       <Link
//         to={`${match.url}/components`}
//         style={styles.subNavItem}
//         underlayColor="#f0f4f7">
//         <Text>Components</Text>
//       </Link>
//       <Link
//         to={`${match.url}/props-v-state`}
//         style={styles.subNavItem}
//         underlayColor="#f0f4f7">
//         <Text>Props v. State</Text>
//       </Link>
//     </View>

//     <Route path={`${match.path}/:topicId`} component={Topic} />
//     <Route
//       exact
//       path={match.path}
//       render={() => <Text style={styles.topic}>Please select a topic.</Text>}
//     />
//   </View>
// );

// const App = () => (
//   <NativeRouter>
//     <View style={styles.container}>
//       <View style={styles.nav}>
//         <Link to="/" underlayColor="#f0f4f7" style={styles.navItem}>
//           <Text>Home</Text>
//         </Link>
//         <Link to="/about" underlayColor="#f0f4f7" style={styles.navItem}>
//           <Text>About</Text>
//         </Link>
//         <Link to="/topics" underlayColor="#f0f4f7" style={styles.navItem}>
//           <Text>Topics</Text>
//         </Link>
//       </View>

//       <Route exact path="/" component={Home} />
//       <Route path="/about" component={About} />
//       <Route path="/topics" component={Topics} />
//     </View>
//   </NativeRouter>
// );

// const styles = StyleSheet.create({
//   container: {
//     marginTop: 25,
//     padding: 10,
//   },
//   header: {
//     fontSize: 20,
//   },
//   nav: {
//     flexDirection: 'row',
//     justifyContent: 'space-around',
//   },
//   navItem: {
//     flex: 1,
//     alignItems: 'center',
//     padding: 10,
//   },
//   subNavItem: {
//     padding: 5,
//   },
//   topic: {
//     textAlign: 'center',
//     fontSize: 15,
//   },
// });

// export default App;
