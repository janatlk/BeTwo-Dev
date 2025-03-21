import { Tabs } from 'expo-router';
import React from 'react';
import { Platform } from 'react-native';

import { HapticTab } from '@/components/HapticTab';
import { Ionicons } from '@expo/vector-icons';
import TabBarBackground from '@/components/ui/TabBarBackground';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
        headerShown: false,
        tabBarButton: HapticTab,
        tabBarBackground: TabBarBackground,
        tabBarStyle: Platform.select({
          ios: {
            // Use a transparent background on iOS to show the blur effect
            position: 'absolute',
          },
          default: {},
        }),
      }}>
      <Tabs.Screen
        name="articles"
        options={{
          title: 'Статьи',
          tabBarIcon: ({ color }) => <Ionicons size={28} name="document" color={color} />,
        }}
      /><Tabs.Screen
        name="widgets"
        options={{
          title: 'Виджеты',
          tabBarIcon: ({ color }) => <Ionicons size={28} name="apps" color={color} />,
        }}
      /><Tabs.Screen
        name="home"
        options={{
          title: 'Дом',
          tabBarIcon: ({ color }) => <Ionicons size={28} name="home" color={color} />,
        }}
      /><Tabs.Screen
        name="chats"
        options={{
          title: 'Чаты',
          tabBarIcon: ({ color }) => <Ionicons size={28} name="chatbubbles" color={color} />,
        }}
      /><Tabs.Screen
        name="diary"
        options={{
          title: 'Дневник',
          tabBarIcon: ({ color }) => <Ionicons size={28} name="happy" color={color} />,
        }}
      />
    </Tabs>
  );
}
