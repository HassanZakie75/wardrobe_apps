import React from 'react';
import { 
  StyleSheet, 
  Text, 
  View, 
  FlatList, 
  Image, 
  TouchableOpacity, 
} from 'react-native';

const ItemsScreen = ({ navigation }) => {
  // Dummy data for your closet items
  const itemsData = [
    { id: '1', name: 'Black Leather Pants', image: require('../assets/black_leather_pants.png') },
    { id: '2', name: 'Navy Ruffle Dress', image: require('../assets/navy_ruffle_dress.png') },
    { id: '3', name: 'Dark Denim Mini Skirt', image: require('../assets/dark_denim_mini_skirt.png') },
    { id: '4', name: 'Strapless Red Dress', image: require('../assets/strapless_red_dress.png') },
    { id: '5', name: 'Navy Oversized Hoodie', image: require('../assets/navy_oversized_hoodie.png') },
    { id: '6', name: 'Brown Graphic Jersey', image: require('../assets/brown_graphic_jersey.png') },
    { id: '7', name: 'Blue Sports Jersey', image: require('../assets/blue_sports_jersey.png') },
    { id: '8', name: 'Black Leather Jacket', image: require('../assets/black_leather_jacket.png') },
    { id: '9', name: 'Dark Blue Knit Sweater', image: require('../assets/dark_blue_knit_sweater.png') },
    { id: '10', name: 'Cream Cable Knit Sweater', image: require('../assets/cream_cable_knit_sweater.png') },
    { id: '11', name: 'White Floral Dress', image: require('../assets/white_floral_dress.png') },
    { id: '12', name: 'White Flowy Dress', image: require('../assets/white_flowy_dress.png') },
    { id: '13', name: 'Black Shoulder Bag', image: require('../assets/black_shoulder_bag.png') },
    { id: '14', name: 'Gold Pearl Bracelet', image: require('../assets/gold_pearl_bracelet.png') },
    { id: '15', name: 'Pearl Bow Earrings', image: require('../assets/pearl_bow_earrings.png') },
  ];

  const renderItem = ({ item }) => (
    <TouchableOpacity 
      style={styles.itemContainer}
      onPress={() => navigation.navigate('ItemDetail', { item })}
    >
      <View style={styles.imageWrapper}>
        <Image source={item.image} style={styles.itemImage} />
      </View>
      <Text style={styles.itemName}>{item.name}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      {/* Top Logo */}
      <View style={styles.header}>
        <Image 
          source={require('../assets/company_logo.png')} 
          style={styles.logo}
          resizeMode="contain"
        />
      </View>

      {/* Segmented Control / Navigation Bar */}
      <View style={styles.tabBar}>
        <TouchableOpacity style={styles.tab} onPress={() => navigation.navigate('Outfits')}>
          <Text style={styles.tabText}>OUTFITS</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.tab, styles.activeTab]}>
          <Text style={styles.tabText}>ITEMS (115)</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.tab} onPress={() => navigation.navigate('Rate')}>
          <Text style={styles.tabText}>RATE</Text>
        </TouchableOpacity>
      </View>

      {/* Grid of Items */}
      <FlatList
        data={itemsData}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        numColumns={2} // Two items per row
        contentContainerStyle={styles.listContent}
      />

      {/* Floating Add Button (+) */}
      <TouchableOpacity 
        style={styles.fab}
        onPress={() => navigation.navigate('Scanner')}
      >
        <Text style={styles.fabText}>+</Text>
      </TouchableOpacity>
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
    backgroundColor: '#C5A894', // Darker tan for selected state
  },
  tabText: {
    fontWeight: '500',
    fontSize: 16,
  },
  listContent: {
    padding: 15,
    paddingBottom: 100,
  },
  itemContainer: {
    flex: 1,
    margin: 10,
    alignItems: 'center',
  },
  imageWrapper: {
    backgroundColor: '#fff',
    borderWidth: 2,
    borderColor: '#000',
    padding: 10,
    width: '100%',
    aspectRatio: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  itemImage: {
    width: '90%',
    height: '90%',
    resizeMode: 'contain',
  },
  itemName: {
    marginTop: 8,
    fontSize: 14,
    fontWeight: '400',
  },
  fab: {
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
    zIndex: 10,
  },
  fabText: {
    fontSize: 40,
    fontWeight: '300',
  }
});

export default ItemsScreen;