import Button from "@/components/button";
import React, { useState } from "react";
import { ImageBackground, SafeAreaView, Text, TextInput, TouchableOpacity } from "react-native";
import { MaskedTextInput } from 'react-native-mask-text';
import { styles } from "./Styles";
import colors from "@/components/utils/colors";

export default function register() {
    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [showPassword, setShowPassword] = useState(false)
    const [showRepetirPassword, setShowRepetirPassword] = useState(false)
    
    return (
        <SafeAreaView style={styles.container}>
            <ImageBackground style={[styles.titleContainer, { width: 300, height: 200, }]} source={require("../../../assets/images/warframe-logo.png")} resizeMode="center">
                <Text style={styles.title}>Registrar</Text>
            </ImageBackground>

            <SafeAreaView style={styles.formFields}>
                <TextInput onChangeText={(username) => setUsername(username)} style={styles.inputUser} placeholder="Nome de usuário" />
                <TextInput onChangeText={(email) => setEmail(email)} style={styles.inputUser} placeholder="Email" />
                <TextInput secureTextEntry={!showPassword} onChangeText={(password) => setPassword(password)} style={styles.inputUser} placeholder="Senha" />
                <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
                    <Text style={{ color: colors.accent }}>Mostrar senha</Text>
                </TouchableOpacity>
                <TextInput secureTextEntry={!showRepetirPassword} onChangeText={(password) => setPassword(password)} style={styles.inputUser} placeholder="Repetir senha" />
                <TouchableOpacity onPress={() => setShowRepetirPassword(!showRepetirPassword)}>
                    <Text style={{ color: colors.accent }}>Mostrar senha</Text>
                </TouchableOpacity>
            </SafeAreaView>

            <Button title="Registrar" />
        </SafeAreaView>

    )
}