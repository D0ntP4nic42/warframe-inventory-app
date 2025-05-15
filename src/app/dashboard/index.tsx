import ProtectedRoute from "@/components/protectedRoutes/protectedRoute"
import { useEffect, useState } from "react";
import { ActivityIndicator, FlatList, Text, View, Image } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"
import styles from "./Styles";

export default function dashboard() {
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchItems = async () => {
            try {
                const response = await fetch('https://api.warframestat.us/weapons');
                const data = await response.json();
                setItems(data)
            } catch (error) {
                console.error('Erro ao buscar dados da API:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchItems();
    }, []);

    if (loading) {
        return <ActivityIndicator size="large" style={{ flex: 1 }} />;
    }

    return (
        <ProtectedRoute>
            <FlatList
                data={items}
                keyExtractor={(item) => item.uniqueName || item.name}
                renderItem={({ item }) => (
                    <View style={styles.card}>
                        <Text style={styles.title}>{item.name}</Text>
                        {item.wikiaThumbnail && (
                            <Image source={{ uri: item.wikiaThumbnail }} style={styles.image} />
                        )}
                    </View>
                )}
            />
        </ProtectedRoute>
    )
}