import React from 'react';
import { 
  StyleSheet, 
  Text, 
  View, 
  FlatList, 
  Image, 
  TouchableOpacity,  
} from 'react-native';

const RateScreen = ({ navigation }) => {
  // Dummy data for community outfits and their ratings
  const communityOutfits = [
    { id: '1', name: 'Gonna Go Fast', rating: '4.5/5', image: require('../assets/outfit_racing_style.png') },
    { id: '2', name: 'Cutie Pie', rating: '3.8/5', image: require('../assets/outfit_denim_cute.png') },
    { id: '3', name: 'White Elegant', rating: '5.0/5', image: require('../assets/outfit_white_elegant.png') },
    { id: '4', name: 'Floral Breeze', rating: '4.2/5', image: require('../assets/outfit_floral_soft.png') },
  ];

  const renderRateItem = ({ item }) => (
    <View style={styles.rateCard}>
      <View style={styles.imageBox}>
        <Image source={item.image} style={styles.outfitImg} />
      </View>
      
      {/* Rating Display (Feature 5) */}
      <View style={styles.infoRow}>
        <Text style={styles.outfitTitle}>{item.name}</Text>
        <View style={styles.ratingBadge}>
          <Text style={styles.ratingText}>★ {item.rating}</Text>
        </View>
      </View>
      
      <TouchableOpacity style={styles.voteButton}>
        <Text style={styles.voteButtonText}>RATE THIS LOOK</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Image source={require('../assets/company_logo.png')} style={styles.logo} resizeMode="contain" />
      </View>

      {/* Sub-navigation Tabs */}
      <View style={styles.tabBar}>
        <TouchableOpacity style={styles.tab} onPress={() => navigation.navigate('Outfits')}>
          <Text style={styles.tabText}>OUTFITS</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.tab} onPress={() => navigation.navigate('Items')}>
          <Text style={styles.tabText}>ITEMS</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.tab, styles.activeTab]}>
          <Text style={styles.tabText}>RATE</Text>
        </TouchableOpacity>
      </View>

      {/* Community Feed */}
      <FlatList
        data={communityOutfits}
        renderItem={renderRateItem}
        keyExtractor={item => item.id}
        contentContainerStyle={styles.listPadding}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#E5C7B1' },
  header: { alignItems: 'center', paddingVertical: 10 },
  logo: { width: 80, height: 60 },
  tabBar: { flexDirection: 'row', borderTopWidth: 2, borderBottomWidth: 2, borderColor: '#000' },
  tab: { flex: 1, paddingVertical: 15, alignItems: 'center', borderRightWidth: 1, borderColor: '#000' },
  activeTab: { backgroundColor: '#C5A894' },
  tabText: { fontWeight: '500' },
  listPadding: { padding: 20 },
  rateCard: { 
    backgroundColor: '#fff', 
    borderWidth: 2, 
    borderColor: '#000', 
    padding: 15, 
    marginBottom: 20 
  },
  imageBox: { 
    aspectRatio: 1, 
    backgroundColor: '#f9f9f9', 
    borderWidth: 1, 
    borderColor: '#eee',
    justifyContent: 'center',
    alignItems: 'center'
  },
  outfitImg: { width: '90%', height: '90%', resizeMode: 'contain' },
  infoRow: { 
    flexDirection: 'row', 
    justifyContent: 'space-between', 
    alignItems: 'center', 
    marginTop: 15 
  },
  outfitTitle: { fontSize: 18, fontWeight: 'bold' },
  ratingBadge: { backgroundColor: '#C1D3DE', padding: 5, borderWidth: 1 },
  ratingText: { fontWeight: 'bold' },
  voteButton: { 
    marginTop: 15, 
    backgroundColor: '#C5A894', 
    padding: 10, 
    alignItems: 'center',
    borderWidth: 1 
  },
  voteButtonText: { fontWeight: 'bold', fontSize: 14 }
});

export default RateScreen;