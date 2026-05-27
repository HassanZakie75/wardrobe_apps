import React from 'react';
import { 
  StyleSheet, 
  Text, 
  View, 
  Image, 
  TouchableOpacity, 
} from 'react-native';

const ItemDetailScreen = ({ route, navigation }) => {
  // We get the item data passed from the ItemsScreen via 'route.params'
  const { item } = route.params;

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

      <View style={styles.content}>
        {/* Item Title Bar */}
        <View style={styles.titleBar}>
          <Text style={styles.titleText}>{item.name}</Text>
        </View>

        {/* Big Item Image Card */}
        <View style={styles.imageCard}>
          <Image source={item.image} style={styles.mainImage} />
        </View>

        {/* Details Section */}
        <View style={styles.detailsContainer}>
          <View style={styles.detailRow}>
            <Text style={styles.detailLabel}>Type:</Text>
            <Text style={styles.detailValue}>Top / Blouse</Text>
          </View>
          <View style={styles.detailRow}>
            <Text style={styles.detailLabel}>Occasion:</Text>
            <Text style={styles.detailValue}>Casual / Formal</Text>
          </View>
        </View>

        {/* Action Buttons */}
        <TouchableOpacity style={styles.editButton}>
          <Text style={styles.buttonText}>Edit Item Details</Text>
        </TouchableOpacity>
      </View>

      {/* Back Navigation Bar */}
      <View style={styles.footer}>
        <TouchableOpacity 
          style={styles.backButton} 
          onPress={() => navigation.goBack()}
        >
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
  content: {
    flex: 1,
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  titleBar: {
    width: '100%',
    backgroundColor: '#C5A894',
    paddingVertical: 12,
    borderWidth: 2,
    borderColor: '#000',
    alignItems: 'center',
    marginBottom: 20,
  },
  titleText: {
    fontSize: 22,
    fontWeight: 'bold',
  },
  imageCard: {
    backgroundColor: '#fff',
    borderWidth: 2,
    borderColor: '#000',
    width: '90%',
    aspectRatio: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  mainImage: {
    width: '85%',
    height: '85%',
    resizeMode: 'contain',
  },
  detailsContainer: {
    width: '90%',
    marginBottom: 30,
  },
  detailRow: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  detailLabel: {
    fontWeight: 'bold',
    fontSize: 18,
    width: 100,
  },
  detailValue: {
    fontSize: 18,
  },
  editButton: {
    backgroundColor: '#C1D3DE',
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderWidth: 2,
    borderColor: '#000',
  },
  buttonText: {
    fontWeight: 'bold',
  },
  footer: {
    height: 80,
    backgroundColor: '#C1D3DE',
    borderTopWidth: 2,
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

export default ItemDetailScreen;