import ProtectedRoute from "@/components/protectedRoutes/protectedRoute"
import { Text, View } from "react-native"

export default function dashboard() {
    return (
        <ProtectedRoute>
            <View>
                <Text>Dashboard</Text>
            </View>
        </ProtectedRoute>
    )
}