import { View, Text, Button } from "react-native";
import { useRouter } from "expo-router";

export default function AuthScreen() {
    const router = useRouter();

    return (
        <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
            <Text>Экран авторизации</Text>
            <Button title="Войти" onPress={() => router.push("/(tabs)/home")} />
        </View>
    );
}
