import { StyleSheet } from "react-native"
import  colors  from "@/components/utils/colors"

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: colors.background,
    },
    titleContainer: {
        paddingTop: 5,
        width: '100%',
        height: 120,
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        fontSize: 25,
        fontWeight: "bold",
        color: colors.textPrimary,
    },
    formFields: {
        gap: 10
    },
    inputUser: {
        height: 40,
        width: 300,
        borderRadius: 10,
        borderColor: colors.surface,
        borderWidth: 1,
        marginTop: 20
    }
})