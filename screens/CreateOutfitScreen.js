import React, { useState } from 'react';
import { 
  StyleSheet, 
  Text, 
  View, 
  Image, 
  TouchableOpacity, 
  ScrollView,  
} from 'react-native';

const CreateOutfitScreen = ({ navigation }) => {
  // Local state to simulate selecting items for the outfit
  const [selectedTop, setSelectedTop] = useState(null);
  const [selectedBottom, setSelectedBottom] = useState(null);

  // Dummy closet items to choose from
  const tops = [
    { id: '1', image: require('../assets/black_leather_jacket.png') },
    { id: '2', image: require('../assets/navy_oversized_hoodie.png') },
  ];
  const bottoms = [
    { id: '3', image: require('../assets/black_leather_pants.png') },
    { id: '4', image: require('../assets/dark_denim_mini_skirt.png') },
  ];

  return (
    <View style={styles.container}>
      {/* Header with Save Button */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Text style={styles.headerBtn}>Cancel</Text>
        </TouchableOpacity>
        <Image source={require('../assets/company_logo.png')} style={styles.logo} resizeMode="contain" />
        <TouchableOpacity onPress={() => navigation.navigate('Outfits')}>
          <Text style={[styles.headerBtn, { fontWeight: 'bold' }]}>Save</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.canvas}>
        <Text style={styles.canvasTitle}>OUTFIT PREVIEW</Text>
        
        {/* Preview Area: Items appear here when clicked */}
        <View style={styles.previewBox}>
          {selectedTop && <Image source={selectedTop} style={styles.previewImage} />}
          {selectedBottom && <Image source={selectedBottom} style={styles.previewImage} />}
          {!selectedTop && !selectedBottom && (
            <Text style={styles.placeholderText}>Select items below to combine</Text>
          )}
        </View>
      </View>

      {/* Selection Area */}
      <View style={styles.selectionArea}>
        <Text style={styles.sectionLabel}>CHOOSE TOPS</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.scroll}>
          {tops.map((item) => (
            <TouchableOpacity key={item.id} onPress={() => setSelectedTop(item.image)}>
              <View style={styles.itemThumb}>
                <Image source={item.image} style={styles.thumbImg} />
              </View>
            </TouchableOpacity>
          ))}
        </ScrollView>

        <Text style={styles.sectionLabel}>CHOOSE BOTTOMS</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.scroll}>
          {bottoms.map((item) => (
            <TouchableOpacity key={item.id} onPress={() => setSelectedBottom(item.image)}>
              <View style={styles.itemThumb}>
                <Image source={item.image} style={styles.thumbImg} />
              </View>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>

      {/* Back Arrow Footer */}
      <View style={styles.footer}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Text style={styles.arrowText}>←────────</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#E5C7B1' },
  header: { 
    flexDirection: 'row', 
    justifyContent: 'space-between', 
    alignItems: 'center', 
    paddingHorizontal: 20, 
    paddingVertical: 10 
  },
  headerBtn: { fontSize: 16 },
  logo: { width: 60, height: 40 },
  canvas: { flex: 1, alignItems: 'center', padding: 20 },
  canvasTitle: { fontSize: 18, fontWeight: 'bold', marginBottom: 10 },
  previewBox: { 
    width: '100%', 
    height: '80%', 
    backgroundColor: '#fff', 
    borderWidth: 2, 
    borderColor: '#000',
    justifyContent: 'center', 
    alignItems: 'center' 
  },
  previewImage: { width: '70%', height: '45%', resizeMode: 'contain' },
  placeholderText: { color: '#888', fontStyle: 'italic' },
  selectionArea: { 
    backgroundColor: '#C5A894', 
    padding: 15, 
    borderTopWidth: 2, 
    borderColor: '#000' 
  },
  sectionLabel: { fontWeight: 'bold', marginBottom: 5 },
  scroll: { marginBottom: 15 },
  itemThumb: { 
    backgroundColor: '#fff', 
    borderWidth: 1, 
    marginRight: 10, 
    padding: 5 
  },
  thumbImg: { width: 60, height: 60, resizeMode: 'contain' },
  footer: { 
    height: 60, 
    backgroundColor: '#C1D3DE', 
    justifyContent: 'center', 
    paddingLeft: 20,
    borderTopWidth: 2
  },
  arrowText: { fontSize: 24 }
});

export default CreateOutfitScreen;