import { View } from 'react-native'
import { Stack } from 'expo-router'
import { theme } from '../theme'

const RootLayout = () => {
    return (
        <Stack screenOptions={{
            headerStyle: { backgroundColor: theme.colors.background},
            headerTintColor: theme.colors.text,
            }}>
            <Stack.Screen name="index" options={{ headerShown: false}}/>
            <Stack.Screen name="stretch-index" options={{ title: 'Programs'}}/>
            <Stack.Screen name="light-sp" options={{ title: 'Light'}}/>
            <Stack.Screen name="medium-sp" options={{ title: 'Medium'}}/>
            <Stack.Screen name="full-sp" options={{ title: 'Full'}}/>
        </Stack>
    )
}
export default RootLayout