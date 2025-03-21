// app/user.tsx
import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Button, Alert, ActivityIndicator } from 'react-native';
import { supabase } from '../lib/supabase';  // Путь к вашему файлу с supabase
import { useRouter } from 'expo-router'; // Для навигации

export default function UserPage() {
    const [user, setUser] = useState<any>(null);  // Типизируйте user для улучшенной поддержки типов
    const [loading, setLoading] = useState(true);
    const router = useRouter();  // Для навигации

    useEffect(() => {
        // Получаем текущую сессию и пользователя
        const fetchUser = async () => {
            try {
                const { data: { session } } = await supabase.auth.getSession();
                if (session) {
                    setUser(session.user);  // Сохраняем информацию о пользователе
                } else {
                    Alert.alert('Пользователь не авторизован');
                    router.push('/auth');  // Перенаправляем на страницу авторизации
                }
            } catch (error) {
                console.error('Ошибка при получении сессии:', error);
                Alert.alert('Ошибка при загрузке данных');
                router.push('/auth');
            } finally {
                setLoading(false);
            }
        };

        fetchUser();
    }, []);

    if (loading) {
        return (
            <View style={styles.loadingContainer}>
                <ActivityIndicator size="large" color="#0000ff" />
                <Text>Загрузка...</Text>
            </View>
        );
    }

    return (
        <View style={styles.container}>
            {user ? (
                <>
                    <Text style={styles.title}>Добро пожаловать, {user.email}</Text>
                    <Text>ID пользователя: {user.id}</Text>
                    <Button
                        title="Выйти"
                        onPress={async () => {
                            await supabase.auth.signOut();  // Выход из аккаунта
                            router.push('/auth');  // Перенаправление на экран авторизации
                        }}
                    />
                </>
            ) : (
                <Text>Не удалось загрузить данные пользователя.</Text>
            )}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    loadingContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20,
    },
});
