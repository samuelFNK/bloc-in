import { View } from 'react-native'
import { Stack } from 'expo-router'

const RootLayout = () => {
    return (
        <Stack screenOptions={{
            headerStyle: { backgroundColor: '#ddd'},
            headerTintColor: '#333'
            }}>
            <Stack.Screen name="index" options={{ headerShown: false}}/>
            <Stack.Screen name="stretch-index" options={{ title: 'Stretch-index'}}/>
            <Stack.Screen name="light-sp" options={{ title: 'Light'}}/>
            <Stack.Screen name="medium-sp" options={{ title: 'Medium'}}/>
            <Stack.Screen name="full-sp" options={{ title: 'Full'}}/>
        </Stack>
    )
}
export default RootLayout