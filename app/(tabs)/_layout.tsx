import { Tabs } from 'expo-router';
import React from 'react';
import { Platform } from 'react-native';

import { HapticTab } from '@/components/HapticTab';
import { IconSymbol } from '@/components/ui/IconSymbol';
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
          tabBarIcon: ({ color }) => <IconSymbol size={28} name="document" color={color} />,
        }}
      /><Tabs.Screen
        name="widgets"
        options={{
          title: 'Виджеты',
          tabBarIcon: ({ color }) => <IconSymbol size={28} name="apps.iphone" color={color} />,
        }}
      /><Tabs.Screen
        name="home"
        options={{
          title: 'Дом',
          tabBarIcon: ({ color }) => <IconSymbol size={28} name="house.fill" color={color} />,
        }}
      /><Tabs.Screen
        name="chats"
        options={{
          title: 'Чаты',
          tabBarIcon: ({ color }) => <IconSymbol size={28} name="message" color={color} />,
        }}
      /><Tabs.Screen
        name="diary"
        options={{
          title: 'Дневник',
          tabBarIcon: ({ color }) => <IconSymbol size={28} name="smiley" color={color} />,
        }}
      />
    </Tabs>
  );
}
