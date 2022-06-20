import {StyleSheet, Dimensions} from 'react-native';


export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#eceff1',
        margin: 10,
        padding: 10,
        borderRadius: 5,
    },
    image: {
        height: Dimensions.get('window').height / 4,
        width: '100%',
        borderRadius: 10,
        resizeMode: 'contain',
    },
    innerContainer: {
        padding: 4,
    },
    title: {
        fontSize: 15,
        fontWeight: 'bold',
    },
    price: {
        marginTop: 3,
        color: 'black',
        fontWeight: 'bold',
        fontSize: 15,
    },
    inStock: {
        color: 'red',
        fontWeight: 'bold',
        fontSize: 15,
        marginTop: 3,
    },
});