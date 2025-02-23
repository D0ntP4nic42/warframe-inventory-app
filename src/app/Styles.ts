import { StyleSheet } from "react-native"

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#f5fcff",
    },
    title: {
        fontSize: 20,
        fontWeight: "bold",
        color: "#333333"
    },
    formFields: {
       gap: 10 
    },
    inputUser: {
        height: 40,
        width: 300,
        borderRadius: 10,
        borderColor: "gray",
        borderWidth: 1,
        marginTop: 20
    }
})