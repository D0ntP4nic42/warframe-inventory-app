import { router, useRouter, useSegments } from "expo-router";
import React, { useEffect, useState } from "react";
import { ActivityIndicator, View, Text, TouchableOpacity, Image } from "react-native";
import TokenStorage from "../utils/tokenUtils";
import styles from "./Styles";

const TopBar = () => (
  <View style={styles.topBar}>
    <Image
      source={require("../../../assets/images/warframe-logo.png")} // ajuste o caminho
      style={styles.topBarImage}
      resizeMode="contain"
    />
    <Text style={styles.topBarText}>Ordis</Text>
  </View>
);

const BottomBar = () => {
  const router = useRouter();
  const segments: string[] = useSegments();


  const goTo = (path: "dashboard") => {
    if (!segments.includes(path)) {
      router.push({ pathname: `/${path}` });
    }
  };

  return (
    <View style={styles.bottomBar}>
      <TouchableOpacity onPress={() => goTo("dashboard")} style={[styles.bottomBarButton, segments.includes("dashboard") && styles.activeButton]}>
        <Text style={styles.bottomBarText}>Dashboard</Text>
      </TouchableOpacity>
    </View>
  );
};

// Cuida da proteção de rotas
export default function ProtectedRoute({ children }: { children: React.ReactNode }) {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null);

  // Meio que uma função innit no caso sendo usada pra checar o token
  useEffect(() => {
    const checkAuth = async () => {
      const token = await TokenStorage.getToken();
      if (token) {
        setIsAuthenticated(true);
      } else {
        setIsAuthenticated(false);
      }
    };

    checkAuth();
  }, []);

  if (isAuthenticated === null) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  if (!isAuthenticated) {
    router.replace("/");
    return null;
  }
  // retorna o conteúdo da rota protegida caso o usuário esteja autenticado
  return <View style={styles.container}>
          <TopBar />
          <View style={styles.content}>{children}</View>
          <BottomBar />
        </View>
};