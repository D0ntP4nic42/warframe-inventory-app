import Button from "@/components/button";
import colors from "@/components/utils/colors";
import TokenStorage from "@/components/utils/tokenUtils";
import { router } from "expo-router";
import { useState } from "react";
import { ImageBackground, SafeAreaView, Text, TextInput, TouchableOpacity } from "react-native";
import Toast from 'react-native-toast-message';
import { styles } from "./Styles";
import Constants from "expo-constants";


export default function index() {
    async function handleLogin() {
        const credenciais = {
            emailOuUsername: username,
            senha: password
        };

        try {
            await fetch(`http://192.168.0.2:8080/auth/login`, {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(credenciais),
            }).then(async response => {
                const data = await response.json()
                if (!response.ok) {
                    throw new Error(data.mensagem)
                }

                await TokenStorage.storeToken(data.token)
                Toast.show({
                    type: 'success',
                    text1: 'Sucesso!',
                    text2: 'Login realizado com sucesso'
                })
                setTimeout(() => {
                    router.navigate("/dashboard");
                }, 1000);
            })
        } catch (error: any) {
            Toast.show({
                type: 'error',
                text1: 'Erro!',
                text2: 'Erro ao realizar login: ' + error.message
            })
        }
    }

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [showPassword, setShowPassword] = useState(false)

    return (
        <SafeAreaView style={styles.container}>
            <ImageBackground style={[styles.titleContainer, { width: 300, height: 200, }]} source={require("../../assets/images/warframe-logo.png")} resizeMode="contain">
                <Text style={styles.title}>Bem-vindo</Text>
                <Text style={[styles.title, { marginBottom: 20 }]}>ao seu assistente <Text style={{ color: colors.primary }}>Ordis!</Text></Text>
            </ImageBackground>
            <SafeAreaView>
                <TextInput onChangeText={(username) => setUsername(username)} style={styles.inputUser} placeholder="Email/Nome de usuário"></TextInput>
                <TextInput secureTextEntry={!showPassword} onChangeText={(password) => setPassword(password)} style={styles.inputUser} placeholder="Senha">
                </TextInput>
                <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
                    <Text style={{ color: colors.accent }}>Mostrar senha</Text>
                </TouchableOpacity>
            </SafeAreaView>

            <Button title="Entrar" onPress={handleLogin} />
            <TouchableOpacity onPress={() => router.navigate("/register")}>
                <Text style={{ marginTop: 20 }}>
                    Ainda não tem uma conta?
                    <Text style={{ color: colors.accent }}> Cadastre-se</Text>
                </Text>
            </TouchableOpacity>
            <Toast />
        </SafeAreaView>
    )
}