import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    card: {
        backgroundColor: '#111',
        margin: 10,
        padding: 15,
        borderRadius: 10,
        borderColor: '#f7d560',
        borderWidth: 1,
    },
    title: {
        color: '#f7d560',
        fontWeight: 'bold',
        marginBottom: 5,
    },
    image: {
        height: 80,
        resizeMode: 'contain',
    },
});

export default styles;