import React from 'react';
import { 
  StyleSheet, 
  Text, 
  View, 
  TouchableOpacity, 
  Image, 
  ScrollView,  
} from 'react-native';

const AboutUsScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      {/* Header with Logo */}
      <View style={styles.header}>
        <Image 
          source={require('../assets/company_logo.png')} 
          style={styles.logo}
          resizeMode="contain"
        />
      </View>

      {/* Page Title Bar */}
      <View style={styles.titleBar}>
        <Text style={styles.titleText}>About Us</Text>
      </View>

      <ScrollView contentContainerStyle={styles.content}>
        <Text style={styles.bodyText}>
          This app is a solution I created to help people organize their clothes 
          and reduce waste by making smarter fashion choices. I often see people, 
          including myself, buying clothes they don’t need and forgetting what 
          they already own.{"\n\n"}
          That’s why I wanted to design something useful that helps people manage 
          their wardrobe digitally.{"\n\n"}
          I’ve always been interested in fashion, design, and technology, so this 
          project was a perfect way to combine those interests. I’m also excited 
          to learn HTML and CSS so I can build my own prototype from scratch.{"\n\n"}
          By creating this app, I want to encourage mindful shopping and help people 
          think twice before buying new clothes. It also supports Sustainable 
          Development Goal 12: Responsible Consumption and Production.
        </Text>
      </ScrollView>

      {/* Back Navigation Bar */}
      <View style={styles.footer}>
        <TouchableOpacity 
          style={styles.backButton} 
          onPress={() => navigation.goBack()}
        >
          {/* A simple hand-drawn style arrow using text or a small image */}
          <Text style={styles.arrowText}>←────────</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E5C7B1',
  },
  header: {
    alignItems: 'center',
    paddingVertical: 10,
  },
  logo: {
    width: 80,
    height: 60,
  },
  titleBar: {
    backgroundColor: '#C5A894', // Slightly darker tan for the bar
    paddingVertical: 10,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: '#000',
    alignItems: 'center',
  },
  titleText: {
    fontSize: 20,
    fontWeight: '500',
  },
  content: {
    padding: 25,
    alignItems: 'center',
  },
  bodyText: {
    fontSize: 18,
    textAlign: 'center',
    lineHeight: 26,
    color: '#000',
  },
  footer: {
    height: 80,
    backgroundColor: '#C1D3DE', // Blue footer
    borderTopWidth: 1,
    borderColor: '#000',
    justifyContent: 'center',
    paddingLeft: 30,
  },
  backButton: {
    width: 150,
  },
  arrowText: {
    fontSize: 30,
    fontWeight: '300',
  },
});

export default AboutUsScreen;