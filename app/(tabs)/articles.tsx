import { View, Text } from 'react-native';
import {Redirect} from "expo-router";
export default function ArticlesScreen() {
    return (
        <Redirect href="/profile" />
    );
}
