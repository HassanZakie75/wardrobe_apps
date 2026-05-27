import React from 'react';
import { 
  StyleSheet, 
  Text, 
  View, 
  ScrollView, 
  Image, 
  TouchableOpacity, 
} from 'react-native';
import AboutUsScreen from './AboutUsScreen.js'; // Make sure the path is correct!

const HomeScreen = ({ navigation }) => {
  // Dummy data representing recent items
  const recentItems = [
    { id: '1', name: 'Basic Casual', image: require('../assets/outfit_basic_casual.png') },
    { id: '2', name: 'Beige Cargo', image: require('../assets/outfit_beige_cargo.png') },
    { id: '3', name: 'Black Chic', image: require('../assets/outfit_black_chic.png') },
  ];

  return (
    <View style={styles.container}>
      {/* Custom Header with Logo */}
      <View style={styles.header}>
        <Image 
          source={require('../assets/company_logo.png')} 
          style={styles.logo}
          resizeMode="contain"
        />
      </View>

      <ScrollView contentContainerStyle={styles.content}>
        {/* User Welcome Section */}
        <View style={styles.userSection}>
          <View style={styles.profileCircle}>
            <Text style={styles.profileText}>H</Text> 
          </View>
          <Text style={styles.welcomeText}>Hello, User!</Text>
          <Text style={styles.subText}>You have 115 items in your closet.</Text>
        </View>

        {/* Link to About Us (Feature 8) */}
        <TouchableOpacity 
          style={styles.aboutButton}
          onPress={() => navigation.navigate('AboutUs')}
        >
          <Text style={styles.aboutButtonText}>Learn About Our Mission</Text>
        </TouchableOpacity>

        {/* Recent Items List (Feature 3) */}
        <Text style={styles.sectionTitle}>Recently Added</Text>
        <View style={styles.itemGrid}>
          {recentItems.map(item => (
            <View key={item.id} style={styles.itemCard}>
              <Image source={item.image} style={styles.itemImage} />
              <Text style={styles.itemName}>{item.name}</Text>
            </View>
          ))}
        </View>
      </ScrollView>

      {/* Blue Footer Strip to match login design */}
      <View style={styles.footerBar} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E5C7B1', // Tan background
  },
  header: {
    alignItems: 'center',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderColor: '#000',
  },
  logo: {
    width: 100,
    height: 60,
  },
  content: {
    padding: 20,
    paddingBottom: 100, // Space for footer
  },
  userSection: {
    alignItems: 'center',
    marginBottom: 30,
  },
  profileCircle: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: '#C1D3DE', // Light blue
    borderWidth: 2,
    borderColor: '#000',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
  },
  profileText: {
    fontSize: 32,
    fontWeight: 'bold',
  },
  welcomeText: {
    fontSize: 22,
    fontWeight: '600',
  },
  subText: {
    fontSize: 14,
    color: '#555',
  },
  aboutButton: {
    backgroundColor: '#C1D3DE',
    padding: 15,
    borderWidth: 2,
    borderColor: '#000',
    borderRadius: 5,
    alignItems: 'center',
    marginBottom: 30,
  },
  aboutButtonText: {
    fontWeight: 'bold',
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 15,
  },
  itemGrid: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  itemCard: {
    width: '30%',
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#000',
    padding: 5,
    alignItems: 'center',
  },
  itemImage: {
    width: 70,
    height: 70,
    resizeMode: 'contain',
  },
  itemName: {
    fontSize: 10,
    marginTop: 5,
    textAlign: 'center',
  },
  footerBar: {
    height: 40,
    backgroundColor: '#C1D3DE',
    position: 'absolute',
    bottom: 0,
    width: '100%',
  }
});

export default HomeScreen;