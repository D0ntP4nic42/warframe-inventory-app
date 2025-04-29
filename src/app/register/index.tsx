import { SafeAreaView, Text, TextInput, TouchableOpacity, ImageBackground } from "react-native";
import React, { useState } from "react";
import { MaskedTextInput } from 'react-native-mask-text';
import Button from "@/components/button";
import { styles } from "./Styles";

export default function register() {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [showPassword, setShowPassword] = useState(false)
    const [showRepetirPassword, setShowRepetirPassword] = useState(false)

    return (
        <SafeAreaView style={styles.container}>
            <ImageBackground style={styles.titleContainer} source={require("../../../assets/images/warframe-logo.png")} resizeMode="center">
                <Text style={styles.title}>Registrar</Text>
            </ImageBackground>

            <SafeAreaView style={styles.formFields}>
                <MaskedTextInput mask="999.999.999-99" keyboardType="number-pad" onChangeText={(username) => setUsername(username)} style={styles.inputUser} placeholder="Nome de usuário"/>
                <TextInput secureTextEntry={!showPassword} onChangeText={(password) => setPassword(password)} style={styles.inputUser} placeholder="Senha"/>
                <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
                    <Text style={{ color: 'blue' }}>Mostrar senha</Text>
                </TouchableOpacity>
                <TextInput secureTextEntry={!showRepetirPassword} onChangeText={(password) => setPassword(password)} style={styles.inputUser} placeholder="Repetir senha"/>
                <TouchableOpacity onPress={() => setShowRepetirPassword(!showRepetirPassword)}>
                    <Text style={{ color: 'blue' }}>Mostrar senha</Text>
                </TouchableOpacity>
            </SafeAreaView>

            <Button title="Registrar" />
        </SafeAreaView>

    )
}