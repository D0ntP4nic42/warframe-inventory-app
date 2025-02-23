import React, { useEffect, useState } from "react";
import { View, ActivityIndicator } from "react-native";
import { router } from "expo-router";
import TokenStorage from "../utils/tokenUtils";

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
  return <>{children}</>;
};