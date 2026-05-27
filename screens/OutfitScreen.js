import React from 'react';
import { 
  StyleSheet, 
  Text, 
  View, 
  FlatList, 
  Image, 
  TouchableOpacity,  
} from 'react-native';

const OutfitScreen = ({ navigation }) => {
  // Dummy data representing combined outfits
  const outfitData = [
    { id: '1', name: 'Basic Casual', image: require('../assets/outfit_basic_casual.png') },
    { id: '2', name: 'Beige Cargo', image: require('../assets/outfit_beige_cargo.png') },
    { id: '3', name: 'Black Chic', image: require('../assets/outfit_black_chic.png') },
    { id: '4', name: 'Blue Simple', image: require('../assets/outfit_blue_simple.png') },
    { id: '5', name: 'Cozy Fit', image: require('../assets/outfit_cozy_fit.png') },
    { id: '6', name: 'Denim Cute', image: require('../assets/outfit_denim_cute.png') },
    { id: '7', name: 'Denim Layer', image: require('../assets/outfit_denim_layer.png') },
    { id: '8', name: 'Floral Soft', image: require('../assets/outfit_floral_soft.png') },
    { id: '9', name: 'Green Flow', image: require('../assets/outfit_green_flow.png') },
    { id: '10', name: 'Leather Look', image: require('../assets/outfit_leather_look.png') },
    { id: '11', name: 'Racing Style', image: require('../assets/outfit_racing_style.png') },
    { id: '12', name: 'Sporty Casual', image: require('../assets/outfit_sporty_casual.png') },
    { id: '13', name: 'White Elegant', image: require('../assets/outfit_white_elegant.png') },
  ];

  const renderOutfit = ({ item }) => (
    <TouchableOpacity style={styles.outfitCard}>
      <View style={styles.imageFrame}>
        <Image source={item.image} style={styles.outfitImage} />
      </View>
      <View style={styles.labelContainer}>
        <Text style={styles.outfitName}>{item.name}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      {/* Header Logo */}
      <View style={styles.header}>
        <Image 
          source={require('../assets/company_logo.png')} 
          style={styles.logo}
          resizeMode="contain"
        />
      </View>

      {/* Internal Navigation Tabs */}
      <View style={styles.tabBar}>
        <TouchableOpacity style={[styles.tab, styles.activeTab]}>
          <Text style={styles.tabText}>OUTFITS</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.tab} onPress={() => navigation.navigate('Items')}>
          <Text style={styles.tabText}>ITEMS</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.tab} onPress={() => navigation.navigate('Rate')}>
          <Text style={styles.tabText}>RATE</Text>
        </TouchableOpacity>
      </View>

      {/* Outfits Grid */}
      <FlatList
        data={outfitData}
        renderItem={renderOutfit}
        keyExtractor={item => item.id}
        numColumns={2}
        contentContainerStyle={styles.listContent}
      />

      {/* Create Outfit Button (+) Feature 7 */}
      <TouchableOpacity 
        style={styles.createButton}
        onPress={() => navigation.navigate('CreateOutfit')}
      >
        <Text style={styles.plusSign}>+</Text>
      </TouchableOpacity>
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
  },
  logo: {
    width: 80,
    height: 60,
  },
  tabBar: {
    flexDirection: 'row',
    borderTopWidth: 2,
    borderBottomWidth: 2,
    borderColor: '#000',
  },
  tab: {
    flex: 1,
    paddingVertical: 15,
    alignItems: 'center',
    backgroundColor: '#E5C7B1',
    borderRightWidth: 1,
    borderColor: '#000',
  },
  activeTab: {
    backgroundColor: '#C5A894', // Darker tan for selected
  },
  tabText: {
    fontWeight: '500',
    fontSize: 16,
  },
  listContent: {
    padding: 15,
    paddingBottom: 100,
  },
  outfitCard: {
    flex: 1,
    margin: 10,
    alignItems: 'center',
  },
  imageFrame: {
    backgroundColor: '#fff',
    borderWidth: 2,
    borderColor: '#000',
    width: '100%',
    aspectRatio: 0.8, // Slightly taller for outfits
    justifyContent: 'center',
    alignItems: 'center',
  },
  outfitImage: {
    width: '90%',
    height: '90%',
    resizeMode: 'contain',
  },
  labelContainer: {
    marginTop: 5,
    backgroundColor: '#C1D3DE', // Blue label background
    borderWidth: 1,
    borderColor: '#000',
    paddingHorizontal: 10,
    paddingVertical: 2,
  },
  outfitName: {
    fontSize: 12,
    fontWeight: 'bold',
  },
  createButton: {
    position: 'absolute',
    bottom: 20,
    alignSelf: 'center',
    width: 70,
    height: 70,
    backgroundColor: '#C5A894',
    borderWidth: 2,
    borderColor: '#000',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 0, // Keeping the square/sharp look from mockups
  },
  plusSign: {
    fontSize: 40,
    fontWeight: '300',
  }
});

export default OutfitScreen;