import { StyleSheet } from 'react-native';
import colors from '../utils/colors';

export const styles = StyleSheet.create({
    button: {
        backgroundColor: colors.primary,
        padding: 10,
        borderRadius: 10,
        width: 300,
        alignItems: 'center',
        marginTop: 20
    },

    buttonText: {
        color: colors.textOnPrimary
    }
})