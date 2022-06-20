import React from 'react';
import {SafeAreaView, Text, StyleSheet, FlatList} from 'react-native';
import SearchBar from './src/components/SearchBar/SearchBar';
import ShopCard from './src/components/ShopCard/ShopCard';
import productData from './src/data/product-data.json';


const App = () => {
  const renderProducts = ({item}) => <ShopCard products={item} />
  return (


    <SafeAreaView style={styles.container}>
      
      <Text style={styles.app_name}>PATIKASTORE</Text>
  
      <FlatList
      numColumns={2}
      ListHeaderComponent={() => (<SearchBar/>)}
      keyExtractor={item => item.id.toString()}
      data={productData}
      renderItem={renderProducts}
      />
      
    </SafeAreaView>


  )
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fffff',
    margin:10,

  },
  app_name: {
    fontSize: 30,
    color: 'purple',
    fontWeight: 'bold',
  },
});



export default App;