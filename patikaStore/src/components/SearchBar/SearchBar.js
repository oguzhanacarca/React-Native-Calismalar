import React from 'react';
import {View, TextInput, StyleSheet} from 'react-native';

const searchBar = () => {
    return (
        <View style={styles.searchBar}>
           <View style={styles.search_container} > 
            <TextInput style={styles.searchInput} placeholder="  Ara..." /> 
           </View>
        </View>
)
};

const styles = StyleSheet.create({
    searchBar: {
        margin:10,
    },
    search_container: {
        backgroundColor: '#eceff1',
        borderRadius: 10,
        width: '100%',

    },
    searchInput: {
        padding: 10,
        borderWidth: 1,
        borderColor: '#eceff1',
        borderRadius: 10,
    },
});

export default searchBar;