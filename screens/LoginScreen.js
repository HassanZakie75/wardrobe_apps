import React, { useState } from 'react';
import { 
  StyleSheet, 
  Text, 
  View, 
  TextInput, 
  TouchableOpacity, 
  Image, 
} from 'react-native';

const LoginScreen = ({ navigation }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // For a dummy app, we just navigate to the Home tab
    navigation.replace('MainTabs'); 
  };

  return (
    <View style={styles.container}>
      {/* Logo Section */}
      <View style={styles.logoContainer}>
        <Image 
          source={require('../assets/company_logo.png')} // Make sure your logo is here
          style={styles.logo}
          resizeMode="contain"
        />
      </View>

      {/* Login Box */}
      <View style={styles.loginBox}>
        <Text style={styles.title}>Login</Text>
        
        <Text style={styles.label}>Name</Text>
        <TextInput
          style={styles.input}
          value={username}
          onChangeText={setUsername}
          placeholder="Enter your name"
        />

        <Text style={styles.label}>Password</Text>
        <TextInput
          style={styles.input}
          value={password}
          onChangeText={setPassword}
          secureTextEntry // Hides password dots
          placeholder="Enter password"
        />

        <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => {/* Navigate to Forgot Password */}}>
          <Text style={styles.forgotText}>Forgot Password</Text>
        </TouchableOpacity>
      </View>

      {/* Bottom spacing to match your design */}
      <View style={styles.footer} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E5C7B1', // Matches your mockup tan color
  },
  logoContainer: {
    alignItems: 'center',
    marginTop: 60,
  },
  logo: {
    width: 200,
    height: 150,
  },
  loginBox: {
    marginHorizontal: 30,
    marginTop: 20,
    padding: 20,
    borderWidth: 2,
    borderColor: '#000',
    backgroundColor: '#E5C7B1',
  },
  title: {
    fontSize: 28,
    textAlign: 'center',
    marginBottom: 20,
    fontWeight: '400',
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
  },
  input: {
    backgroundColor: '#C1D3DE', // Matches the light blue/grey boxes
    height: 50,
    borderWidth: 2,
    borderColor: '#000',
    marginBottom: 20,
    paddingHorizontal: 10,
  },
  loginButton: {
    backgroundColor: '#C1D3DE',
    height: 50,
    borderWidth: 2,
    borderColor: '#000',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
  },
  buttonText: {
    fontSize: 18,
    fontWeight: '500',
  },
  forgotText: {
    textAlign: 'center',
    marginTop: 15,
    textDecorationLine: 'underline',
  },
  footer: {
    height: 100,
    backgroundColor: '#C1D3DE', // Matches the blue bar at the bottom
    position: 'absolute',
    bottom: 0,
    width: '100%',
  }
});

export default LoginScreen;